import { GetStaticPaths, GetStaticProps } from "next";
import { graphqlClient } from "@/lib/graphql-client";
import { GET_ALL_COURSES, GET_COURSE_BY_SLUG } from "@/lib/queries";
import { Course } from "@/types/course";
import MainLayout from "@/components/Layout/MainLayout";
import CourseHero from "@/components/Course/CourseHero";
import CourseSpecs from "@/components/Course/CourseSpecs";
import dynamic from "next/dynamic";
import SEO from "@/components/Layout/SEO";
import CeVeiInvataSiAvantaje from "@/components/Course/CeVeiInvataSiAvantaje";
const GrupGalerie = dynamic(() => import("@/components/Course/Galerie"), {
  ssr: false,
});
const ConditiiDeInscriere = dynamic(() => import("@/components/Course/ConditiiDeInscriere"), {
  ssr: false,
});
const GrupFaq = dynamic(() => import("@/components/Course/grupFaq"), {
  ssr: false,
});
const ParagrafB = dynamic(() => import("@/components/Course/paragrafInvestesteInCarieraTa"), {
  ssr: false,
});

interface Props {
  course: Course;
}
export default function CoursePage({ course }: Props) {
  if (!course) return <div>Course not found</div>;
  return (
    <MainLayout>
      <SEO
        title={course.acf.seoTitle || course.title}
        description={course.acf.seoDescription || "Default description"}
        canonical={`https://siteul-tau.ro/${course.slug}`}
      />
      <CourseHero
        title={course.title}
        image={course.acf.heroImage?.node?.mediaItemUrl || ""}
        PozaInstructor={course.acf.pozaInscructor?.node?.mediaItemUrl || undefined}
        instructor={course.acf.instructor || ""}
        city={course.acf.city}
        shortDescription={course.acf.shortDescription || ""}
       
      />
      <CourseSpecs course={course} />
      <div
        className="prose lg:prose-xl max-w-7xl mx-3 sm:mx-auto mt-10"
        dangerouslySetInnerHTML={{ __html: course.content || "" }}
      />

     
        {course.acf.grupGalerie && (
        <GrupGalerie 
          grupGalerie={{
            pozeGalerie: course.acf.grupGalerie?.pozeGalerie || { nodes: [] },
            videoYt: course.acf.grupGalerie?.videoYt || ""
          }} 
        />
        )}
  


     
    <CeVeiInvataSiAvantaje 
      grupCeVeiInvataSiAvantaje={course.acf.grupCeVeiInvataSiAvantaje || {
        avantajulCursului: [],
        ce_vei_invata: []
      }}
    />

      <ConditiiDeInscriere 
        grupConditiiDeInscriere={course.acf.grupConditiiDeInscriere}
      />
      
      <ParagrafB course={course} />
      <GrupFaq 
       GrupFaq={course.acf.grupFaq || []}
      />
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphqlClient.request(GET_ALL_COURSES);
  const paths = data.courses.nodes.map((c: any) => ({
    params: { slug: c.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await graphqlClient.request(GET_COURSE_BY_SLUG, {
    slug: params?.slug,
  });

  if (!data.course) {
    return { notFound: true };
  }

  return {
    props: { course: data.course },
    revalidate: 6000, // ISR - revalidează la fiecare 60 secunde
  };
};

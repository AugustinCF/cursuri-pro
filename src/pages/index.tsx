import React from "react";
import { GetStaticProps } from "next";
import { graphqlClient } from "@/lib/graphql-client";
import { GET_ALL_COURSES } from "@/lib/queries";
import { Course } from "@/types/course";
import SEO from "@/components/Layout/SEO";
import HeroSection from "@/components/Home/HeroSection";
import CoursesGrid from "@/components/Home/CoursesGrid";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import CTASection from "@/components/Home/CTASection";

interface HomeProps {
  courses: Course[];
}

export default function Home({ courses }: HomeProps) {
  return (
    <>
      <SEO
        title="Cursuri BuldoExcavator - Certificare Profesională"
        description="Cursuri profesionale de BuldoExcavator cu instructori calificați. Certificare recunoscută, echipament modern și condiții avantajoase de plată."
        canonical="https://siteul-tau.ro"
      />
      
      <HeroSection courses={courses} />
      <CoursesGrid courses={courses} />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await graphqlClient.request(GET_ALL_COURSES);

  return {
    props: {
      courses: data.courses.nodes,
    },
    revalidate: 60,
  };
};

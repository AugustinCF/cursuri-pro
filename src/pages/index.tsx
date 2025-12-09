import React from "react";
import { GetStaticProps } from "next";
import { graphqlClient } from "@/lib/graphql-client";
import { GET_ALL_COURSES } from "@/lib/queries";
import { Course } from "@/types/course";
import SEO from "@/components/Layout/SEO";
import HeroSection from "@/components/Home/HeroSection";
import CoursesGrid from "@/components/Home/CoursesGrid";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import QuickEnrollForm from "@/components/Home/QuickEnrollForm";
import SEOContent from "@/components/Home/SEOContent";
import CTASection from "@/components/Home/CTASection";

interface HomeProps {
  courses: Course[];
}

export default function Home({ courses }: HomeProps) {
  return (
    <>
      <SEO
        title="Cursuri BuldoExcavator - Certificare Profesională | Atestat ANC"
        description="Cursuri profesionale de BuldoExcavator, Macara și utilaje grele cu instructori calificați. Certificare recunoscută ANC, echipament modern și condiții avantajoase de plată."
        canonical="https://siteul-tau.ro"
      />
      
      <HeroSection courses={courses} />
      <CoursesGrid courses={courses} limit={3} />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <QuickEnrollForm courses={courses} />
      <SEOContent />
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

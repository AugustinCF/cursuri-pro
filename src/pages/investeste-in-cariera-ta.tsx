import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { graphqlClient } from "@/lib/graphql-client";
import { GET_ALL_COURSES } from "@/lib/queries";
import { Course } from "@/types/course";
import SEO from "@/components/Layout/SEO";
import CTAButton from "@/components/UI/CTAButton";

interface InvestesteProps {
  courses: Course[];
}

export default function Investeste({ courses }: InvestesteProps) {
  const careerPaths = [
    {
      title: "Operator Buldoexcavator",
      salary: "3.500 - 6.000 RON/lună",
      demand: "Foarte mare",
      description: "Unul dintre cele mai căutate meserii în construcții. Lucrezi pe șantiere diverse, infrastructură, demolări.",
      skills: ["Manevrare utilaj", "Citire planuri", "Siguranță pe șantier"]
    },
    {
      title: "Macaragiu Autorizat",
      salary: "4.000 - 7.000 RON/lună",
      demand: "Mare",
      description: "Operezi macarale fixe sau mobile. Necesită precizie și responsabilitate mare.",
      skills: ["Control macara", "Calcul sarcini", "Coordonare echipă"]
    },
    {
      title: "Operator Stivuitor",
      salary: "2.800 - 4.500 RON/lună",
      demand: "Foarte mare",
      description: "Lucrezi în depozite, fabrici, șantiere. Program de obicei stabil, condiții bune.",
      skills: ["Manevrare stivuitor", "Organizare mărfuri", "Gestiune stoc"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Salariu competitiv",
      description: "De la 3.000 RON net pentru începători, până la 7.000+ RON pentru cei cu experiență"
    },
    {
      icon: "📈",
      title: "Creștere rapidă",
      description: "După 6-12 luni poți ajunge la salarii cu 50-100% mai mari decât la început"
    },
    {
      icon: "🏗️",
      title: "Multe oportunități",
      description: "Industria construcțiilor e în creștere constantă, întotdeauna sunt locuri de muncă"
    },
    {
      icon: "🌍",
      title: "Mobilitate internațională",
      description: "Certificările sunt recunoscute în UE - poți lucra în Germania, Austria, Franța"
    },
    {
      icon: "🛡️",
      title: "Siguranță job",
      description: "Meserie sigură, mereu va fi nevoie de operatori calificați"
    },
    {
      icon: "⚡",
      title: "Start rapid",
      description: "În 2-4 săptămâni poți avea certificatul și să începi să lucrezi"
    }
  ];

  const investmentComparison = [
    { item: "Cost curs", value: "1.500 - 2.500 RON" },
    { item: "Durata pregătire", value: "2-4 săptămâni" },
    { item: "Salariu lunar după curs", value: "3.500+ RON" },
    { item: "Recuperare investiție", value: "Sub 1 lună" },
    { item: "Câștig anual suplimentar", value: "15.000 - 30.000 RON" }
  ];

  return (
    <>
      <SEO
        title="Investește în Cariera Ta - Cursuri Utilaje | Atestat ANC"
        description="Descoperă cum un curs de utilaje poate transforma cariera ta. Salariu de la 3.500 RON/lună, siguranță în job și oportunități în România și UE."
        canonical="https://siteul-tau.ro/investeste-in-cariera-ta"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investește în Cariera Ta
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Un curs de 2-4 săptămâni poate să-ți schimbe complet viitorul profesional
            </p>
            <CTAButton className="text-2xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">2-4</div>
              <div className="text-lg">săptămâni de curs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">3.500+</div>
              <div className="text-lg">RON salariu/lună</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">rată de angajare</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Cariere Disponibile</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Vezi ce poți face după ce termini cursul
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">{career.title}</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Salariu:</span>
                    <span className="font-bold text-green-600">{career.salary}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Cerere piață:</span>
                    <span className="font-bold text-blue-600">{career.demand}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{career.description}</p>

                <div>
                  <div className="font-semibold mb-2">Ce trebuie să știi:</div>
                  <ul className="space-y-1">
                    {career.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">De Ce Merită?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Beneficiile unei cariere în domeniul utilajelor
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment ROI */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Cât Investești vs Cât Câștigi</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Hai să vedem cifrele clare
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-xl">
            <div className="space-y-4">
              {investmentComparison.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                  <span className="text-lg font-semibold text-gray-700">{item.item}</span>
                  <span className="text-xl font-bold text-blue-600">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-100 rounded-xl">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Câștig net pe 5 ani:</div>
                <div className="text-4xl font-bold text-green-700">75.000 - 150.000 RON</div>
                <p className="text-sm text-gray-600 mt-2">Față de un job obișnuit fără calificare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ei au Investit în Ei. Tu?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                  M
                </div>
                <div>
                  <div className="font-bold text-lg">Mihai, 28 ani</div>
                  <div className="text-gray-600">Operator buldoexcavator</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Eram șofer pe camion, câștigam 2.500 RON. Am făcut cursul, acum sunt la 4.800 RON 
                și lucrez mai puțin. Cea mai bună decizie."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                  A
                </div>
                <div>
                  <div className="font-bold text-lg">Ana, 35 ani</div>
                  <div className="text-gray-600">Macaragistă</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "După ce am rămas fără job la 33 de ani, am zis că schimb domeniul. 
                Acum lucrez pe macara și câștig mai mult ca șeful meu de dinainte."
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton className="text-xl" />
          </div>
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Cursuri Disponibile</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Alege cursul care ți se potrivește
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/${course.slug}`}
                className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">{course.title}</h3>
                <div className="text-gray-600 mb-2">{course.acf.city}</div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-2xl font-bold text-blue-600">{course.acf.price} RON</span>
                  <span className="text-sm text-gray-500">{course.acf.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata să faci pasul?
          </h2>
          <p className="text-xl mb-8">
            Peste 6 luni poți să ai un job mai bun, salariu mai mare și o carieră stabilă
          </p>
          <CTAButton className="text-2xl" />
          
          <p className="mt-8 text-blue-100">
            Sau sună acum: <a href="tel:+40744111222" className="font-bold hover:text-white">0744 111 222</a>
          </p>
        </div>
      </section>
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

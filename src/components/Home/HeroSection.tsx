import Image from "next/image";
import Link from "next/link";
import { Course } from "@/types/course";
import CTAButton from "@/components/UI/CTAButton";

interface HeroSectionProps {
  courses: Course[];
}

export default function HeroSection({ courses }: HeroSectionProps) {
  // Găsește primul curs cu imagine pentru hero
  const featuredCourse = courses.find(c => c.acf.heroImage?.node?.mediaItemUrl);

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {featuredCourse?.acf.heroImage?.node?.mediaItemUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={featuredCourse.acf.heroImage.node.mediaItemUrl}
            alt="Curs BuldoExcavator"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Cursuri de BuldoExcavator Profesionale
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Obține certificarea pentru conducerea utilajelor de construcții. 
          Instructori calificați, echipament modern și condiții avantajoase de plată.
        </p>
        <CTAButton className="text-2xl" />
      </div>
    </section>
  );
}

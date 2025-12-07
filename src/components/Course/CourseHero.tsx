import Image from "next/image";
import CTAButton from "@/components/UI/CTAButton";


interface CourseHeroProps {
  title: string;
  image: string;
  city: string;
  shortDescription: string;
  instructor: string;
  PozaInstructor?: string;
}

export default function CourseHero({
  title,
  image,
  city,
  shortDescription,
  instructor,
  PozaInstructor,
}: CourseHeroProps) {
  return (
    <section className="relative z-0">

      {/* Background image + overlay */}
      <div className="absolute inset-0 min-h-full">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 gradient-hero pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-3 sm:mx-auto py-8 md:py-12 flex flex-col text-white">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>

        <p className="text-xlg mt-2">Curs disponibil în {city}</p>

        <p className="max-w-2xl mt-2 text-l leading-relaxed">{shortDescription}</p>

        {/* Instructor */}
        <div className="flex items-center space-x-3 mt-4">
          {PozaInstructor ? (
            <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-yellow-500">
              <Image
                src={PozaInstructor}
                alt={`${instructor} poza`}
                fill
                className="object-cover"
                sizes="40px"
                quality={80}
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-400" />
          )}

          <p className="text-base">
            Instructor:{" "}
            <span className="underline decoration-[var(--color-primary)]">
              {instructor}
            </span>
          </p>
        </div>

        {/* CTA BUTTON */}
        <CTAButton className="mt-6 mb-4" />
      </div>
    </section>
  );
}

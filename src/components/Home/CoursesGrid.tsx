import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";

interface CoursesGridProps {
  courses: Course[];
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Cursurile Noastre</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Alege cursul potrivit pentru tine din locațiile disponibile
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/${course.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                {course.acf.heroImage?.node?.mediaItemUrl ? (
                  <Image
                    src={course.acf.heroImage.node.mediaItemUrl}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <span className="text-gray-500">Fără imagine</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{course.acf.city}</span>
                </div>

                {course.acf.shortDescription && (
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.acf.shortDescription}
                  </p>
                )}

                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{course.acf.price} RON</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div>{course.acf.duration}</div>
                    <div>{course.acf.tipDeCurs}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

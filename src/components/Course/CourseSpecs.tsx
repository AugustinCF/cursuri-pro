import { Course } from "@/types/course";

export default function CourseSpecs({ course }: { course: Course }) {
  return (
<div className="max-w-7xl mx-3 sm:mx-auto -mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4 Bg-gray p-6 rounded-xl shadow z-10 relative">
  <div className="text-left sm:text-center">
    <strong>Preț Curs</strong>
    <div className="mt-1">{course.acf.price} RON</div>
  </div>
  <div className="text-left sm:text-center">
    <strong>Plata</strong>
    <div className="mt-1">{course.acf.plata}</div>
  </div>
  <div className="text-left sm:text-center">
    <strong>Orar</strong>
    <div className="mt-1">{course.acf.orar}</div>
  </div>
  <div className="text-left sm:text-center">
    <strong>Durata</strong>
    <div className="mt-1">{course.acf.duration}</div>
  </div>
  <div className="text-left sm:text-center">
    <strong>Tip curs</strong>
    <div className="mt-1">{course.acf.tipDeCurs}</div>
  </div>
  {/* 
  <div className="text-left sm:text-center">
    <strong>Categorie</strong>
    <div className="mt-1">{course.acf.categorie_curs?.nodes?.map((cat) => cat.slug).join(", ")}</div>
  </div>
  */}
</div>

  );
}

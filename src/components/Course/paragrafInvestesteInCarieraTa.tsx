import { Course } from "@/types/course";

export default function ParagrafB({ course }: { course: Course })
 {
    {return (
        <div className="max-w-7xl mx-3 sm:mx-auto my-10">
          <h2 className="text-2xl font-bold mb-4">Investește în cariera ta</h2>
          <p className="text-l">
            {course.acf.paragrafInvestesteInCarieraTa}
          </p>
        <button className="mt-5 YellowColor text-white  py-3 px-12 rounded-button inline-block !w-auto">
          Citeste mai mult !
        </button>
        </div>
      );
    }
}
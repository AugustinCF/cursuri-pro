import { useState } from "react";
import { Course } from "@/types/course";

interface QuickEnrollFormProps {
  courses: Course[];
}

export default function QuickEnrollForm({ courses }: QuickEnrollFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aici vei integra cu API-ul tău pentru trimiterea formularului
      // De exemplu: await fetch('/api/enroll', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulare trimitere
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", course: "" });
      
      // Reset success message după 5 secunde
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              Vrei să te înscrii?
            </h2>
            <p className="text-lg text-gray-600">
              Lasă-ne datele tale și <span className="font-bold text-blue-600">te sunăm noi în maxim 5 minute</span>
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ Mulțumim! Verificăm telefonul și te sunam cât de curând.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ❌ Ups, ceva nu a mers. Mai încearcă o dată.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nume */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Cum te cheamă?
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                placeholder="Ex: Ion Popescu"
              />
            </div>

            {/* Telefon */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                La ce număr te sunăm?
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                placeholder="Ex: 0712345678"
                pattern="[0-9]{10}"
              />
            </div>

            {/* Curs Dorit */}
            <div>
              <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                Ce curs te interesează?
              </label>
              <select
                id="course"
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg bg-white"
              >
                <option value="">Selectează un curs...</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.slug}>
                    {course.title} - {course.acf.city}
                  </option>
                ))}
              </select>
            </div>

            {/* Buton Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full YellowColor text-white py-4 px-8 rounded-lg text-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Se trimite...
                </span>
              ) : (
                <>
                  📞 Trimite - te sunam noi!
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>🔒 Nu-ți fă griji, datele tale rămân la noi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

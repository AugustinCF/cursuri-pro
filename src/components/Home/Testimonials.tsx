import Image from "next/image";

interface Testimonial {
  name: string;
  job: string;
  text: string;
  image: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Ion P.",
      job: "Operator Excavator",
      text: "Am făcut cursul acum vreo 4 luni. Nu știam nimic despre utilaje înainte, dar instructorii au fost ok, răbdători. M-au învățat pas cu pas. Acum lucrez la o firmă și câștig decent. Merită investiția.",
      image: "https://api.cursbuldo.cloud/wp-content/uploads/2024/testimonial-1.jpg",
      rating: 5
    },
    {
      name: "Maria I.",
      job: "Macaragistă",
      text: "La început eram un pic sceptică, dar m-au convins colegii. Atmosfera la curs a fost relaxată, fără presiune. Am picat o dată la examen dar am luat-o din prima la a doua încercare. Recomand!",
      image: "https://api.cursbuldo.cloud/wp-content/uploads/2024/testimonial-2.jpg",
      rating: 4
    },
    {
      name: "Andrei M.",
      job: "Buldoexcavatorist",
      text: "Cursul e foarte practic. Majoritatea timpului e pe șantier cu utilajul real, nu doar teorie. Asta mi-a plăcut cel mai mult. Salariul după curs chiar e mai mare decât aveam înainte.",
      image: "https://api.cursbuldo.cloud/wp-content/uploads/2024/testimonial-3.jpg",
      rating: 5
    },
    {
      name: "Elena D.",
      job: "Operator utilaje",
      text: "Am avut puțin noroc și mi-au ieșit bine lucrurile. Cursul durează cam 3 săptămâni dacă mergi regulat. Partea grea e că trebuie să înveți și acasă pentru examen, nu e suficient doar să mergi la ore.",
      image: "https://api.cursbuldo.cloud/wp-content/uploads/2024/testimonial-4.jpg",
      rating: 4
    },
    {
      name: "Gheorghe S.",
      job: "Macaragiu",
      text: "Sincer, eram șomer de vreo 6 luni când am făcut cursul. Acum am contract pe perioadă nedeterminată. Mai învăț încă, dar măcar am un venit stabil și e mult mai bine decât înainte.",
      image: "https://api.cursbuldo.cloud/wp-content/uploads/2024/testimonial-5.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Păreri de la cursanți</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Ce spun cei care au absolvit cursurile noastre
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-300 mr-4">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.job}</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {testimonial.text}
              </p>

              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i >= testimonial.rating ? 'text-gray-300' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

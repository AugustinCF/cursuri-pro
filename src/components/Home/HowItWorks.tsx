export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Alegi cursul",
      description: "Te uiți prin listă și vezi ce curs ți-ar prinde bine - buldoexcavator, macara sau altceva",
      icon: "🎯"
    },
    {
      number: "2",
      title: "Ne dai un semn",
      description: "Completezi formularul sau ne dai un telefon. Discutăm câteva minute despre program, preț, detalii",
      icon: "📝"
    },
    {
      number: "3",
      title: "Începi cursul",
      description: "Vii la pregătire când stabilim împreună, faci practica și apoi dai examenul pentru certificat",
      icon: "✅"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Cum merge treaba?</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          E simplu, uite ce ai de făcut
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - only between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-1 bg-blue-200 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center z-10">
                {/* Step Number */}
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            ⏱️ De obicei durează 2-4 săptămâni, depinde de programul tău
          </p>
        </div>
      </div>
    </section>
  );
}

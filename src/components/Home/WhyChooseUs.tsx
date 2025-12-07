import CheckIcon from "@/components/icons/CheckIcon";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Instructori Calificați",
      description: "Echipă de instructori cu experiență vastă în domeniu",
      icon: "👨‍🏫"
    },
    {
      title: "Echipament Modern",
      description: "Utilaje noi și bine întreținute pentru practică",
      icon: "🚜"
    },
    {
      title: "Certificare Recunoscută",
      description: "Certificat recunoscut la nivel național",
      icon: "📜"
    },
    {
      title: "Plată Flexibilă",
      description: "Opțiuni multiple de plată adaptate nevoilor tale",
      icon: "💳"
    },
    {
      title: "Suport Complet",
      description: "Asistență pe toată durata cursului și după finalizare",
      icon: "🤝"
    },
    {
      title: "Program Flexibil",
      description: "Cursuri adaptate programului tău",
      icon: "⏰"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">De Ce Să Ne Alegi?</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Beneficiile cursurilor noastre profesionale
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

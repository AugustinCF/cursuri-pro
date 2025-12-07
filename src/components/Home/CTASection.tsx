import CTAButton from "@/components/UI/CTAButton";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Începe-ți Cariera Astăzi!
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Înscrie-te acum și fă primul pas către o carieră de succes în domeniul construcțiilor
        </p>
        <CTAButton className="text-2xl" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-100">Absolvenți</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-blue-100">Rată de Promovare</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-100">Ani Experiență</div>
          </div>
        </div>
      </div>
    </section>
  );
}

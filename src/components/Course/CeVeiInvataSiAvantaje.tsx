import CheckIcon from "@/components/icons/CheckIcon";

interface GrupProps {
  grupCeVeiInvataSiAvantaje: {
    avantajulCursului: string[];
    ce_vei_invata: string[];
  };
}
 
export default function CeVeiInvataSiAvantaje({ grupCeVeiInvataSiAvantaje }: GrupProps) {
  if (!grupCeVeiInvataSiAvantaje) return null;

  const { avantajulCursului, ce_vei_invata } = grupCeVeiInvataSiAvantaje;

  return (
    <section className="max-w-7xl mx-3 sm:mx-auto mt-16 mb-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-xl font-bold mb-6">Ce vei învăța</h2>
        <ul className="mb-10 text-xl space-y-2">
          {ce_vei_invata.map((item, i) => (
            <li key={i} className="flex items-center">
              <span>  <CheckIcon size={18} className="text-green-500 mr-2" /></span>
              {item}
            </li>
          ))}
        </ul>

      </div>

      <div>
        <h2 className="text-xl font-bold mb-6">Avantajele cursului</h2>
        <ul className="list-disc text-xl space-y-2">
          {avantajulCursului.map((item, i) => (
           <li key={i} className="flex items-center">
              <span>  <CheckIcon size={18} className="text-green-500 mr-2" /></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

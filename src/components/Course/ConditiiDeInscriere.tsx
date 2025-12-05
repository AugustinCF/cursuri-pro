import Image from "next/image";
import CheckIcon from "@/components/icons/CheckIcon";
import React from "react";

 
interface GrupProps {
  grupConditiiDeInscriere?: {
    conditiiDeInscriere: string[];
    conditiiDeInscriereImagine?: {
      node: {
        altText?: string | null;
        mediaItemUrl: string;
      };
    } | null;
  };
}

export default function ConditiiDeInscriere({ grupConditiiDeInscriere }: GrupProps) {
  if (!grupConditiiDeInscriere) return null;

  const { conditiiDeInscriere, conditiiDeInscriereImagine } = grupConditiiDeInscriere;

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-3 sm:mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-xl font-bold mb-6">Ce vei învăța</h2>
        <ul className="mb-10 text-xl space-y-2">
          {conditiiDeInscriere.map((item, i) => (
            <li key={i} className="flex items-center">
              <span><CheckIcon size={18} className="text-green-500 mr-2" /></span>
              {item}
            </li>
          ))}
        </ul>
                <button className="mt-5 YellowColor text-white  py-3 px-12 rounded-button inline-block !w-auto">
          Înscrie-te acum !
          <span className="block text-xs font-semibold">
            Fără taxe ascunse
          </span>
        </button>
      </div>

      {conditiiDeInscriereImagine?.node?.mediaItemUrl && (
          <Image
            src={conditiiDeInscriereImagine.node.mediaItemUrl}
            alt={conditiiDeInscriereImagine.node.altText || "Condiții de înscriere"}
            width={400} 
            height={400}
           />
          )}
      <div>
       
      </div>
      </div>
    </section>
  );
}

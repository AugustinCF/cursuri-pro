import Image from "next/image";
import CheckIcon from "@/components/icons/CheckIcon";
import CTAButton from "@/components/UI/CTAButton";
import React from "react";

 
interface GrupProps {
  grupConditiiDeInscriere?: {
    conditiiDeInscriere: string[];
    conditiiDeInscriereImagine?: {
      node: {
        altText?: string | null;
        sourceUrl: string;
      };
    } | null;
  };
}

export default function ConditiiDeInscriere({ grupConditiiDeInscriere }: GrupProps) {
  if (!grupConditiiDeInscriere) return null;

  const { conditiiDeInscriere, conditiiDeInscriereImagine } = grupConditiiDeInscriere;

 
  
  // Construiește URL-ul imaginii
  const imageUrl = conditiiDeInscriereImagine?.node?.sourceUrl;
 
  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-3 sm:mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-xl font-bold mb-6">Condiții de înscriere</h2>
        <ul className="mb-10 text-xl space-y-2">
          {conditiiDeInscriere.map((item, i) => (
            <li key={i} className="flex items-center">
              <span><CheckIcon size={18} className="text-green-500 mr-2" /></span>
              {item}
            </li>
          ))}
        </ul>
        <CTAButton className="mt-5" />
      </div>

      <div className="flex items-center justify-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={conditiiDeInscriereImagine?.node?.altText || "Condiții de înscriere"}
            width={400} 
            height={400}
            quality={75}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 400px"
            className="rounded-lg shadow-lg"
          />
        ) : (
          <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Nicio imagine disponibilă</p>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}

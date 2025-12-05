import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GrupProps {
  grupGalerie: {
    pozeGalerie: {
      nodes: {
        link: string;
      }[];
    };
    videoYt: string;
  };
}

export default function GrupGalerie({ grupGalerie }: GrupProps) {
  if (!grupGalerie) return null;

  const { pozeGalerie, videoYt } = grupGalerie;

  return (
    <section className="max-w-7xl mx-3 sm:mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* VIDEO COLUMN */}
      <div>
        <div className="aspect-video rounded-lg overflow-hidden shadow">
         <iframe
          src={videoYt.replace("watch?v=", "embed/") || ""}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
        </div>
      </div>

      {/* GALERIE CAROSEL */}
      <div>
        {pozeGalerie?.nodes?.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl shadow-lg"
          >
            {pozeGalerie.nodes.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[350px]">
                <Image
                  src={img.link}
                  alt={`galerie-${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Nu există imagini în galerie.</p>
        )}
      </div>

    </section>
  );
}
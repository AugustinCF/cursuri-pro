import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  faqDescriere: string;
  faq_titlu: string;
}

interface GrupFaqProps {
  GrupFaq: FaqItem[];
}

export default function GrupFaq({ GrupFaq }: GrupFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-3 sm:mx-auto">
        <h2 className="text-2xl font-bold mb-8">Întrebări frecvente</h2>

        <div className="space-y-4">
          {GrupFaq.map((item, index) =>  {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* TITLU */}
                <div className="flex justify-between items-center">
                  <span className="text-l font-semibold">{item.faq_titlu}</span>

                  {/* ICON ROTATING */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2l"
                  >
                    ▼
                  </motion.span>
                </div>

                {/* CONȚINUT ANIMAT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-gray-700 text-l leading-relaxed">
                        {item.faqDescriere}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

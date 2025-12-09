import { useState } from "react";
import ModalContact from "@/components/UI/ModalContact";
import { CONTACT_CONFIG, CTA_CONFIG } from "@/config/contact";

interface CTAButtonProps {
  className?: string;
}

export default function CTAButton({ className = "" }: CTAButtonProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className={`YellowBGColor text-xl text-white py-3 px-12 rounded-button inline-block w-fit ${className}`}
        onClick={() => setOpenModal(true)}
      >
        {CTA_CONFIG.primaryText}
        <span className="block text-xs font-semibold">
          {CTA_CONFIG.secondaryText}
        </span>
      </button>

      <ModalContact
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={CONTACT_CONFIG.modalTitle}
        phone={CONTACT_CONFIG.phone}
        whatsapp={CONTACT_CONFIG.whatsapp}
        email={CONTACT_CONFIG.email}
      />
    </>
  );
}

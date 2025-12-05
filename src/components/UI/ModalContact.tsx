import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface ModalContactProps {
  open: boolean;
  onClose: () => void;
  phone?: string;
  whatsapp?: string;
  email?: string;
  title?: string;
}

export default function ModalContact({
  open,
  onClose,
  phone,
  whatsapp,
  email,
  title = "Contactează-ne",
}: ModalContactProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
              
              {/* Title */}
              <Dialog.Title className="text-xl font-bold mb-5 text-center">
                {title}
              </Dialog.Title>

              {/* Options */}
              <div className="space-y-4">
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg"
                  >
                    <Phone size={20} />
                    Sună: {phone}
                  </a>
                )}

                {whatsapp && (
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    className="flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp: {whatsapp}
                  </a>
                )}

                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 bg-yellow-500 text-white px-4 py-3 rounded-lg"
                  >
                    <Mail size={20} />
                    Trimite Email
                  </a>
                )}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="mt-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium"
              >
                Închide
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

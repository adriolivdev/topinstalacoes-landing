import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5547999999999" // substitui pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition animate-shake"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;

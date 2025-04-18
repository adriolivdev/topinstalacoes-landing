import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Logo e nome */}
        <div>
          <h2 className="text-2xl font-bold">TopInstalações ⚡</h2>
          <p className="text-gray-400 text-sm">Soluções residenciais com qualidade e confiança.</p>
        </div>

        {/* Informações de contato com ícones */}
        <div className="text-sm space-y-1 text-gray-300">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="text-yellow-400" /> Joinville, SC
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaPhoneAlt className="text-yellow-400" /> (47) 99999-9999
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-yellow-400" /> atendimento@topinstalacoes.com.br
          </p>
        </div>

        {/* Redes sociais com ícones */}
        <div className="flex gap-4 text-yellow-400 text-xl">
          <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/topinstalacoes" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TopInstalações. Todos os direitos reservados.
        <br />
        Desenvolvido por <span className="text-green-400 font-semibold">Kaizen Code Digital</span>.
      </div>
    </footer>
  );
};

export default Footer;

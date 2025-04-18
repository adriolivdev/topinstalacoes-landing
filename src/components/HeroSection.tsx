import React from "react";
import heroImage from "../assets/hero-image.png"; // Ajusta o caminho se necessário
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section id="topo" className="bg-gray-900 text-white py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Instalações Seguras <br /> e Profissionais ⚡
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Ar-condicionado, câmeras e energia solar com agendamento rápido e garantia de qualidade.
          </p>

          {/* Botão */}
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300"
          >
            <FaWhatsapp />
            Solicitar orçamento gratuito
          </a>

          {/* Contador animado com destaque */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 text-center md:text-left border-t border-gray-700 pt-6"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <FaCheckCircle className="text-yellow-400 text-xl animate-bounce" />
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Confiança comprovada
              </p>
            </div>

            <p className="text-5xl font-extrabold text-yellow-400 leading-none">
              <CountUp end={1420} duration={2.5} prefix="+" separator="" />
            </p>
            <p className="text-lg font-medium text-gray-300">Trabalhos realizados com excelência</p>
          </motion.div>
        </div>

        {/* Imagem responsiva e espaçada */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Instalação profissional"
            className="w-full h-auto max-w-[700px] mx-auto md:mx-0 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

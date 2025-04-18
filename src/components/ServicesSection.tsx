import React from "react";
import { FaSnowflake, FaVideo, FaSolarPanel } from "react-icons/fa";
import type { JSX } from "react";

// Interface dos serviços com imagem
interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string; // Caminho da imagem
}

// Lista de serviços com ícones e imagens reais
const services: Service[] = [
  {
    title: "Instalação de Ar-condicionado",
    description: "Instalação rápida e segura de ar-condicionado split, com suporte técnico especializado.",
    icon: <FaSnowflake size={40} className="text-blue-500 mx-auto mb-4" />,
    image: "/avatar-ar-condicionado.png", // Coloque sua imagem aqui
  },
  {
    title: "Câmeras de Segurança",
    description: "Proteja sua casa ou empresa com sistemas modernos de videomonitoramento.",
    icon: <FaVideo size={40} className="text-gray-700 mx-auto mb-4" />,
    image: "/avatar-camera.png", // Coloque sua imagem aqui
  },
  {
    title: "Energia Solar",
    description: "Reduza sua conta de luz com energia limpa. Projetos e instalação de painéis solares.",
    icon: <FaSolarPanel size={40} className="text-yellow-500 mx-auto mb-4" />,
    image: "/avatar-solar.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="bg-white text-gray-900 py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nossos Serviços</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              {/* Imagem real do serviço */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

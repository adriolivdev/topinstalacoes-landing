import React from "react";
import type { JSX } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { FaTools, FaHardHat, FaShieldAlt } from "react-icons/fa";

// Interface para tipar os passos
interface Step {
  title: string;
  description: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    title: "Agendamento Rápido",
    description: "Escolha o melhor horário para a visita técnica sem complicação.",
    icon: <HiOutlineCalendar size={40} className="text-yellow-400 mx-auto mb-4" />,
  },
  {
    title: "Visita Técnica",
    description: "Nosso profissional avalia o local e propõe a melhor solução.",
    icon: <FaTools size={40} className="text-blue-400 mx-auto mb-4" />,
  },
  {
    title: "Instalação Segura",
    description: "Executamos a instalação com equipamentos de qualidade e total segurança.",
    icon: <FaHardHat size={40} className="text-green-400 mx-auto mb-4" />,
  },
  {
    title: "Garantia e Suporte",
    description: "Você conta com nossa garantia e suporte pós-serviço.",
    icon: <FaShieldAlt size={40} className="text-gray-200 mx-auto mb-4" />,
  },
];

const StepsSection: React.FC = () => {
  return (
    <section id="como-funciona" className="bg-gray-900 text-white py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Como Funciona</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

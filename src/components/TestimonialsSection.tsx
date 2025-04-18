import React from "react";

// Interface para tipar os depoimentos
interface Testimonial {
  name: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carla Menezes",
    message:
      "Ótimo atendimento! A instalação do ar-condicionado foi rápida e muito bem feita. Recomendo com certeza!",
    avatar: "/src/assets/avatar-carla.png",
  },
  {
    name: "João Ferreira",
    message:
      "Equipe super profissional. Instalaram o sistema de câmeras e agora me sinto muito mais seguro em casa.",
    avatar: "/src/assets/avatar-joao.png",
  },
  {
    name: "Renata Lima",
    message:
      "Fiquei impressionada com a agilidade e qualidade da instalação dos painéis solares. Serviço nota 10!",
    avatar: "/src/assets/avatar-renata.png",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-gray-100 text-gray-900 py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Depoimentos de Clientes</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mt-2">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  // Estados para os campos (não obrigatório se não for funcional ainda)
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    servico: "",
    bairro: "",
    mensagem: "",
  });

  return (
    <section id="formulario" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Solicite um Orçamento</h2>
        <p className="mb-10 text-gray-600">
          Preencha os dados abaixo e nossa equipe entrará em contato com você rapidamente.
        </p>

        {/* Formulário de contato */}
        <form
          className="grid grid-cols-1 gap-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData); // só pra testes
          }}
        >
          {/* Campo Nome */}
          <div>
            <label htmlFor="nome" className="block font-medium">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              className="mt-1 w-full p-3 rounded-md border border-gray-300"
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>

          {/* Campo WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block font-medium">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              placeholder="(99) 99999-9999"
              className="mt-1 w-full p-3 rounded-md border border-gray-300"
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />
          </div>

          {/* Tipo de Serviço */}
          <div>
            <label htmlFor="servico" className="block font-medium">
              Tipo de Serviço
            </label>
            <select
              id="servico"
              className="mt-1 w-full p-3 rounded-md border border-gray-300"
              onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
            >
              <option value="">Selecione</option>
              <option value="ar">Instalação de Ar-condicionado</option>
              <option value="camera">Instalação de Câmeras</option>
              <option value="solar">Instalação de Energia Solar</option>
            </select>
          </div>

          {/* Campo Bairro */}
          <div>
            <label htmlFor="bairro" className="block font-medium">
              Bairro
            </label>
            <input
              id="bairro"
              type="text"
              placeholder="Digite seu bairro"
              className="mt-1 w-full p-3 rounded-md border border-gray-300"
              onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
            />
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block font-medium">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Deixe sua mensagem"
              className="mt-1 w-full p-3 rounded-md border border-gray-300"
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            ></textarea>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-md transition"
          >
            Enviar Orçamento
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

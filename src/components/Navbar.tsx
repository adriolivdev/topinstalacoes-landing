import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#topo" className="text-xl font-bold text-yellow-400">
          TopInstalações ⚡
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#topo" className="hover:text-yellow-400 transition">Home</a>
          <a href="#servicos" className="hover:text-yellow-400 transition">Serviços</a>
          <a href="#como-funciona" className="hover:text-yellow-400 transition">Como Funciona</a>
          <a href="#depoimentos" className="hover:text-yellow-400 transition">Depoimentos</a>

          {/* Botão Orçamento destacado */}
          <a
            href="#formulario"
            className="ml-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-yellow-400 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile (expandido) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4">
          <a onClick={closeMenu} href="#topo" className="block hover:text-yellow-400 transition">Home</a>
          <a onClick={closeMenu} href="#servicos" className="block hover:text-yellow-400 transition">Serviços</a>
          <a onClick={closeMenu} href="#como-funciona" className="block hover:text-yellow-400 transition">Como Funciona</a>
          <a onClick={closeMenu} href="#depoimentos" className="block hover:text-yellow-400 transition">Depoimentos</a>

          {/* Botão Orçamento no mobile */}
          <a
            onClick={closeMenu}
            href="#formulario"
            className="block mt-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

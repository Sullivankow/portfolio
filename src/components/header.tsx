

import React, { useState } from "react";
import logo from "../assets/logos/logo_w.svg";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Projets", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-[#0a2342] shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-white">
        {/* Logo animé */}
        <a href="#home" className="flex items-center gap-2 text-white">
          <img src={logo} alt="Logo SunDev" className="h-20 w-auto animate-spin-slow" style={{ minWidth: 48 }} />
          
        </a>
        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 text-white">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="text-white font-medium hover:text-blue-400 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Menu mobile bouton */}
        <div className="md:hidden">
          <button className="p-2 rounded bg-white hover:bg-gray-100 focus:outline-none" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(true)}>
            <svg width="28" height="28" fill="none" stroke="#0a2342" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>
      {/* Menu mobile glissant */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#0a2342] text-white shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <span className="font-bold text-lg">Menu</span>
          <button aria-label="Fermer le menu" onClick={() => setMenuOpen(false)} className="p-2">
            <svg width="28" height="28" fill="none" stroke="#0a2342" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6L18 18M6 18L18 6"/></svg>
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="block text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay pour fermer en cliquant à côté */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
}

export default Header;
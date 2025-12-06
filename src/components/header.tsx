

import React from "react";
import logo from "../assets/logos/logo_anime.svg";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Projets", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo animé */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Logo SunDev" className="h-20 w-auto animate-spin-slow" style={{ minWidth: 48 }} />
          
        </a>
        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-700 font-medium hover:text-yellow-500 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Menu mobile */}
        <div className="md:hidden">
          <button className="p-2 rounded hover:bg-gray-100 focus:outline-none" aria-label="Ouvrir le menu">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
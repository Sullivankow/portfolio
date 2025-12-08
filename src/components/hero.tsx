import React from "react";
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import logoW from "../assets/logos/logo_w.svg";
import Banniere from "./banniere";

const strengths = [
  {
    name: "Sites performants & modernes",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z"/></svg>
    ),
    desc: "Des solutions rapides, responsives et adaptées à tous les écrans pour valoriser votre image en ligne."
  },
  {
    name: "Mon Expertise ",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#06b6d4" d="M12 2c2.21 0 4 1.79 4 4 0 1.38-.7 2.6-1.76 3.32A6.978 6.978 0 0 1 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.61 1.41-4.89 3.76-6.18A3.99 3.99 0 0 1 12 2Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 14a5 5 0 0 0 5-5c0-1.64-.8-3.09-2.05-4.01A3.99 3.99 0 0 1 12 8a3.99 3.99 0 0 1-2.95 1.99A5.002 5.002 0 0 0 12 18Z"/></svg>
    ),
    desc: "Un développement moderne, maintenable et évolutif grâce aux technologies les plus récentes."
  },
  {
    name: "Accompagnement sur-mesure",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#fbbf24" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/></svg>
    ),
    desc: "Conseils, écoute et suivi personnalisé pour chaque projet, de l’idée à la mise en ligne."
  },
];

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projets", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [ref, visible] = useRevealOnScroll();
  // On s'assure que le ref est bien passé à une balise DOM native
  return (
    <section
      ref={ref}
      className={`flex flex-col items-center bg-gradient-to-b from-[#0a2342] to-[#3B006E] text-white font-sans min-h-screen w-full p-0 m-0 ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      {/* Navigation responsive */}
      <nav className="flex items-center justify-between py-3 w-full">
        <img src={logoW} alt="Logo SunDev" className="h-16 w-auto pl-6" />
        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-white hover:text-blue-400">
              {link.name}
            </a>
          ))}
        </div>
        <button className="hidden md:block bg-white  text-black hover:bg-gray-100 px-6 h-10 rounded-full text-sm transition mr-4">Demander un devis</button>
        {/* Menu burger mobile */}
        <div className="md:hidden flex items-center pr-4">
          <button
            className="p-2 rounded bg-[#0a2342] border-2 border-transparent hover:border-white focus:border-white transition-colors duration-200 !bg-[#0a2342] hover:!bg-[#0a2342] active:!bg-[#0a2342] focus:!bg-[#0a2342]"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Menu mobile glissant */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#0a2342] text-white shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <img src={logoW} alt="Logo SunDev" className="h-12 w-auto" />
          <button aria-label="Fermer le menu" onClick={() => setMenuOpen(false)} className="bg-transparent !bg-transparent hover:!bg-transparent active:!bg-transparent focus:!bg-transparent shadow-none ring-0 outline-none border-none">
            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6L18 18M6 18L18 6"/></svg>
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
        <button className="bg-white text-black hover:bg-gray-100 px-6 h-10 rounded-full text-sm transition mx-6">Demander un devis</button>
      </div>
      {/* Overlay pour fermer en cliquant à côté */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* ...Avatars + étoiles supprimés... */}

      {/* Animation au-dessus du titre principal */}
      <div className="flex flex-col items-center mt-8 animate-bounce-slow select-none">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M21.5 2L7 22h10l-1.5 14L31 16h-10l1.5-14z" fill="#38bdf8" stroke="#fff" strokeWidth="2"/>
        </svg>
        <span className="text-xs text-blue-200 mt-1 tracking-wide uppercase font-semibold">Boostez votre présence en ligne</span>
      </div>

      {/* Titre principal */}
      <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl mt-4 bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
        Développeur web & créateur d’expériences digitales
      </h1>
      <p className="text-gray-200 text-base text-center max-w-xl mt-3">
        J’accompagne les entreprises et entrepreneurs dans la création de sites web modernes, performants et sur-mesure. Spécialiste React, Tailwind, et solutions sur mesure pour booster votre présence en ligne.
      </p>

      {/* ...Barre de recherche supprimée... */}

      {/* ...texte info supprimé... */}

      {/* Points forts */}
      <div className='relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-14'>
        {strengths.map((item, idx) => (
          <div key={idx} className='bg-gradient-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-blue-900 rounded-lg p-6 space-y-4 flex flex-col items-center text-center'>
            <div className='mb-2'>{item.icon}</div>
            <p className='text-lg text-white font-semibold'>{item.name}</p>
            <p className='text-sm text-gray-200'>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 w-full">
        <Banniere />
      </div>
    </section>
  );
};

export default Hero;



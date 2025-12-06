import React from "react";
import logoW from "../assets/logos/logo_w.svg";

const products = [
  {
    name: "Figma",
    logo: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/figma.png",
    desc: "L’IA gère les tâches répétitives pour vous.",
    badge: "Nouveau",
  },
  {
    name: "Miro",
    logo: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/miro.png",
    desc: "Laissez l’IA automatiser les tâches pour votre business.",
  },
  {
    name: "Webflow",
    logo: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/webflow.png",
    desc: "L’IA s’occupe du répétitif, votre équipe se concentre sur l’essentiel.",
  },
];

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projets", href: "#projects" },
  { name: "Équipe", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-[#0a2342] to-[#3B006E] text-white font-sans h-screen w-screen p-0 m-0">
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
          <button className="p-2 rounded bg-white hover:bg-gray-100 focus:outline-none" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(true)}>
            <svg width="28" height="28" fill="none" stroke="#0a2342" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
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

      {/* Avatars + étoiles */}
      <div className="flex items-center mt-16 mx-auto">
        <div className="flex -space-x-3 pr-3">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="w-8 h-8 object-cover rounded-full border-2 border-white" />
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user1" className="w-8 h-8 object-cover rounded-full border-2 border-white" />
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user2" className="w-8 h-8 object-cover rounded-full border-2 border-white" />
        </div>
        <div>
          <div className="flex">
            {Array(5).fill(0).map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FF8F20" stroke="none"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            ))}
          </div>
          <p className="text-xs text-gray-200">Utilisé par 10 000+ utilisateurs</p>
        </div>
      </div>

      {/* Titre principal */}
      <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl mt-8 bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
        Un répertoire. Des milliers de possibilités IA.
      </h1>
      <p className="text-gray-200 text-base text-center max-w-xl mt-3">
        Trouvez les outils parfaits pour l’automatisation, le contenu, la recherche, le code et plus encore.
      </p>

      {/* Barre de recherche fictive */}
      <div className="mt-8 flex items-center text-sm bg-white h-13 border pl-3 pr-0.5 rounded-md border-gray-500/30 w-full max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a2342" strokeWidth="2"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
        <input className="px-2 w-full h-full outline-none placeholder:text-gray-500 text-gray-700 bg-transparent rounded-lg" type="text" placeholder="Rechercher un produit" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 h-11 font-medium text-sm rounded-lg text-white">Rechercher</button>
      </div>

      <p className='text-gray-200 mt-4 text-sm'>2000+ produits et mise à jour quotidienne</p>

      {/* Grille de produits */}
      <div className='relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-14'>
        {products.map((prod, idx) => (
          <div key={idx} className='bg-gradient-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-blue-900 rounded-lg p-6 space-y-4'>
            <div className='flex items-start justify-between'>
              <img className='w-12 h-12' src={prod.logo} alt={prod.name} />
              {prod.badge && <span className='bg-blue-900 text-xs text-white rounded-full px-4 py-2'>{prod.badge}</span>}
            </div>
            <p className='text-lg text-white'>{prod.name}</p>
            <p className='text-sm text-gray-200'>{prod.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;



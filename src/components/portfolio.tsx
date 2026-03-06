import useRevealOnScroll from '../hooks/useRevealOnScroll';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Tableau des projets à présenter dans le portfolio
const projects = [
    
   {
    name: 'Koosy',
    description: "Interface intuitive, authentification, gestion des rôles, sécurité, gestion CRUD via API RESTful, conception de bases de données.",
    stack: ['React Native', 'Expo', 'NestJS', 'MVC', 'API RESTful', 'PostgreSQL', 'Sécurité', 'Authentification', 'Front', 'Back'],
    link: '#',
    image: '/images/koosy.png',
    github: '#',
  },
  {
    name: 'Site Vitrine AutoZen',
    description: "Développement fullstack d’un site vitrine, SEO et performance optimisés.",
    stack: ['React', 'Tailwind', 'Node.js', 'Vite', 'SEO', 'Github Actions'],
    link: '#',
    image: '/images/autozen.png',
    github: '#',
  },
  {
    name: 'Les Clés de l’Atlantique 17',
    description: "Interface responsive, formulaire de contact, bonnes pratiques UI, gestion Kanban, référencement naturel, déploiement continu et maintenance.",
    stack: ['PHP Vanilla', 'Bootstrap', 'Kanban', 'DevOps', 'Github Actions', 'UI', 'SEO'],
    link: '#',
    image: '/images/lcdl.PNG',
    github: '#',
  },
  {
    name: 'Grassy Photographie',
    description: "Site vitrine responsive, formulaire de contact sécurisé, référencement SEO, déploiement continu, gestion de projet, Gitflow, Trello, Kanban.",
    stack: ['React', 'Vite', 'Tailwind', 'PHP', 'SEO', 'Github Actions', 'Gitflow', 'Trello', 'Kanban', 'UI', 'Sécurité'],
    link: '#',
    image: '/images/grassy.png',
    github: '#',
  },
  {
      name: 'Øverst - Site Vitrine',
      description: "Site vitrine pour l'artiste Øverst, design moderne, responsive, galerie et présentation des œuvres.",
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
      link: '#',
      image: '/images/overst.png',
      github: '#',
  },
     {
        name: 'E-commerce Complet',
        description: "Site e-commerce complet : front moderne avec React, Vite et TypeScript, back-end PHP Symfony, API RESTful, gestion catalogue, panier, paiement et espace admin.",
        stack: ['React', 'Vite', 'TypeScript', 'PHP', 'Symfony', 'API RESTful'],
        link: '#',
        image: '/images/ecom.png',
        github: '#',
  },
        {
        name: 'Digital Opus - Site Vitrine',
        description: "Site vitrine pour Digital Opus, interface responsive, design moderne, formulaire de contact et bonnes pratiques UI.",
        stack: ['PHP Vanilla', 'Bootstrap', 'CSS'],
        link: '#',
        image: '/images/opus.png',
        github: '#',
      },

  {
    name: 'Zoo Arcadia',
    description: "API RESTful sécurisée, authentification, gestion des rôles utilisateurs, bases de données SQL et NoSQL, conteneurisation Docker, CI/CD, gestion de projet.",
    stack: ['Symfony', 'API RESTful', 'SQL', 'NoSQL', 'Docker', 'CI/CD', 'Kanban', 'Gitflow', 'Sécurité', 'Authentification'],
    link: '#',
    image: '/images/arcadia.PNG',
    github: '#',
  },
    {
      name: 'CvUp',
      description: "Générateur de CV en ligne, interface moderne et responsive, création et export de CV personnalisés.",
      stack: ['React', 'TypeScript', 'DaisyUI', 'HTML', 'CSS'],
      link: '#',
      image: '/images/cvup.PNG',
      github: '#',
  },
     {
      name: 'Laety Nails',
      description: "Site vitrine pour salon de manucure, interface moderne, responsive et gestion de prise de rendez-vous.",
      stack: ['React', 'Vite', 'Tailwind', 'TypeScript'],
      link: '#',
      image: '/images/laety.jpg',
      github: '#',
  },
       {
        name: 'Restaurant Quai Antique',
        description: "Site complet pour le restaurant Quai Antique : interface vitrine, gestion des menus, réservations, back-end PHP Symfony, API RESTful CRUD.",
        stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'API RESTful', 'CRUD'],
        link: '#',
        image: '/images/qa.png',
        github: '#',
      },
];

// Composant principal Portfolio
export default function Portfolio() {
  // Hook d’animation au scroll
  const [ref, visible] = useRevealOnScroll<HTMLElement>();
  return (
    <section
      id="portfolio"
      ref={ref}
      // Fond dégradé bleu, texte blanc, animation slide-in
      className={`relative isolate bg-gradient-to-br from-[#132a4d] via-[#1a2a4e] to-[#3B006E] px-6 py-24 sm:py-32 lg:px-8 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      {/* Titre et introduction */}
      <div id="projects" className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Portfolio</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Mes dernières réalisations
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
        Découvrez quelques projets réalisés pour des clients variés : vitrine, e-commerce, blog… Chaque site est conçu sur-mesure, avec passion et expertise.
      </p>
      {/* Carrousel Swiper des projets */}
      <div className="mx-auto mt-16 w-full relative">
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={false}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          grabCursor={true}
          className="pb-12"
        >

          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col h-full justify-between shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-2xl max-w-4xl mx-auto w-full min-h-[700px] h-[700px] flex-grow flex-shrink overflow-hidden">
                {/* Image du projet */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-96 object-cover rounded-xl mb-4 bg-black"
                  />
                )}
                {/* Titre */}
                <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
                {/* Description */}
                <div className="text-base text-gray-200 mb-4 h-32 overflow-auto">
                  {project.description}
                </div>
                {/* Stack utilisée */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                  ))}
                </div>
                {/* Lien vers le projet */}
                <div className="mt-auto flex items-center justify-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-400 transition-colors duration-200 text-center"
                  >
                    Voir plus
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                      aria-label="Lien GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.088 2.914.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.851.004 1.708.115 2.509.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.099 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.565 4.938.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}



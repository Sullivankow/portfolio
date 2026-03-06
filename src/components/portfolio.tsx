import useRevealOnScroll from '../hooks/useRevealOnScroll';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Tableau des projets à présenter dans le portfolio
const projects = [
  {
    name: 'SunDev Vitrine',
    description: "Développement fullstack d’un site vitrine : React/Tailwind pour le front, Node.js pour le back, SEO et performance optimisés.",
    stack: ['React', 'Vite', 'Tailwind', 'Node.js'],
    link: '#',
  },
  {
    name: 'E-commerce sur-mesure',
    description: "Création d’une boutique en ligne complète : Next.js côté client, API Node.js/Express, gestion catalogue, paiement Stripe, dashboard admin.",
    stack: ['Next.js', 'Node.js', 'Express', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    name: 'Blog technique',
    description: "Blog personnel fullstack : Gatsby pour le front, API GraphQL, espace admin sécurisé, newsletter automatisée.",
    stack: ['Gatsby', 'GraphQL', 'Mailchimp', 'Node.js'],
    link: '#',
  },
  {
    name: 'Application mobile RH',
    description: "Application mobile RH : React Native/Expo côté client, Firebase pour la gestion des données, Node.js pour les notifications et l’API.",
    stack: ['React Native', 'Expo', 'Firebase', 'Node.js'],
    link: '#',
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
      <div className="mx-auto mt-16 max-w-4xl relative">
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
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col h-full justify-between shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-2xl">
                {/* Image du projet supprimée car aucune image n'est disponible */}
                {/* Titre */}
                <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
                {/* Description */}
                <p className="text-base text-gray-200 mb-4">{project.description}</p>
                {/* Stack utilisée */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                  ))}
                </div>
                {/* Lien vers le projet */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-400 transition-colors duration-200 text-center"
                >
                  Voir le projet
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}




import useRevealOnScroll from '../hooks/useRevealOnScroll';

const features = [
  {
    name: 'Esprit d’équipe',
    description:
      "Capacité à collaborer, à fédérer et à communiquer efficacement, acquise notamment en tant qu’ancien manager.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#38bdf8" />
        <path d="M7 10a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0v-4z" fill="#fff" />
        <path d="M9 14v-2a3 3 0 0 1 6 0v2" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Organisation & autonomie',
    description: "Gestion efficace des priorités, autonomie dans le travail, rigueur et sens des responsabilités.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="#6366f1" />
        <path d="M8 8h8M8 12h8M8 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="8" r="1.5" fill="#fff" />
        <circle cx="8" cy="12" r="1.5" fill="#fff" />
        <circle cx="8" cy="16" r="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Adaptabilité & veille',
    description: "Capacité à apprendre rapidement, à s’adapter aux nouveaux défis et à rester à jour sur les technologies.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a7 7 0 0 1 7 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 0 1 7-7zm0 14v4m0 0h-4m4 0h4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="9" r="3" fill="#fbbf24" />
      </svg>
    ),
  },
];

function About() {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  return (
    <div id="about"
      ref={ref}
      className={`overflow-hidden bg-[#0a2342] py-20 sm:py-32 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
    <div
      ref={ref}
      className={`overflow-hidden bg-[#0a2342] py-20 sm:py-32 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">À propos de SunDev</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Développeur fullstack
              </p>
              <p className="mt-6 text-lg text-gray-200">
                Diplômé Bac +2, passionné par le développement web et les technologies innovantes, j’ai acquis une solide expérience en accompagnant des clients sur des projets variés (vitrine, e-commerce, applications métier). Ma maîtrise du front-end (React, Tailwind, TypeScript) et du back-end (Node.js, Express, bases de données) me permet de concevoir des solutions complètes, performantes et sécurisées.<br/><br/>
                Ancien manager, j’ai développé une forte capacité d’organisation, d’adaptation et d’esprit d’équipe, des qualités essentielles pour collaborer efficacement et fédérer autour des projets.<br/><br/>
                Aujourd’hui, je souhaite rejoindre une équipe dynamique pour contribuer à des projets ambitieux, apprendre et partager mes compétences. Curieux, adaptable et orienté résultats, je m’investis pleinement dans chaque mission pour garantir la réussite et la satisfaction des utilisateurs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-10">
                    <dt className="inline font-semibold text-white">
                      <span className="absolute top-1 left-1">{feature.icon}</span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                    </div>
                    
       
                ))}
                              </dl>
                                {/* Bouton Contact modernisé */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-200 text-lg group focus:outline-none
            sm:py-3 sm:px-8 sm:text-lg
            py-2 px-4 text-sm"
          >
            <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4m0 0h-4m4 0-5-5" />
            </svg>
            Me contacter
          </a>
          <a
            href="/images/CV_DEV_SullivanKowalski.pdf"
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-200 text-lg group ml-4 focus:outline-none
            sm:py-3 sm:px-8 sm:text-lg
            py-2 px-4 text-sm"
          >
            <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
            </svg>
            Télécharger mon CV
          </a>
        </div>
            </div>
          </div>
          <img
            alt="Aperçu projet SunDev"
            src="/images/sundev.jpeg"
            width="800"
            height="480"
            loading="lazy"
            className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-white/10 mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
          </div>
    </div>
  );
}

export default About;


import useRevealOnScroll from '../hooks/useRevealOnScroll';


const features = [
  {
    name: 'Déploiement rapide',
    description:
      "Mise en ligne efficace et sécurisée de vos projets, sans prise de tête. SunDev s'occupe de tout !",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#38bdf8" />
        <path d="M12 7v5l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Sécurité avancée',
    description: "Certificats SSL, protection des données et bonnes pratiques pour un site fiable et rassurant.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="16" height="8" rx="4" fill="#6366f1" />
        <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Sauvegardes régulières',
    description: "Vos données sont sauvegardées et restaurables à tout moment pour une tranquillité totale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="14" rx="4" fill="#fbbf24" />
        <path d="M8 10h8M8 14h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

function About() {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  return (
    <div
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
                Un accompagnement technique & humain
              </p>
              <p className="mt-6 text-lg text-gray-200">
                Passionné par le web, j’aide les entreprises à se démarquer grâce à des solutions sur-mesure, performantes et sécurisées.
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
            </div>
          </div>
          <img
            alt="Aperçu projet SunDev"
            src="public/images/sundev.JPG"
            width={800}
            height={480}
            className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-white/10 mx-auto"
          />
        </div>
      </div>
          </div>
    </div>
  );
}

export default About;

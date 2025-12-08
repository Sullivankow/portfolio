

const features = [
  {
    name: 'Déploiement rapide',
    description:
      "Mise en ligne efficace et sécurisée de vos projets, sans prise de tête. SunDev s'occupe de tout !",
    
  },
  {
    name: 'Sécurité avancée',
    description: "Certificats SSL, protection des données et bonnes pratiques pour un site fiable et rassurant.",
    
  },
  {
    name: 'Sauvegardes régulières',
    description: "Vos données sont sauvegardées et restaurables à tout moment pour une tranquillité totale.",
    
  },
];

function About() {
  return (
    <div className="overflow-hidden bg-[#0a2342] py-20 sm:py-32 text-white font-sans">
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
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={800}
            height={480}
            className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-white/10 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

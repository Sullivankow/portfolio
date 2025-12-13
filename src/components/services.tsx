

import useRevealOnScroll from '../hooks/useRevealOnScroll';

const services = [
  {
    name: 'Site vitrine professionnel',
    id: 'service-vitrine',
    price: 'À partir de 890€',
    description: "Idéal pour présenter votre activité, vos valeurs et vos services sur le web avec un design moderne, responsive et optimisé.",
    features: [
      'Jusqu’à 5 pages incluses',
      'Design sur-mesure et adapté à votre image',
      'Site 100% responsive (mobile, tablette, desktop)',
      'Optimisation SEO de base',
      'Sécurité et sauvegardes incluses',
      'Hébergement et nom de domaine conseillés',
      'Formation à la prise en main',
      'Support humain et réactif',
    ],
    featured: false,
  },
  {
    name: 'Site Premium & visibilité',
    id: 'service-pro',
    price: 'À partir de 1590€',
    description: "La solution la plus populaire pour les entrepreneurs et PME : site professionnel, référencement optimisé, accompagnement complet et évolutif.",
    features: [
      'Jusqu’à 12 pages incluses (accueil, services, contact, blog, etc.)',
      'Design premium et personnalisé',
      'Site 100% responsive',
      'Optimisation SEO avancée',
      'Pages supplémentaires sur demande',
      'Intégration Google Analytics',
      'Formulaire de contact avancé',
      'Maintenance et mises à jour incluses',
      'Conseils pour booster votre visibilité',
      'Support prioritaire',
    ],
    featured: true, // Cette offre sera mise en avant
  },
  {
    name: 'Site sur-mesure & évolutif',
    id: 'service-surmesure',
    price: 'Sur devis',
    description: "Pour un projet unique : fonctionnalités avancées, espace client, blog, catalogue, intégrations spécifiques... Tout est possible !",
    features: [
      'Nombre de pages illimité selon vos besoins',
      'Analyse approfondie de vos besoins',
      'Développement de fonctionnalités personnalisées',
      'Connexion à des outils tiers (CRM, newsletter, paiement...)',
      'Accompagnement technique et stratégique',
      'Maintenance évolutive',
      'Conseils pour faire grandir votre projet',
    ],
    featured: false,
  },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Services() {
  const [ref, visible] = useRevealOnScroll<HTMLElement>();
  return (
    <section
      id="services"
      ref={ref}
      className={`relative isolate bg-[#0a2342] px-6 py-24 sm:py-32 lg:px-8 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Services</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Des solutions adaptées à chaque projet
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
        Que vous souhaitiez une présence simple et efficace ou un site entièrement personnalisé, je vous accompagne de A à Z avec la même exigence de qualité et d’écoute.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-1 gap-x-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={classNames(
                service.featured ? 'relative bg-gradient-to-b from-[#3B006E] to-[#0a2342] border-2 border-blue-400 shadow-2xl scale-105 z-10' : 'bg-white/5 border border-white/10',
                'rounded-3xl p-8 sm:p-10 flex flex-col h-full justify-between transition duration-300 hover:scale-[1.03] hover:shadow-2xl',
              )}
              style={service.featured ? { minWidth: '340px', maxWidth: '420px' } : { minWidth: '300px', maxWidth: '380px' }}
            >
            <h3
              id={service.id}
              className={classNames(service.featured ? 'text-blue-400' : 'text-blue-300', 'text-xl font-semibold')}
            >
              {service.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={classNames('text-white', 'text-3xl font-bold')}>{service.price}</span>
            </p>
            <p className={classNames(service.featured ? 'text-gray-200' : 'text-gray-300', 'mt-6 text-base')}>{service.description}</p>
            <ul className="mt-8 space-y-3 text-sm text-gray-200 text-left">
              {service.features.map((feature, i) => (
                <li key={feature} className="flex gap-x-3 items-start">
                  {i % 3 === 0 && (
                    <svg className={classNames(service.featured ? 'text-blue-400' : 'text-blue-300', 'h-6 w-6 flex-none mt-1')} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {i % 3 === 1 && (
                    <svg className={classNames(service.featured ? 'text-blue-400' : 'text-blue-300', 'h-6 w-6 flex-none mt-1')} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {i % 3 === 2 && (
                    <svg className={classNames(service.featured ? 'text-blue-400' : 'text-blue-300', 'h-6 w-6 flex-none mt-1')} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              aria-describedby={service.id}
              className={classNames(
                service.featured
                  ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500'
                  : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white/75',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 transition-colors duration-200',
              )}
            >
              Demander un devis
            </a>
          </div>
          ))}
          </div>
        </div>



        {/* Section Packs */}
        <section className="mx-auto mt-20 max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-blue-400 mb-8">Options Sérénité & Hébergement</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch bg-white/10 rounded-3xl p-6 md:p-10">
            {/* Pack Maintenance */}
            <div className="flex-1 text-center flex flex-col h-full bg-white/5 border border-blue-400 rounded-2xl p-8 shadow-lg min-h-[500px]">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Pack Maintenance & Sérénité</h3>
              <p className="text-base text-gray-200 mb-4">Gardez l’esprit tranquille après la mise en ligne : je m’occupe de tout !</p>
              <div className="text-2xl font-bold text-white mb-2">49 €/mois <span className="text-base font-normal text-gray-300">(sans engagement)</span></div>
              <ul className="text-left text-gray-200 space-y-2 text-sm mb-4 mx-auto max-w-xs">
                <li>• Mises à jour régulières du site et des plugins</li>
                <li>• Sauvegardes automatiques et restauration rapide</li>
                <li>• Surveillance de la sécurité et corrections préventives</li>
                <li>• Support technique prioritaire (email & téléphone)</li>
                <li>• Petites évolutions incluses (textes, images, horaires...)</li>
                <li>• Rapport mensuel d’intervention</li>
              </ul>
              <div className="text-xs text-gray-400 mb-2">3 mois offerts avec toute création de site SunDev</div>
              <a href="#contact" className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-400 transition-colors duration-200">Souscrire au pack maintenance</a>
            </div>
            {/* Pack Hébergement */}
            <div className="flex-1 text-center flex flex-col h-full bg-white/5 border border-blue-400 rounded-2xl p-8 shadow-lg min-h-[500px]">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Pack Hébergement & Nom de domaine</h3>
              <p className="text-base text-gray-200 mb-4">Hébergement professionnel, sécurisé et accompagné : je gère tout pour vous, de la technique au support.</p>
              <div className="text-2xl font-bold text-white mb-2">14 €/mois <span className="text-base font-normal text-gray-300">ou 149 €/an</span></div>
              <ul className="text-left text-gray-200 space-y-2 text-sm mb-4 mx-auto max-w-xs">
                <li>• Hébergement sécurisé et performant (France/EU)</li>
                <li>• Nom de domaine inclus (.fr ou .com)</li>
                <li>• Certificat SSL (https) offert</li>
                <li>• Comptes emails professionnels (sur demande)</li>
                <li>• Gestion technique complète (renouvellement, configuration, migrations...)</li>
                <li>• Support réactif et accompagnement humain</li>
                <li>• Conseils personnalisés pour la gestion de votre présence en ligne</li>
              </ul>
              <div className="text-xs text-gray-400 mb-2">Offre réservée aux clients SunDev</div>
              <a href="#contact" className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-400 transition-colors duration-200">Souscrire au pack hébergement</a>
            </div>
          </div>
        </section>

      </section>
    );
  }
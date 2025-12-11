// Section FAQ SunDev : questions fréquentes sur l’hébergement, le développement, la maintenance, etc.
// Charte graphique : bleu marine, blanc, volet accordéon, responsive
import { useState } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

// Liste des questions/réponses
const faqs = [
	{
		question: "Comment se passe l’hébergement de mon site ?",
		answer:
			"Je propose un pack hébergement clé en main : serveur sécurisé, nom de domaine, certificat SSL, gestion technique et support inclus. Vous n’avez rien à gérer !",
	},
	{
		question: "Combien de temps pour créer mon site ?",
		answer:
			"Un site vitrine est généralement livré en 2 à 3 semaines. Un site sur-mesure ou e-commerce peut demander 4 à 6 semaines selon la complexité et les échanges.",
	},
	{
		question: "La maintenance est-elle obligatoire ?",
		answer:
			"Non, mais elle est fortement recommandée pour garantir la sécurité, les mises à jour et un support réactif. Je propose un pack maintenance sans engagement, avec 3 mois offerts à la création.",
	},
	{
		question: "Puis-je modifier mon site moi-même ?",
		answer:
			"Oui ! Je forme chaque client à la prise en main de son site. Vous pouvez modifier textes, images, horaires, etc. Et je reste disponible en cas de besoin.",
	},
	{
		question: "Quels sont les moyens de paiement acceptés ?",
		answer:
			"Virement bancaire, carte bancaire, paiement en plusieurs fois possible selon le projet.",
	},
	{
		question: "Mon site sera-t-il bien référencé ?",
		answer:
			"Tous les sites sont optimisés pour le référencement naturel (SEO) dès la création. Je propose aussi des options avancées pour booster votre visibilité.",
	},
];

// Composant principal FAQ
export default function FAQ() {
  // État pour gérer l’ouverture des volets
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Hook d’animation au scroll
  const [ref, visible] = useRevealOnScroll<HTMLElement>();

  // Fonction pour ouvrir/fermer un volet
  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`relative isolate bg-[#132a4d] px-6 py-24 sm:py-32 lg:px-8 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Colonne gauche : FAQ */}
        <div>
          <div className="max-w-3xl text-left">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Questions fréquentes
            </p>
          </div>
          <div className="mt-16 max-w-2xl divide-y divide-white/10">
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="py-4">
                <button
                  className={`w-full flex justify-between items-center text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-blue-400/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${openIndex === idx ? 'border border-blue-400' : ''}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-lg font-semibold text-blue-300">{faq.question}</span>
                  <span className={`ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {/* Volet réponse */}
                {openIndex === idx && (
                  <div
                    id={`faq-panel-${idx}`}
                    className="mt-3 px-4 py-2 text-base text-gray-200 bg-white/5 rounded-xl"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Colonne droite : animation décorative */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* Exemple d’animation décorative : cercle animé */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-[#3B006E] to-[#0a2342] animate-pulse opacity-40"></div>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" stroke="#3B006E" strokeWidth="8" fill="none" />
              <circle cx="60" cy="60" r="35" stroke="#0a2342" strokeWidth="4" fill="none" />
              <circle cx="60" cy="60" r="20" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-blue-300 font-semibold text-lg">SunDev</span>
          </div>
        </div>
      </div>
    </section>




  )
}
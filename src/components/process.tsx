
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const steps = [
  {
    title: "Première rencontre",
    desc: "D’abord, nous prenons le temps d’échanger autour de votre projet, vos envies et vos objectifs. Que ce soit autour d’un café, en visio ou par téléphone, ce moment est dédié à l’écoute et à la compréhension de votre univers. Je vous pose toutes les questions nécessaires pour cerner vos besoins et vous rassurer sur la démarche.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#38bdf8" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Proposition personnalisée",
    desc: "Je vous envoie une proposition claire et détaillée, accompagnée d’un devis transparent. Vous avez toutes les cartes en main pour décider sereinement. Je reste disponible pour répondre à vos questions et ajuster la proposition selon vos attentes, sans pression ni surprise.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#06b6d4" /><path d="M8 10h8M8 14h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Création sur-mesure",
    desc: "Une fois le projet validé, je conçois et développe votre site avec soin : design moderne, fonctionnalités adaptées, sécurité et performance. Vous suivez l’avancement étape par étape, avec des points réguliers pour valider chaque partie et ajuster selon vos retours. L’objectif : un site qui vous ressemble et qui rassure vos clients.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="4" fill="#fbbf24" /><path d="M8 10h8M8 14h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Mise en ligne & accompagnement",
    desc: "Je m’occupe du déploiement et de la mise en ligne, puis je reste à vos côtés pour le suivi, la maintenance et les évolutions futures. Vous bénéficiez d’un support réactif et bienveillant, pour que votre site reste toujours à la hauteur de vos ambitions.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1" /><path d="M12 7v5l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
];

function Process() {
  const [ref, visible] = useRevealOnScroll<HTMLElement>();
  return (
    <section
      ref={ref}
      className={`w-full py-16 bg-[#090025] text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">Votre projet, étape par étape</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#2A0150] to-[#090025] border border-blue-900 rounded-xl p-10 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition duration-300 max-w-2xl w-full mx-auto">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-base text-gray-200">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
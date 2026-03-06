
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const steps = [
  {
    title: "Analyse & conception",
    desc: "Compréhension des besoins, rédaction de cahier des charges, maquettage (Figma, UML), choix des stacks adaptés : React, React Native, Vite, Tailwind, Bootstrap, PHP, Symfony, NestJS, PostgreSQL, MongoDB, MySQL. Architecture MVC, sécurité, bonnes pratiques UI/UX et SEO.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#38bdf8" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Développement front-end & back-end",
    desc: "Interfaces web et mobile (React, React Native, Vite, Tailwind, Bootstrap, Chakra UI, Daisy UI), formulaires sécurisés, gestion CRUD, API RESTful (Node.js, Express, Symfony, PHP), authentification, gestion des rôles, sécurité, tests unitaires (PhpUnit). Conception et structuration de bases de données (PostgreSQL, MongoDB, MySQL).",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#06b6d4" /><path d="M8 10h8M8 14h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Workflow & méthodologie",
    desc: "Gestion de projet agile (Scrum, Kanban, Trello), Gitflow, code review, DevOps, CI/CD (Github Actions, Docker), documentation technique, veille technologique. Organisation, autonomie, esprit d’équipe, adaptation et communication efficace.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="4" fill="#fbbf24" /><path d="M8 10h8M8 14h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: "Déploiement, maintenance & évolution",
    desc: "Déploiement continu (Github Actions, Docker), monitoring, maintenance, évolutions et support. Optimisation SEO, sécurité, amélioration continue, adaptation aux besoins, veille technologique constante.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1" /><path d="M12 7v5l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
];

function Process() {
  const [ref, visible] = useRevealOnScroll<HTMLElement>();
  return (
    <section id="skills"
      ref={ref}
      className={`w-full py-16 bg-[#090025] text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">Mes Compétences</h2>
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
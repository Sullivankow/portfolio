// Formulaire de contact SunDev, charte graphique, responsive, animation au scroll
import useRevealOnScroll from '../hooks/useRevealOnScroll';


export default function Contact() {
  // Animation au scroll
  const [ref, visible] = useRevealOnScroll<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative isolate bg-gradient-to-b from-[#0a2342] to-[#3B006E] px-6 py-24 sm:py-32 lg:px-8 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Bloc gauche : logo, texte, infos */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold mb-4 flex flex-col items-start">
            <img src="/logos/logo_w.svg" alt="Logo SunDev" width="120" height="48" loading="lazy" className="h-16 w-auto mb-6" />
            Contactez-moi
          </h2>
          <p className="text-gray-300 mb-8">Vous avez un projet, une question ou envie d’échanger ? Remplissez le formulaire ou contactez-moi directement, je vous réponds rapidement.</p>
          <div className="space-y-6 text-base">
            <div className="flex items-start gap-3">
              <span className="text-blue-400"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2"/></svg></span>
              <span>545 Mavis Island<br/>Chicago, IL 99191</span> {/* À personnaliser */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.6 6.6l1.27-1.27a2 2 0 012.11-.45c1.08.35 2.19.59 3.32.72A2 2 0 0121 16.91z"/></svg></span>
              <span>06 12 34 56 78</span> {/* À personnaliser */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg></span>
              <span>contact@sundev.fr</span> {/* À personnaliser */}
            </div>
          </div>
        </div>
        {/* Bloc droit : formulaire */}
        <form className="flex flex-col gap-6 justify-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold mb-2">Prénom</label>
              <input type="text" id="firstName" name="firstName" className="w-full rounded-md bg-[#101828] text-white px-4 py-3 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Nom</label>
              <input type="text" id="lastName" name="lastName" className="w-full rounded-md bg-[#101828] text-white px-4 py-3 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full rounded-md bg-[#101828] text-white px-4 py-3 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Téléphone</label>
            <input type="tel" id="phone" name="phone" className="w-full rounded-md bg-[#101828] text-white px-4 py-3 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full rounded-md bg-[#101828] text-white px-4 py-3 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none resize-none" />
          </div>
          <button type="submit" className="self-end bg-blue-500 text-white rounded-md px-6 py-3 font-semibold hover:bg-blue-400 transition-colors duration-200">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}



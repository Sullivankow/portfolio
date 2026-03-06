



const navLinks = [
	{ name: "Accueil", href: "#home" },
	{ name: "À propos", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Réalisations", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

const socialLinks = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/sullivan-kowalski-5b85373ab/",
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 16V10.5H7V19h2.5zm-1.25-9.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM19 19v-4.25c0-2.5-3-2.31-3 0V19H18v-4.25c0-2.5-3-2.31-3 0V19H19z"/></svg>
		),
	},
		{
			name: "Github",
			href: "https://github.com/Sullivankow",
			icon: (
				<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.5c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.16.58.67.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>
			),
		},
];

const Footer = () => {
	return (
		<footer className="bg-gradient-to-b from-[#0a2342] to-[#3B006E] text-white pt-12 pb-6 px-6 mt-16">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				{/* Logo et nom */}
				<div className="flex flex-col items-center md:items-start gap-2">
					<img src="/logos/logo_w.svg" alt="Logo SunDev" width="90" height="36" loading="lazy" className="h-12 w-auto mb-2" />
				</div>
				{/* Liens de navigation */}
				<nav className="flex flex-wrap gap-6 justify-center md:justify-start">
					{navLinks.map(link => (
						<a key={link.name} href={link.href} className="text-white hover:text-blue-400 font-medium transition-colors duration-200">
							{link.name}
						</a>
					))}
				</nav>
				{/* Réseaux sociaux */}
				<div className="flex gap-6 items-center">
					{socialLinks.map(social => (
						<a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="hover:scale-110 transition-transform duration-200">
							{social.icon}
						</a>
					))}
				</div>
			</div>
			<div className="mt-8 text-center text-xs text-gray-400 flex flex-col md:flex-row items-center justify-center gap-2">
				<span>© {new Date().getFullYear()} Tous droits réservés.</span>
				<a href="#mentions-legales" className="text-blue-400 hover:underline">Mentions légales</a>
			</div>
		</footer>
	);
};

export default Footer;



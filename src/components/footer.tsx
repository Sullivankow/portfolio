

import React from "react";
import logoW from "../assets/logos/logo_w.svg";

const navLinks = [
	{ name: "Accueil", href: "#home" },
	{ name: "À propos", href: "#about" },
	{ name: "Réalisations", href: "#projects" },
	{ name: "Services", href: "#services" },
	{ name: "FAQ", href: "#faq" },
	{ name: "Contact", href: "#contact" },
];

const socialLinks = [
	{
		name: "Facebook",
		href: "https://facebook.com",
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/></svg>
		),
	},
	{
		name: "Instagram",
		href: "https://instagram.com",
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.5a1 1 0 100 2 1 1 0 000-2z"/></svg>
		),
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com",
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 16V10.5H7V19h2.5zm-1.25-9.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM19 19v-4.25c0-2.5-3-2.31-3 0V19H18v-4.25c0-2.5-3-2.31-3 0V19H19z"/></svg>
		),
	},
];

const Footer = () => {
	return (
		<footer className="bg-gradient-to-b from-[#0a2342] to-[#3B006E] text-white pt-12 pb-6 px-6 mt-16">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				{/* Logo et nom */}
				<div className="flex flex-col items-center md:items-start gap-2">
					<img src={logoW} alt="Logo SunDev" className="h-12 w-auto mb-2" />
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



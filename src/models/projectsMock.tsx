// Modèle de données pour un projet du portfolio
export interface Project {
	name: string;
	description: string;
	stack: string[];
	link: string;
	image: string;
	github?: string;
}

// Tableau des projets à présenter dans le portfolio
export const projects: Project[] = [
	{
		name: 'Koosy',
		description: "Interface intuitive, authentification, gestion des rôles, sécurité, gestion CRUD via API RESTful, conception de bases de données.",
		stack: ['React Native', 'Expo', 'NestJS', 'MVC', 'API RESTful', 'PostgreSQL', 'Sécurité', 'Authentification', 'Front', 'Back'],
		link: '#',
		image: '/images/koosy.png',
		github: 'https://github.com/Sullivankow/autoZen.git',
	},
	{
		name: 'Site Vitrine AutoZen',
		description: "Développement fullstack d’un site vitrine, SEO et performance optimisés.",
		stack: ['React', 'Tailwind', 'Node.js', 'Vite', 'SEO', 'Github Actions'],
		link: 'https://sullivankow.github.io/autoZen/',
		image: '/images/autozen.png',
		github: 'https://github.com/Sullivankow/koosyapp.git',
	},
	{
		name: 'Les Clés de l’Atlantique 17',
		description: "Interface responsive, formulaire de contact, bonnes pratiques UI, gestion Kanban, référencement naturel, déploiement continu et maintenance.",
		stack: ['PHP Vanilla', 'Bootstrap', 'Kanban', 'DevOps', 'Github Actions', 'UI', 'SEO'],
		link: 'https://www.lesclesdelatlantique17.fr/',
		image: '/images/lcdl.PNG',
		github: 'https://github.com/Sullivankow/atlantique.git',
	},
	{
		name: 'Grassy Photographie',
		description: "Site vitrine responsive, formulaire de contact sécurisé, référencement SEO, déploiement continu, gestion de projet, Gitflow, Trello, Kanban.",
		stack: ['React', 'Vite', 'Tailwind', 'PHP', 'SEO', 'Github Actions', 'Gitflow', 'Trello', 'Kanban', 'UI', 'Sécurité'],
		link: 'https://www.grassyphotographie.fr/',
		image: '/images/grassy.png',
		github: 'https://github.com/Sullivankow/joey_photo.git',
	},
	{
			name: 'Øverst - Site Vitrine',
			description: "Site vitrine pour l'artiste Øverst, design moderne, responsive, galerie et présentation des œuvres.",
			stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
			link: 'https://sullivankow.github.io/overst_music/',
			image: '/images/overst.png',
			github: 'https://github.com/Sullivankow/overst_music.git',
	},
		 {
				name: 'E-commerce Complet',
				description: "Site e-commerce complet : front moderne avec React, Vite et TypeScript, back-end PHP Symfony, API RESTful, gestion catalogue, panier, paiement et espace admin.",
				stack: ['React', 'Vite', 'TypeScript', 'PHP', 'Symfony', 'API RESTful'],
				link: '#',
				image: '/images/ecom.png',
				github: 'https://github.com/Sullivankow/ecom_template_react_php.git',
	},
				{
				name: 'Digital Opus - Site Vitrine',
				description: "Site vitrine pour Digital Opus, interface responsive, design moderne, formulaire de contact et bonnes pratiques UI.",
				stack: ['PHP Vanilla', 'Bootstrap', 'CSS'],
				link: '#',
				image: '/images/opus.png',
				github: 'https://github.com/Sullivankow/digitalOpus.git',
			},
	{
		name: 'Zoo Arcadia',
		description: "API RESTful sécurisée, authentification, gestion des rôles utilisateurs, bases de données SQL et NoSQL, conteneurisation Docker, CI/CD, gestion de projet.",
		stack: ['Symfony', 'API RESTful', 'SQL', 'NoSQL', 'Docker', 'CI/CD', 'Kanban', 'Gitflow', 'Sécurité', 'Authentification'],
		link: '#',
		image: '/images/arcadia.PNG',
		github: 'https://github.com/Sullivankow/ArcadiaBack.git',
	},
		{
			name: 'CvUp',
			description: "Générateur de CV en ligne, interface moderne et responsive, création et export de CV personnalisés.",
			stack: ['React', 'TypeScript', 'DaisyUI', 'HTML', 'CSS'],
			link: '#',
			image: '/images/cvup.PNG',
			github: 'https://github.com/Sullivankow/cvup.git',
	},
		 {
			name: 'Laety Nails',
			description: "Site vitrine pour salon de manucure, interface moderne, responsive et gestion de prise de rendez-vous.",
			stack: ['React', 'Vite', 'Tailwind', 'TypeScript'],
			link: '#',
			image: '/images/laety.jpg',
			github: 'https://github.com/Sullivankow/laeti_nails_backend.git',
	},
			 {
				name: 'Restaurant Quai Antique',
				description: "Site complet pour le restaurant Quai Antique : interface vitrine, gestion des menus, réservations, back-end PHP Symfony, API RESTful CRUD.",
				stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'API RESTful', 'CRUD'],
				link: '#',
				image: '/images/qa.png',
				github: 'https://github.com/Sullivankow/QuaiAntiqueRestaurantBack.git',
			},
];

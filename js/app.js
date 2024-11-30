// Page compétences
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
        alert(`Tu as cliqué sur ${skill.getAttribute('data-skill')}!`);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Définir les routes
    const routes = {
        home: 'pages/home.html',
        about: 'pages/about.html',
        competences: 'pages/competences.html',
        projects: 'pages/projects.html',
    };

    // Fonction pour initialiser le texte défilant
    const initializeTypedText = () => {
        const textDefile = document.getElementById('textDefile');
        if (textDefile) {
            new Typed('#textDefile', {
                strings: ['Développeur Full Stack'],
                typeSpeed: 50,
                backSpeed: 50,
                startDelay: 100,
                loop: true,
            });
        }
    };

    // Charger une page en fonction de la route
    const loadPage = async (route) => {
        const page = routes[route] || routes['home']; // Page par défaut : home
        try {
            const response = await fetch(page);
            if (response.ok) {
                const html = await response.text();
                app.innerHTML = html;

                // Réinitialiser les animations après le chargement de la page
                initializeTypedText();
            } else {
                app.innerHTML = '<h1>Erreur 404 : Page non trouvée</h1>';
            }
        } catch (error) {
            app.innerHTML = '<h1>Erreur de chargement</h1>';
        }
    };

    // Gestion des clics sur les liens de navigation
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            const hash = event.target.getAttribute('href').substring(1); // Récupérer la route
            window.location.hash = hash; // Mettre à jour l'URL
            loadPage(hash); // Charger la page correspondante
        });
    });

    // Charger la page correspondant au hash au démarrage
    const initialRoute = window.location.hash.substring(1) || 'home';
    loadPage(initialRoute);

    // Gérer les changements dans l'URL
    window.addEventListener('hashchange', () => {
        const route = window.location.hash.substring(1);
        loadPage(route);
    });
});







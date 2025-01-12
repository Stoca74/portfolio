document.addEventListener("DOMContentLoaded", function () {
    const projets = document.querySelectorAll('.projet');
    const barreCentrale = document.querySelector('.barre-centrale');

    window.addEventListener('scroll', function () {
        projets.forEach(projet => {
            const projetTop = projet.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (projetTop < windowHeight) {
                projet.classList.add('visible');
            }
        });

        // Vérifiez si la section des réalisations est visible
        const realisations = document.getElementById('realisations');
        const realisationsTop = realisations.getBoundingClientRect().top;

        if (realisationsTop < windowHeight) {
            barreCentrale.classList.add('barre-visible');
        } else {
            barreCentrale.classList.remove('barre-visible');
        }
    });

    const lueurCurseur = document.getElementById('lueur-curseur');

    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        lueurCurseur.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    });

    // Ajout d'un effet de survol sur les projets
    projets.forEach(projet => {
        projet.addEventListener('mouseover', function () {
            projet.style.transform = 'scale(1.05)';
            projet.style.transition = 'transform 0.3s ease';
        });

        projet.addEventListener('mouseleave', function () {
            projet.style.transform = 'scale(1)';
        });
    });

    // Création d'un effet de parallaxe pour l'arrière-plan de la section d'accueil
    const accueil = document.getElementById('accueil');
    window.addEventListener('scroll', function () {
        const scrollValue = window.scrollY;
        accueil.style.backgroundPositionY = -scrollValue * 0.3 + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projets = document.querySelectorAll('.projet');

    // Ajout de la classe "visible" avec un léger délai pour chaque projet
    projets.forEach((projet, index) => {
        setTimeout(() => {
            projet.classList.add('visible');
        }, index * 150);
    });
});


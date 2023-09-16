// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let scrollLvl = 0;
window.addEventListener('scroll', () => {
    //console.log('test');

    if (window.scrollY > scrollLvl) {
        navbar.style.height = "45px";
    } else {
        navbar.style.height = "90px";
    }
    scrollLvl = window.scrollY;
});
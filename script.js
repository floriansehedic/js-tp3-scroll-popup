// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let scrollLvl = 0;
let playOnce = true;
window.addEventListener('scroll', () => {

    // Navbar effect
    if (window.scrollY > scrollLvl) {
        navbar.style.height = "45px";
    } else {
        navbar.style.height = "90px";
    };
    scrollLvl = window.scrollY;

    //img
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
    if (scrollValue > 0.45) {
        //console.log('test');
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    };

    //popup
    if (scrollValue > 0.80 && playOnce) {
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }
});

closeBtn.addEventListener('click', () => {
    //console.log('test');
    popup.style.opacity = 1;
    popup.style.transform = "translateX(600px)";
});


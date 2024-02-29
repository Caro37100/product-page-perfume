// Pour détecter la zone d'affichage de défilement pour que l'animation s'affiche au bon moment
const ratio = 0.2 // ratio d'affichage en secondes
const options = { // fonction pour déterminer la ratio
    root: null,
    rootMargin: "0px",
    threshold: ratio
}

// fonction pour trouver le point d'intersection de chaque élément si supérieur au ratio, on rajoute la classe reveal pour faire apparaître l'animation du contenu
const handleIntersect = function (entries, observer) { 
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        };
    })
}

// fonction pour faire l'animation sur tous les contenus de [class*=".reveal-"] à animer puisqu'on a des délais différents mais on aurait pu faire juste une classe .reveal si on avait le même délai d'affichage partout
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(reveal) {
    observer.observe(reveal)
})
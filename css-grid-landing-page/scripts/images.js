// Attendre le chargement de la page pour l'affichage
document.addEventListener("DOMContentLoaded", function() {
// Animation zoom image au passage de la souris
    
    let h3 = document.querySelectorAll("h3");

    h3.forEach(function(h3) {
        h3.addEventListener("mouseover", function() {
            h3.style.transition = "transform 0.5s ease-out"; // Ajoute une transition pour fluidifier l'animation du zoom
            h3.style.transform = "scale(1.12)"; // Change la taille de l'image au survol (1.2 fois la taille originale)
        });
    
        h3.addEventListener("mouseout", function() {
            h3.style.transform = "scale(1)"; // Rétablit la taille de l'image à la taille originale lorsque la souris quitte l'image
        });
    });

// Animation bounce icône au passage de la souris
    let icon = document.querySelectorAll(".icon svg");

    function iconBounce() {
        this.classList.add("bounce");
    }

    function iconNormal() {
        this.classList.remove("bounce");
    }
    
    icon.forEach(function(icon) {
        icon.addEventListener("mouseover", function() {
            iconBounce.call(this); // Appel de la fonction iconBounce avec le contexte de l'élément svg icon actuel
        });
    
        icon.addEventListener("mouseout", function() {
            iconNormal.call(this); // Appel de la fonction iconNormal avec le contexte de l'élément svg icon actuel
        });
    });
});
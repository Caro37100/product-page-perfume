
document.addEventListener("DOMContentLoaded", function() {
    let img = document.querySelector("img");
    
    img.addEventListener("mouseover", function() {
        img.style.transform = "scale(1.1)"; // Change la taille de l'image au survol (1.2 fois la taille originale)
    });

    img.addEventListener("mouseout", function() {
        img.style.transform = "scale(1)"; // Rétablit la taille de l'image à la taille originale lorsque la souris quitte l'image
    });
});
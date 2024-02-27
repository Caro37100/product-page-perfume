document.addEventListener("DOMContentLoaded", function () {
    initAddEventListenerPopup();
});
/**
 * Cette fonction affiche la popup pour valider la mise au panier du produit. 
 */
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

/**
 * Cette fonction cache la popup. 
 */
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "Add to cart"
    let btnPanier = document.querySelector(".btnPanier")
    let popupBackground = document.querySelector(".popupBackground")
    btnPanier.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton panier, on affiche la popup
        afficherPopup()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
}

let btnContinuerAchat = document.querySelector(".btnContinuerAchat")
btnContinuerAchat.addEventListener("click", (event) => {
// Si on a cliqué précisément sur le bouton 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === btnContinuerAchat) {
            // Alors on cache la popup
            cacherPopup()
        } 
})
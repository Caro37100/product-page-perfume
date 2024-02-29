//AJOUT MEMBRE OU MODIFICATION AVEC AFFICHAGE POPUP
document.addEventListener("DOMContentLoaded", function () {
    //AFFICHAGE POPUP / MASQUAGE POPUP
    function afficherPopup() {
        let popup = document.querySelector(".popup-modification");
        // La popup est masquée par défaut (display:none), ajouter la classe "active"
        // va changer son display et la rendre visible. 
        popup.classList.add("active");
    };

    /*function cacherPopup() {
        let popup = document.querySelector(".popup-modification")
        // La popup est masquée par défaut (display:none), supprimer la classe "active"
        // va rétablir cet affichage par défaut. 
        popup.classList.remove("active")
    }*/

    //GESTION DES CLICS
    let btnModifications = document.querySelectorAll(".modification");  
    btnModifications.forEach(function(btnModification) {    
        btnModification.addEventListener("click", () => {
            // TODO: à compléter pour faire coïncider le membre sur lequel on a cliqué puis la modification avec le form dans le popup
            // quand on clique sur le bouton de modification, on affiche la popup pour le changement
            afficherPopup();       
        });
    });

    let btnAjout = document.querySelector(".ajout-membre");
    btnAjout.addEventListener("click", () => {
        // TODO: à compléter création du innerhtml avec le form
        // quand on clique sur le bouton ajouter membre, on affiche la popup pour le changement
        afficherPopup();       
    });

    /* function modificationMembre (card) {
        let validationModification = document.getElementById("btnModifier");
        validationModification.addEventListener ("click", function() {
            // TODO: ajouter ce que fait la fonction au clic du bouton valider avec le form
        });
    };

    function ajoutMembre (card) {
        let validationModification = document.getElementById("btnModifier");
        validationModification.addEventListener ("click", function() {
            // TODO: ajouter ce que fait la fonction au clic du bouton valider avec le form
        });
    };*/

//SUPPRESSION MEMBRE (ciblé sur le membre du bouton cliqué)
    let btnSuppression = document.querySelectorAll(".suppression");

    btnSuppression.forEach(function(btnSuppression) {
        btnSuppression.addEventListener("click", (event) => {     // event pour cibler précisément le membre ou on clique sur le bouton
            let confirmationSuppression = confirm("Êtes-vous sûr de vouloir supprimer ce membre ? Cette action est définitive !");
            if(confirmationSuppression) {
              let membre = event.target.closest(".card");
              membre.remove();    // On supprime le bloc card de l'élément le plus proche où on a cliqué sur le bouton suppression
            };
        });
    });
});
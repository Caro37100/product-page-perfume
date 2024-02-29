//AJOUT MEMBRE OU MODIFICATION AVEC AFFICHAGE POPUP
document.addEventListener("DOMContentLoaded", function () {
    //AFFICHAGE POPUP / MASQUAGE POPUP
    function afficherPopup() {
        let popup = document.querySelector(".popup-modification");
        // La popup est masquée par défaut (display:none), ajouter la classe "active"
        // va changer son display et la rendre visible. 
        popup.classList.add("active");
    };

    function cacherPopup() {
        let popup = document.querySelector(".popup-modification")
        // La popup est masquée par défaut (display:none), supprimer la classe "active"
        // va rétablir cet affichage par défaut. 
        popup.classList.remove("active")
    }

    //GESTION DES CLICS (délégation évènements modification / suppression / ajout pour tout le document pour que ça fonctionne aussi avec les nouveaux membres créés)
    document.addEventListener("click", (event) => {
        // Vérifier si le clic est sur un bouton de modification = on y modifie la carte associée
        if (event.target.classList.contains("modification")) {
            afficherPopup();
        }

        // Vérifier si le clic est sur un bouton de suppression = on supprime la carte associée
        // TODO later: personnaliser la popup de suppression ?
        if (event.target.classList.contains("suppression")) {
            let confirmationSuppression = confirm("Êtes-vous sûr de vouloir supprimer ce membre ? Cette action est définitive !");
            if (confirmationSuppression) {
                let membre = event.target.closest(".card");
                membre.remove();
            }
        }

        // Vérifier si le clic est sur le bouton d'ajout de membre = on affiche la popup pour ajouter le membre
        if (event.target.classList.contains("ajout-membre")) {
            afficherPopup();
        }
    });

    // GESTION BOUTON VALIDATION FORMULAIRE
    let validationModification = document.getElementById("btnModifier");
    validationModification.addEventListener ("click", function(event) {
        // Bloquer la gestion du clic par défaut du formulaire
        event.preventDefault()
        // Appeler la fonction pour gérer l'ajout d'un membre
        ajoutMembre(); 
    });

    // TODO: ajouter ce que fait la fonction au clic du bouton valider pour la modification d'un membre
    /* function modificationMembre (card) {
            // TODO: ajouter ce que fait la fonction au clic du bouton valider avec le form
        });
    };*/

    // AJOUT MEMBRE A L'OUVERTURE DE LA POPUP FORMULAIRE
    function ajoutMembre () {
        // Récupérer les valeurs des champs du formulaire
        let nom = document.getElementById("nom").value;
        let poste = document.getElementById("poste").value;
        let paragraphe = document.getElementById("paragraphe").value;

        // TODO: modifier la gestion de l'image qu'on peut charger via un fichier

        // Créer un nouvel élément de carte (membre)
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = `
            <div class="container">
            <img src="images/team-placeholder.jpg">
            <button class="modification">&#x1F589;</button>
            <button class="suppression">&#x1F5D1;</button>
            <h2>${nom}</h2>           
            <h3>${poste}</h3>
            <p>${paragraphe}</p>
            </div>
            `;

        // Ajouter la nouvelle carte à la section "team"
        let teamSection = document.querySelector(".team");
        teamSection.appendChild(newCard);

        // Cacher la popup après l'ajout du membre
        cacherPopup();
    };
});
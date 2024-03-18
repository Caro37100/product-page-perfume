//AJOUT MEMBRE OU MODIFICATION AVEC AFFICHAGE POPUP
document.addEventListener("DOMContentLoaded", function () {
    //AFFICHAGE POPUP MODIFICATION / MASQUAGE POPUP --> distinction modification et ajout pour la gestion de la validation des clics lorsqu'on clique sur soit le bouton modifier soit ajouter !
    function afficherPopupModification() {
        let popup = document.querySelector(".popup-modification");
        // La popup est masquée par défaut (display:none), ajouter la classe "modification-active"
        // va changer son display et la rendre visible. 
        popup.classList.add("modification-active");
    };

    //AFFICHAGE POPUP AJOUT / MASQUAGE POPUP
    function afficherPopupAjout() {
        let popup = document.querySelector(".popup-modification");
        // La popup est masquée par défaut (display:none), ajouter la classe "ajout-active"
        // va changer son display et la rendre visible. 
        popup.classList.add("ajout-active");
    };

    function cacherPopupModification() {
        let popup = document.querySelector(".popup-modification");
        // La popup est masquée par défaut (display:none), supprimer la classe "active"
        // va rétablir cet affichage par défaut. 
        popup.classList.remove("modification-active");
    };

    function cacherPopupAjout() {
        let popup = document.querySelector(".popup-modification");
        // La popup est masquée par défaut (display:none), supprimer la classe "active"
        // va rétablir cet affichage par défaut. 
        popup.classList.remove("ajout-active");
    };

    //GESTION AFFICHAGE POPUP (délégation évènements modification / suppression / ajout pour tout le document pour que ça fonctionne aussi avec les nouveaux membres créés)
    document.addEventListener("click", (event) => {
            // Vérifier si le clic est sur un bouton de modification = on y modifie la carte associée
            if (event.target.classList.contains("modification")) {
                afficherPopupModification(); 
            } else if (event.target.classList.contains("ajout-membre"))
                afficherPopupAjout(); 
        });

    // GESTION BOUTON VALIDATION FORMULAIRE MODIFICATION ET AJOUT
    let validation = document.getElementById("btnModifier");
    validation.addEventListener ("click", function(event) {
        event.preventDefault();
        // Si la classe = "ajout-active", on appelle la fonction "ajoutMembre", sinon "modificationMembre"
        if (document.querySelector(".ajout-active")) { 
            ajoutMembre();
        } else {
            modificationMembre();
        }
    });

    // GESTION BOUTON SUPPRESSION MEMBRE
    document.addEventListener("click", (event) => {
     // Vérifier si le clic est sur un bouton de suppression = on supprime la carte associée
        // TODO later: personnaliser la popup de suppression ?
        if (event.target.classList.contains("suppression")) {
            let confirmationSuppression = confirm("Êtes-vous sûr de vouloir supprimer ce membre ? Cette action est définitive !");
            if (confirmationSuppression) {
                let membre = event.target.closest(".card");
                membre.remove();
            };
        };
    });

    // NETTOYER CHAMPS INPUT APRES AJOUT MEMBRE
    function nettoyerInputForm () {
        document.getElementById("nom").value = "";
        document.getElementById("poste").value = "";
        document.getElementById("paragraphe").value = "";
        document.getElementById("avatar").value = "";
    }

    // GESTION DE L'OUVERTURE DE LA POPUP DE MODIFICATION
    let btnAModifier = document.querySelectorAll(".modification");
    btnAModifier.forEach(function (bouton) {
        bouton.addEventListener("click", function () {
            let carteAModifier = bouton.closest('.card');
            afficherPopupModification(); // Afficher la popup de modification

            // Pré-remplir les champs du formulaire avec les valeurs actuelles de la carte
            document.getElementById("nom").value = carteAModifier.querySelector("h2").textContent;
            document.getElementById("poste").value = carteAModifier.querySelector("h3").textContent;
            document.getElementById("paragraphe").value = carteAModifier.querySelector("p").textContent;
        });
    });

    // FONCTION DE MODIFICATION D'UN MEMBRE
    function modificationMembre() {

    // Récupérer les valeurs des champs du formulaire de modification
        let nom = document.getElementById("nom").value;
        let poste = document.getElementById("poste").value;
        let paragraphe = document.getElementById("paragraphe").value;

        // Récupérer les valeurs de du fichier image intégrer
        // Utilisation API File
        let image = document.getElementById("avatar");
        let fichierImage = image.files[0];
    
        // Au moment de chargement du fichier image
        if (fichierImage) {
            // Création un objet URL pour l'image chargée
            let imageURL = URL.createObjectURL(fichierImage);

            // Récupérer tous les éléments de carte (membre)
            let cartes = document.querySelectorAll('.card');

            // Mettre à jour les valeurs de chaque carte avec les nouvelles valeurs du formulaire
            cartes.forEach(function (carte) {
                carte.querySelector("img").src = imageURL;
                carte.querySelector("h2").textContent = nom;
                carte.querySelector("h3").textContent = poste;
                carte.querySelector("p").textContent = paragraphe;
            });

            // Cacher la popup après la modification des membres
            cacherPopupModification();
            // Nettoyage des champs input après la modification des membres
            nettoyerInputForm();
        } else {
            alert("Veuillez sélectionner une image.");
        };
    };

    // AJOUT MEMBRE A L'OUVERTURE DE LA POPUP FORMULAIRE
    function ajoutMembre () {

        // Récupérer les valeurs des champs du formulaire
        let nom = document.getElementById("nom").value;
        let poste = document.getElementById("poste").value;
        let paragraphe = document.getElementById("paragraphe").value;

        // Récupérer les valeurs de du fichier image intégrer
        // Utilisation API File
        let image = document.getElementById("avatar");
        let fichierImage = image.files[0];      

        // Au moment de chargement du fichier image
        if (fichierImage) {
            // Création un objet URL pour l'image chargée
            let imageURL = URL.createObjectURL(fichierImage);

            // Créer un nouvel élément de carte (membre)
            let newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.innerHTML = `
                <div class="container">
                <img src="${imageURL}">
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
            cacherPopupAjout();
            // Nettoyage des champs input après l'ajout du membre
            nettoyerInputForm();
        } else {
            alert("Veuillez sélectionner une image.");
        };
    };
});
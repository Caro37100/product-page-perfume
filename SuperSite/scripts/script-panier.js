// INCREMENTATION COMPTEUR ARTICLE PAGE MAGASIN + AJOUT PRODUIT SECTION PANIER ET SUPPRESSION
// DOMContentLoaded : Se déclenche quand le document HTML initial est complètement chargé et analysé, sans attendre la fin du chargement des feuilles de styles, images et sous-document.
document.addEventListener("DOMContentLoaded", function() {
    let nbArticles = document.querySelectorAll(".valeur-produit"); // Toutes les valeurs
    let panier = document.querySelector(".recapitulatif-panier"); // Ma section panier dans la page magasin
    let panierContenu = document.querySelector(".empty-basket");   // Mon texte panier vide
  
    // Fonction pour ajouter un produit au panier (simplifiée avec cloneNode - dupliquer fiche produi dans panier)
    function ajouterAuPanier(produit) {             
      let nouveauProduit = produit.cloneNode(true); // Cloner l'élément produit
      nouveauProduit.classList.add("panier"); // Modifier la classe pour le style
      panier.appendChild(nouveauProduit);

      // Supprimer le paragraphe du panier uniquement s'il existe
      let paragraphePanier = nouveauProduit.querySelector("p");
        if (paragraphePanier) {
        nouveauProduit.removeChild(paragraphePanier);
      }

      panierContenu.remove();  //retirer le texte "Votre panier est vide"
  
      // Mettre à jour les produits dans le panier stockés localement
      localStorage.setItem("panier", panier.innerHTML);
  }

  // Au chargement de la page, vérifier s'il y a des produits dans le panier (stockés localement)
    let produitsPanier = localStorage.getItem("panier");
      if (produitsPanier) {
        panier.innerHTML = produitsPanier; // Mettre à jour le contenu du panier avec les produits stockés
        panierContenu.remove(); // Supprimer le message "panier vide" s'il y a des produits dans le panier
    }

    // Ajoute des événements de clic pour chaque bouton "plus" des produits avec la classe "description-produit"
    let btnPlus = document.querySelectorAll(".bouton-plus"); // Tous les boutons plus
  
    btnPlus.forEach(function(btnPlus, index) {
      btnPlus.addEventListener("click", function() {
          nbArticles[index].textContent = parseInt(nbArticles[index].textContent) + 1; // Augmente le nombre de produits
  
          const produit = btnPlus.closest('.description-produit'); // Récupère le produit associé
          ajouterAuPanier(produit); // Ajoute le produit au panier
      });
    });

    // Suppression produit du panier au clic bouton moins
    function supprimerDuPanier(produit) {
      // Sélectionnez le produit correspondant dans le panier
      const produitASupprimer = panier.querySelector(`[alt="${produit.querySelector('h3').textContent}"]`);
  
      // Si le produit existe dans le panier, supprimez-le
      if (produitASupprimer) {
          produitASupprimer.parentElement.remove(); // Supprimez le produit du DOM
          localStorage.setItem("panier", panier.innerHTML); // Mettre à jour le stockage local
      }
    }
  
    // Ajoute des événements de clic pour chaque bouton "moins" des produits avec la classe "description-produit"
    let btnMoins = document.querySelectorAll(".bouton-moins"); // Tous les boutons moins
  
    btnMoins.forEach(function(btnMoins, index) {
      btnMoins.addEventListener("click", function() {
        if (parseInt(nbArticles[index].textContent) > 0) { // Modification uniquement si le nombre est supérieur à 0
            nbArticles[index].textContent = parseInt(nbArticles[index].textContent) - 1; // Diminue le nombre de produits

            // Supprimer le produit du panier
            let produit = btnMoins.closest('.description-produit'); // Récupère le produit associé
            supprimerDuPanier(produit); // Supprime le produit du panier
          }
      });
    });

  // Réinitialisation panier (suppression tous produits)
  function viderPanier() {
    let produitASupprimer = document.querySelectorAll(".panier");

    // Utilisez forEach pour itérer sur chaque produit et le supprimer
    produitASupprimer.forEach(function(produit) {
      produit.remove();
    });
    // Vider l'espace de stockage qui lie les paniers
    localStorage.clear();
    // Remettre le contenu "panier vide"
    panier.appendChild(panierContenu); 
    // Réinitialiser tous les compteurs d'index à zéro
    nbArticles.forEach(function(index) {
      index.textContent = 0;
  });   
}
  
  let boutonSuppression = document.querySelectorAll(".supprimer");

   boutonSuppression.forEach(function(bouton) {
      bouton.addEventListener("click", function() {
        // Pop up de confirmation suppression panier, vider le panier uniquement si confirmation.
        let confirmationSuppression = confirm("Êtes-vous sûr de vouloir supprimer votre panier ? Cette action est définitive !")
        if(confirmationSuppression) {
          viderPanier();    // On appelle la fonction au clic
        }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("check");
    const prixMois = document.querySelectorAll(".prix-mois");
    const prixAnnuel = document.querySelectorAll(".prix-annuel");

    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        // Afficher les prix annuels et masquer les prix mensuels
        prixMois.forEach(element => {
          element.style.display = "none";
        });
        prixAnnuel.forEach(element => {
          element.style.display = "block";
        });
      } else {
        // Afficher les prix mensuels et masquer les prix annuels
        prixMois.forEach(element => {
          element.style.display = "block";
        });
        prixAnnuel.forEach(element => {
          element.style.display = "none";
        });
      }
    });
  });
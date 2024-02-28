//CAROUSEL
// Afficher la diapositive correspondante
document.addEventListener("DOMContentLoaded", function() {
    // pour chaque bouton page cliqué, on affiche l'image associée
    let slides = document.querySelectorAll('.element');
    const pages = document.querySelectorAll('.page');
  
    pages.forEach((page, index) => {
      page.addEventListener('click', () => {
        afficherPage(index);
      });
    });
  
    // si index = element on affiche l'image et on ajoute la classe active du bouton
    function afficherPage(index) {
      if (index < 0 || index >= slides.length) return;
  
      // Masquer toutes les diapositives
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
  
      // Afficher la diapositive correspondante
      slides[index].style.display = 'block';
  
      pages.forEach((page, i) => {
        if (i === index) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });
    }
  });
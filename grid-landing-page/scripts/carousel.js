document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.pricing');
  const pages = document.querySelectorAll('.page');

  // pour chaque page cliqué, zoom sur la slide associée
  pages.forEach((page, index) => {
    page.addEventListener('mouseover', () => {
      zoomToSlide(index);
    });
  });

  // si index = slide on zoom ety on ajoute la classe active
  function zoomToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('zoomed');
      } else {
        slide.classList.remove('zoomed');
      }
    });

    pages.forEach((page, i) => {
      if (i === index) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }
});
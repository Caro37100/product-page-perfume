// ouverture et fermeture burger menu navigation
const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const croix = document.querySelector('.navigation .croix'); // Sélectionner la croix

toggleMenu.addEventListener('click', function () {
  toggleMenu.setAttribute('aria-expanded', 'true');
  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    menu.querySelector('a').focus()
    croix.style.opacity = "1"; // Changer l'opacité de la croix à 1 lorsque le menu est ouvert
  } else if (menu.hidden) {
    toggleMenu.setAttribute('aria-expanded', 'false')
    croix.style.opacity = "0"; // Changer l'opacité de la croix à 0 lorsque le menu est fermé
  }
});

// cacher le burger menu lorsqu'un lien est cliqué
const menuLinks = document.querySelectorAll('.toggle-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    croix.style.opacity = "0"; // Changer l'opacité de la croix à 0 lorsque le menu est fermé
  });
});
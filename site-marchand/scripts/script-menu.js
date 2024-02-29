//MENU BURGER
// ouverture et fermeture burger menu navigation
const toggleMenu = document.querySelector('.navigation button');  //concerne nav header et footer
const footerMenu = document.querySelectorAll('[class*="icon-"]')  // Sélectionner les icônes du footer
const menu = document.querySelector('.navigation ul'); 
const croix = document.querySelector('.navigation .croix'); // Sélectionner la croix du burger menu ouvert

toggleMenu.addEventListener('click', function () {
  toggleMenu.setAttribute('aria-expanded', 'true');     //menu ouvert = true
  menu.hidden = !menu.hidden; //inversion valeur de la propriété CSS "hidden" = visible

  if (!menu.hidden) {
    menu.querySelector('a').focus()
    croix.style.opacity = "1"; // Changer l'opacité de la croix à 1 lorsque le menu est ouvert
    footerMenu.style.opacity = "1"; //idem icônes footer
  } else if (menu.hidden) {
    toggleMenu.setAttribute('aria-expanded', 'false')
    croix.style.opacity = "0"; // Changer l'opacité de la croix à 0 lorsque le menu est fermé
    footerMenu.style.opacity = "0";
  }
});

// cacher le burger menu lorsqu'un lien est cliqué
const menuLinks = document.querySelectorAll('.toggle-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    croix.style.opacity = "0"; // Changer l'opacité de la croix à 0 lorsque le menu est fermé
    footerMenu.style.opacity = "0";
  });
});
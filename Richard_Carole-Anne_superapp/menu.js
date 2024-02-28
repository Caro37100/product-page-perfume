// ouverture et fermeture burger menu navigation
const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function () {
  toggleMenu.setAttribute('aria-expanded', 'true');
  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    menu.querySelector('a').focus();
  } else if (menu.hidden) {
    toggleMenu.setAttribute('aria-expanded', 'false')
  }
});

// cacher le burger menu lorsqu'un lien est cliqué
const menuLinks = document.querySelectorAll('.toggle-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  });
});
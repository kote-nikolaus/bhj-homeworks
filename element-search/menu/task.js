'use strict';

let links = Array.from(document.getElementsByClassName('menu__link'));

function openLink() {
  let activeMenu = document.getElementsByClassName('menu_active').item(0);
  if (activeMenu) {
    activeMenu.classList.remove('menu_active');
  }
  let menuSub = this.closest('li').querySelector('li ul.menu_sub');
  if (menuSub !== null) {
    menuSub.classList.add('menu_active');
    return false;
  }
  return true;
}

for (let i = 0; i < links.length; i++) {
  links[i].onclick = openLink;
}

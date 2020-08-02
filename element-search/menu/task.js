'use strict';

let links = Array.from(document.getElementsByClassName('menu__link'));

function openLink() {
  let menuSub = this.closest('li').querySelector('li ul.menu_sub');
  if (menuSub !== null) {
    if (menuSub.classList.contains('menu_active')) {
        menuSub.classList.remove('menu_active');
    } else {
      menuSub.classList.add('menu_active');
    }
    return false;
  }
  return true;
}

for (let i = 0; i < links.length; i++) {
  links[i].onclick = openLink;
}

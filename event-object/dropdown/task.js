'use strict';

let dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
let dropdownLinks = Array.from(document.getElementsByClassName('dropdown__link'));

function dropList(dropdownList) {
  if (dropdownList.classList.contains('dropdown__list_active')) {
      dropdownList.classList.remove('dropdown__list_active');
  } else {
    dropdownList.classList.add('dropdown__list_active');
  }
}

function pressButton() {
  let dropdownList = this.closest('div.dropdown').querySelector('ul.dropdown__list');
  dropList(dropdownList);
}

function changeLang() {
  this.closest('div.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
  let dropdownList = this.closest('div.dropdown').querySelector('ul.dropdown__list');
  dropList(dropdownList);
  return false;
}

for (let i = 0; i < dropdownValue.length; i++) {
  dropdownValue[i].onclick = pressButton;
}

for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].onclick = changeLang;
}

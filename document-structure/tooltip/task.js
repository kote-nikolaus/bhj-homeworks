'use strict';

let links = Array.from(document.getElementsByTagName('a'));

function showTooltip() {
  let tooltipActive = document.querySelector('.tooltip_active');
  if (tooltipActive) {
    tooltipActive.classList.remove('tooltip_active');
  }
    this.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active">${this.title}</div>`);
    return false;
}

for (let i = 0; i < links.length; i++) {
  links[i].onclick = showTooltip;
}

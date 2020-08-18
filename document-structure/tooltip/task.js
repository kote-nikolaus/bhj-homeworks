'use strict';

let links = Array.from(document.getElementsByTagName('a'));
let tooltip = document.createElement('div');
tooltip.className = 'tooltip tooltip_active';

function showTooltip(e) {
  e.preventDefault();
  let activeTooltip = this.querySelector('.tooltip');
  if (activeTooltip) {
    this.removeChild(activeTooltip);
  } else {
    let position = this.getBoundingClientRect();
    tooltip.innerText = this.title;
    tooltip.style.left = `${position.left}px`;
    tooltip.style.top = `${position.top}px`;
    this.appendChild(tooltip);
  }
}

for (let i = 0; i < links.length; i++) {
  links[i].onclick = showTooltip;
}

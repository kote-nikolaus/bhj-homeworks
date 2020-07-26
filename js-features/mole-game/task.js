'use strict';

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function countDeaths() {
  if (this.className.includes( 'hole_has-mole' )) {
    dead.textContent ++;
  } else {
    lost.textContent ++;
  }
  if (Number(dead.textContent) === 10) {
    alert('Вы выиграли!');
    dead.textContent = 0;
    lost.textContent = 0;
  }
  else if (Number(lost.textContent) === 5) {
    alert('Вы проиграли :(');
    dead.textContent = 0;
    lost.textContent = 0;
  }
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = countDeaths;
}

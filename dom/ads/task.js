'use strict';

let rotators = Array.from(document.getElementsByClassName('rotator'));

function changeCase() {
  for (let i = 0; i < rotators.length; i++) {
    let activeCase = rotators[i].querySelector('.rotator__case_active');
    let rotatorCases = Array.from(rotators[i].getElementsByClassName('rotator__case'));
    let newActiveCase = rotatorCases[(rotatorCases.indexOf(activeCase) + 1) % rotatorCases.length];
    activeCase.classList.remove('rotator__case_active');
    newActiveCase.classList.add('rotator__case_active');
  }
}

setInterval(changeCase, 1000);

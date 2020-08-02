'use strict';

let mainModalClose = document.querySelector('#modal_main .modal__close');
let successModalClose = document.querySelector('#modal_success .modal__close');
let showSuccess = document.getElementsByClassName('show-success').item(0);

function close() {
  document.querySelector('.modal_active').classList.remove('modal_active');
}

function show() {
  close();
  document.getElementById('modal_success').classList.add('modal_active');
}

mainModalClose.onclick = close;
successModalClose.onclick = close;
showSuccess.onclick = show;

'use strict';

let form = document.getElementById('form');
let progress = document.getElementById('progress');

function sendData(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let sendFormRequest = new XMLHttpRequest();
  sendFormRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  sendFormRequest.upload.onprogress = function(e) {
    progress.value = e.loaded / e.total;
  }
  sendFormRequest.upload.onload = function() {
  alert('Файл успешно загружен');
  }
  sendFormRequest.upload.onerror = function() {
  alert('Не удалось загрузить файл');
}

  sendFormRequest.send(formData);
}

form.addEventListener('submit', sendData);

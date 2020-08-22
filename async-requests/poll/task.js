'use strict';

let pollRequest = new XMLHttpRequest();
pollRequest.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
pollRequest.responseType = 'json';
pollRequest.send();

let question = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

function showPoll() {
  if (pollRequest.readyState === 4) {
    let response = pollRequest.response.data;
    question.innerHTML = response.title;
    for (let i = 0; i < response.answers.length; i++) {
      let answer = document.createElement('button');
      answer.className = 'poll__answer';
      answer.innerHTML = response.answers[i];
      answers.appendChild(answer);
    }
    let buttons = Array.from(document.getElementsByClassName('poll__answer'));

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function(e) {
        e.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
      }
    }
  }
}

pollRequest.addEventListener('readystatechange', showPoll);

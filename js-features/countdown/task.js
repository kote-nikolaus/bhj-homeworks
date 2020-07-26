'use strict';

let timer = document.getElementById('timer');
let totalSeconds = 687;
convertTime(totalSeconds);

function countdown() {
  totalSeconds --;
  convertTime(totalSeconds);
}

function convertTime(time) {
  let hours = Math.floor(time / 60 / 60);
  let hh = (`0${hours}`).slice(-2);
  let minutes = Math.floor(time / 60) - (hours * 60);
  let mm = (`0${minutes}`).slice(-2);
  let seconds = time % 60;
  let ss = (`0${seconds}`).slice(-2);
  time = `${hh}:${mm}:${ss}`;
  timer.textContent = time;
}

function setMessage() {
  if (totalSeconds === 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(counting);
  }
}

let counting = setInterval(countdown, 1000);
setInterval(setMessage, 1000);

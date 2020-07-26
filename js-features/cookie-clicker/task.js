'use strict';

 let counter = document.getElementById('clicker__counter');
 let rate = document.getElementById('click__rate');
 let cookie = document.getElementById('cookie');

 function countClicks() {
   counter.textContent ++;
   if (counter.textContent % 2 !== 0) {
     cookie.width = 160;
   } else {
     cookie.width = 200;
   }
 }

 let firstClick = 0;

 function measureRate() {
   let secondClick = new Date().getTime() / 1000;
   if (firstClick > 0) {
     rate.textContent = (1 / (secondClick - firstClick)).toFixed(2);
   }
   firstClick = secondClick;
 }

 function execute() {
   countClicks();
   measureRate();
 }

cookie.onclick = execute;

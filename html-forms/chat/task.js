'use strict';

let widget = document.querySelector('.chat-widget');

widget.addEventListener('click', e => {widget.classList.add('chat-widget_active')});

let inputArea = document.getElementById('chat-widget__input');

function sendMessage(e) {
  if (e.keyCode === 13) {
    let input = document.getElementById('chat-widget__input');
    let message = input.value;
    let hours = new Date().getHours();
    let hh = (`0${hours}`).slice(-2);
    let minutes = new Date().getMinutes();
    let mm = (`0${minutes}`).slice(-2);
    let time = `${hh}:${mm}`;
    if (message) {
      const messages = document.querySelector('.chat-widget__messages');
      let randomIndex = Math.floor((Math.random() * answers.length) + 0);
      messages.innerHTML +=
  `<div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${message}
    </div>
  </div>`;

    messages.innerHTML +=
  `<div class="message">
  <div class="message__time">${time}</div>
  <div class="message__text">
    ${answers[randomIndex]}
  </div>
  </div>`;
  input.value = '';
    }
  }
}

let answers = [
  'Что вам от меня нужно?',
  'Не знаю.',
  'Глупый вопрос.',
  'Может, лучше что-нибудь уже закажете?',
  'Надоело с вами разговаривать.',
  'Вы что, не видите, что у меня сейчас обед?',
  'До свидания!',
  'У меня все отлично! А у вас, кажется, не очень.',
  'Уходите.'
]

inputArea.addEventListener('keydown', sendMessage);

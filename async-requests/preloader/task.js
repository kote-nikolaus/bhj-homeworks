'use strict';

let exchangeRateRequest = new XMLHttpRequest();
exchangeRateRequest.open('GET', 'https://netology-slow-rest.herokuapp.com/');
exchangeRateRequest.responseType = 'json';
exchangeRateRequest.send();
let items = document.getElementById('items');

let loader = document.getElementById('loader');

function showExchangeRate() {
  if (exchangeRateRequest.readyState === 4) {
    loader.classList.remove('loader_active');
    let exchangeRate = exchangeRateRequest.response.response.Valute;
    let keys = Object.keys(exchangeRate);

    for (let i = 0; i < keys.length; i++) {
      let item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `<div class="item__code">
          ${exchangeRate[keys[i]].CharCode}
      </div>
      <div class="item__value">
          ${exchangeRate[keys[i]].Value}
      </div>
      <div class="item__currency">
          руб.
      </div>`;
      items.appendChild(item);
    }
  }
}

exchangeRateRequest.addEventListener('readystatechange', showExchangeRate);

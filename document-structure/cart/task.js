'use strict';

let increaseButtons = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
let decreaseButtons = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
let addButtons = Array.from(document.getElementsByClassName('product__add'));
let cart = document.querySelector('.cart__products');

function increaseQuantity() {
  let quantity = this.closest('.product').querySelector('.product__quantity-value');
  quantity.innerText = Number(quantity.innerText) + 1;
}

function decreaseQuantity() {
  let quantity = this.closest('.product').querySelector('.product__quantity-value');
  if (quantity.innerText >= 2) {
    quantity.innerText = Number(quantity.innerText) - 1;
  }
}

function addToCart() {
  let productInCart = document.createElement('div');
  productInCart.className = 'cart__product';
  productInCart.dataset.id = this.closest('.product').dataset.id;
  let image = this.closest('.product').querySelector('img').src;
  let quantity = this.closest('.product').querySelector('.product__quantity-value').textContent;

  let productsInCart = Array.from(document.getElementsByClassName('cart__product'));

  let index = -1;
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].dataset.id === productInCart.dataset.id) {
      index = i;
      break;
    }
  }

  if (index >= 0) {
    let productCount = productsInCart[index].querySelector('.cart__product-count');
    productCount.innerText = Number(productCount.innerText) + Number(quantity);
  } else {
    productInCart.innerHTML = `<img class="cart__product-image" src="${image}"><div class="cart__product-count">${quantity}</div>`;
    cart.appendChild(productInCart);
  }
}


for (let i = 0; i < increaseButtons.length; i++) {
  increaseButtons[i].onclick = increaseQuantity;
}

for (let i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].onclick = decreaseQuantity;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = addToCart;
}

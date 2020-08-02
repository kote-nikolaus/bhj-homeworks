'use strict';

let leftArrow = document.getElementsByClassName('slider__arrow_prev').item(0);
let rightArrow = document.getElementsByClassName('slider__arrow_next').item(0);

let slides = Array.from(document.getElementsByClassName('slider__item'));
let activeSlide = document.querySelector('.slider__item_active');

let dots = Array.from(document.getElementsByClassName('slider__dot'));
let activeDot = document.querySelector('.slider__dot_active');

function changeActiveSlide(index) {
  let newActiveSlide = slides[index];
  activeSlide.classList.remove('slider__item_active');
  newActiveSlide.classList.add('slider__item_active');
  activeSlide = newActiveSlide;

  let newActiveDot = dots[index];
  activeDot.classList.remove('slider__dot_active');
  newActiveDot.classList.add('slider__dot_active');
  activeDot = newActiveDot;
}

function scrollRight() {
  changeActiveSlide((slides.indexOf(activeSlide) + 1) % slides.length);
}

function scrollLeft() {
  changeActiveSlide((slides.indexOf(activeSlide) - 1 + slides.length) % slides.length);
}

function showSlide() {
  changeActiveSlide(dots.indexOf(this));
}

rightArrow.onclick = scrollRight;
leftArrow.onclick = scrollLeft;

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = showSlide;
}

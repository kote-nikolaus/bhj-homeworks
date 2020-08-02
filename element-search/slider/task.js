'use strict';

let leftArrow = document.getElementsByClassName('slider__arrow_prev').item(0);
let rightArrow = document.getElementsByClassName('slider__arrow_next').item(0);

let slides = Array.from(document.getElementsByClassName('slider__item'));
let activeSlide = document.querySelector('.slider__item_active');

function scrollRight() {
  let newActiveSlide = slides[(slides.indexOf(activeSlide) + 1) % slides.length];
  activeSlide.classList.remove('slider__item_active');
  newActiveSlide.classList.add('slider__item_active');
  activeSlide = newActiveSlide;

  let newActiveDot = dots[slides.indexOf(activeSlide)];
  activeDot.classList.remove('slider__dot_active');
  newActiveDot.classList.add('slider__dot_active');
  activeDot = newActiveDot;
}

function scrollLeft() {
  let newActiveSlide = slides[(slides.indexOf(activeSlide) - 1 + slides.length) % slides.length];
  activeSlide.classList.remove('slider__item_active');
  newActiveSlide.classList.add('slider__item_active');
  activeSlide = newActiveSlide;

  let newActiveDot = dots[slides.indexOf(activeSlide)];
  activeDot.classList.remove('slider__dot_active');
  newActiveDot.classList.add('slider__dot_active');
  activeDot = newActiveDot;
}

rightArrow.onclick = scrollRight;
leftArrow.onclick = scrollLeft;

let dots = Array.from(document.getElementsByClassName('slider__dot'));
let activeDot = document.querySelector('.slider__dot_active');

function showSlide() {
  let newActiveDot = this;
  activeDot.classList.remove('slider__dot_active');
  newActiveDot.classList.add('slider__dot_active');
  activeDot = newActiveDot;

  let newActiveSlide = slides[dots.indexOf(activeDot)];
  activeSlide.classList.remove('slider__item_active');
  newActiveSlide.classList.add('slider__item_active');
  activeSlide = newActiveSlide;
}

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = showSlide;
}

'use strict';

let fontSizes = Array.from(document.getElementsByClassName('font-size'));

function changeFontSize() {
  let activeFont = document.querySelector('.font-size_active');
  if (!this.classList.contains('font-size_active')) {
    activeFont.classList.remove('font-size_active');
    this.classList.add('font-size_active');
    if (this.classList.contains('font-size_small')) {
      this.closest('.book').classList.add('book_fs-small');
      this.closest('.book').classList.remove('book_fs-big');
    } else if (this.classList.contains('font-size_big')) {
      this.closest('.book').classList.add('book_fs-big');
      this.closest('.book').classList.remove('book_fs-small');
    } else {
      this.closest('.book').classList.remove('book_fs-big');
      this.closest('.book').classList.remove('book_fs-small');
    }
  }
  return false;
}

for (let i = 0; i < fontSizes.length; i++) {
  fontSizes[i].onclick = changeFontSize;
}

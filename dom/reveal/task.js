'use strict';

let blocks = Array.from(document.getElementsByClassName('reveal'));

function revealBlock(block) {
  let blockTop = block.getBoundingClientRect().top;
  let blockBottom = block.getBoundingClientRect().bottom;
  let viewportHeight = window.innerHeight;
    if (blockTop < viewportHeight && blockBottom > 0) {
      block.classList.add('reveal_active');
    } else {
      block.classList.remove('reveal_active');
    }
}

function revealBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    revealBlock(blocks[i]);
  }
}

window.addEventListener('scroll', revealBlocks);

'use strict';

let mainInterests = Array.from(document.querySelectorAll('.interests_main > ul > .interest > label > .interest__check'));

function markInterests() {
  let supposedInterests = Array.from(this.closest('.interest').querySelectorAll('.interests_active .interest__check'));
  for (let j = 0; j < supposedInterests.length; j++) {
    if (!supposedInterests[j].checked) {
      supposedInterests[j].checked = true;
    } else {
      supposedInterests[j].checked = false;
    }
  }
}

for (let i = 0; i < mainInterests.length; i++) {
  mainInterests[i].onchange = markInterests;
}

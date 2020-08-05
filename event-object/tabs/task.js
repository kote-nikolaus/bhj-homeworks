'use strict';

let tabs = Array.from(document.getElementsByClassName('tab'));
let content = Array.from(document.getElementsByClassName('tab__content'));

function changeActiveTab() {
  if (!this.classList.contains('tab_active')) {
    let activeTab = this.closest('div.tabs').querySelector('.tab_active');
    activeTab.classList.remove('tab_active');
    this.classList.add('tab_active');

    let activeTabContent = this.closest('div.tabs').querySelector('.tab__content_active');
    let newActiveTabContent = content[tabs.indexOf(this)];
    activeTabContent.classList.remove('tab__content_active');
    newActiveTabContent.classList.add('tab__content_active');
  }
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = changeActiveTab;
}

'use strict' 
class Coupon {
  constructor(tabs, tabContents) {
    this.tabs = document.querySelectorAll(tabs);
    this.tabContents = document.querySelectorAll(tabContents);
  }
  selectTabs() {
    const th = this;
    if(th?.tabs) {
      th.tabContents.forEach((targetId, index) => {
        targetId.id = `tab_${index}`;
        if(targetId.hasAttribute('data-target-active')) {
          targetId.classList.add('active');
        }
      });
      th.tabs.forEach((tab, index) => {
        tab.dataset.tabTarget = `#tab_${index}`;
        if(tab.hasAttribute('data-tab-active')) {
          tab.classList.add('active');
        }
        tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.tabTarget);
            th.tabContents.forEach(tabContent => {
              tabContent.classList.remove('active');
          });
          th.tabs.forEach(tab => {
            tab.classList.remove('active');
          });
          tab.classList.add('active');
          target.classList.add('active');
        });
      });
    }
  }
}


const exampleCoupon = new Coupon(
  '[data-tab-target]',
  '[data-tab-content]',
);

exampleCoupon.selectTabs();





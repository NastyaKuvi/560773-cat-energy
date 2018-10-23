let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

let orderBtns = document.querySelectorAll('.item__order');
let orderSection = document.querySelector('.modal-order');
let orderCloseBtn = document.querySelector('.modal-close');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.replace('main-nav--closed', 'main-nav--opened');
  } else {
    navMain.classList.replace('main-nav--opened', 'main-nav--closed');
  }
});

for (let i = 0; i < orderBtns.length; i++) {
  orderBtns[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    orderSection.classList.add('modal-visible');
  });
};


orderCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  orderSection.classList.remove('modal-visible');
  orderSection.classList.remove('modal-error');
});

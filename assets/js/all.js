"use strict";

var headerLogo = document.querySelector('#header-logo');
var iconBox = document.querySelector('#icon-box');
var searchTextBar = document.querySelector('#search-text-bar');
var goBack = document.querySelector('#go-back');
var searchText = document.querySelector('#search-text');
var search = document.querySelector('#search');
var burgerBox = document.querySelector('#burger-box');
var burger = document.querySelector('#burger');
var burgerCancel = document.querySelector('#burger-cancel');
var burgerContent = document.querySelector('#burger-content');
var mask = document.querySelector('#bg-mask');

if (headerLogo && window.innerWidth < 640) {
  search.addEventListener('click', function () {
    headerLogo.classList.add('hidden'); // 表頭 logo

    iconBox.classList.add('justify-between', 'w-full'); // 表頭兩 icon 容器

    searchTextBar.classList.remove('hidden'); // 顯現輸入容器

    burgerBox.classList.remove('w-10', 'pl-6');
    burger.classList.add('hidden'); // 漢堡選單
  });
  goBack.addEventListener('click', function () {
    headerLogo.classList.remove('hidden');
    iconBox.classList.remove('justify-between', 'w-full');
    searchTextBar.classList.add('hidden');
    burgerBox.classList.add('w-10', 'pl-6');
    burger.classList.remove('hidden');
  });
  burger.addEventListener('click', function () {
    document.body.classList.add('bg-gray-900/65');
    burger.classList.add('hidden');
    burgerCancel.classList.remove('hidden');
    burgerContent.classList.remove('invisible');
    mask.classList.remove('opacity-0', '-z-10');
  });
  burgerCancel.addEventListener('click', function () {
    document.body.classList.remove('bg-gray-900/65');
    burger.classList.remove('hidden');
    burgerCancel.classList.add('hidden');
    burgerContent.classList.add('invisible');
    mask.classList.add('opacity-0', '-z-10');
  });
}
"use strict";

var swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  initialSlide: 1,
  centeredSlides: true,
  // 加這個才能讓 active 是目前撥放的物件
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
//# sourceMappingURL=all.js.map

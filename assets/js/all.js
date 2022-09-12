"use strict";

var headerLogo = document.querySelector('#header-logo');
var iconBox = document.querySelector('#icon-box');
var searchTextBar = document.querySelector('#search-text-bar');
var goBack = document.querySelector('#go-back');
var searchText = document.querySelector('#search-text');
var search = document.querySelector('#search');
var burger = document.querySelector('#burger');
var burgerCancel = document.querySelector('#burger-cancel');
var burgerContent = document.querySelector('#burger-content');

if (headerLogo) {
  search.addEventListener('click', function () {
    headerLogo.classList.add('hidden'); // 表頭 logo

    iconBox.classList.add('justify-between', 'w-full'); // 表頭兩 icon 容器

    searchTextBar.classList.remove('hidden'); // 顯現輸入容器

    burger.classList.add('hidden'); // 漢堡選單
  });
  goBack.addEventListener('click', function () {
    headerLogo.classList.remove('hidden');
    iconBox.classList.remove('justify-between', 'w-full');
    searchTextBar.classList.add('hidden');
    burger.classList.remove('hidden');
  });
  burger.addEventListener('click', function () {
    document.body.classList.add('bg-gray-900/65');
    burger.classList.add('hidden');
    burgerCancel.classList.remove('hidden');
    burgerContent.classList.remove('invisible');
  });
  burgerCancel.addEventListener('click', function () {
    document.body.classList.remove('bg-gray-900/65');
    burger.classList.remove('hidden');
    burgerCancel.classList.add('hidden');
    burgerContent.classList.add('invisible');
  });
}
//# sourceMappingURL=all.js.map

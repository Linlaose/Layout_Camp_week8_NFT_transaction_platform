const headerLogo = document.querySelector('#header-logo');
const iconBox = document.querySelector('#icon-box');
const searchTextBar = document.querySelector('#search-text-bar');
const goBack = document.querySelector('#go-back');
const searchText = document.querySelector('#search-text');
const search = document.querySelector('#search');
const burger = document.querySelector('#burger');

if (headerLogo) {
  search.addEventListener('click', () => {
    headerLogo.classList.add('hidden'); // 表頭 logo
    iconBox.classList.add('justify-between', 'w-full'); // 表頭兩 icon 容器
    searchTextBar.classList.remove('hidden'); // 顯現輸入容器
    burger.classList.add('hidden'); // 漢堡選單
  });
  goBack.addEventListener('click', () => {
    headerLogo.classList.remove('hidden');
    iconBox.classList.remove('justify-between', 'w-full');
    searchTextBar.classList.add('hidden');
    burger.classList.remove('hidden');
  })
}
const headerLogo = document.querySelector('#header-logo');
const iconBox = document.querySelector('#icon-box');
const searchTextBar = document.querySelector('#search-text-bar');
const goBack = document.querySelector('#go-back');
const searchText = document.querySelector('#search-text');
const search = document.querySelector('#search');
const burgerBox = document.querySelector('#burger-box');
const burger = document.querySelector('#burger');
const burgerCancel = document.querySelector('#burger-cancel');
const burgerContent = document.querySelector('#burger-content');
const mask = document.querySelector('#bg-mask');

if (headerLogo && window.innerWidth < 640) {
  search.addEventListener('click', () => {
    headerLogo.classList.add('hidden'); // 表頭 logo
    iconBox.classList.add('justify-between', 'w-full'); // 表頭兩 icon 容器
    searchTextBar.classList.remove('hidden'); // 顯現輸入容器
    burgerBox.classList.remove('w-10', 'pl-6');
    burger.classList.add('hidden'); // 漢堡選單
  });
  goBack.addEventListener('click', () => {
    headerLogo.classList.remove('hidden');
    iconBox.classList.remove('justify-between', 'w-full');
    searchTextBar.classList.add('hidden');
    burgerBox.classList.add('w-10', 'pl-6');
    burger.classList.remove('hidden');
  });
  burger.addEventListener('click', () => {
    document.body.classList.add('bg-gray-900/65');
    burger.classList.add('hidden');
    burgerCancel.classList.remove('hidden');
    burgerContent.classList.remove('invisible');
    mask.classList.remove('opacity-0', '-z-10');
  });
  burgerCancel.addEventListener('click', () => {
    document.body.classList.remove('bg-gray-900/65');
    burger.classList.remove('hidden');
    burgerCancel.classList.add('hidden');
    burgerContent.classList.add('invisible');
    mask.classList.add('opacity-0', '-z-10');
  })
}

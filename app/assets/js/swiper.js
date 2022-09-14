const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  initialSlide: 1,
  centeredSlides: true, // 加這個才能讓 active 是目前撥放的物件
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
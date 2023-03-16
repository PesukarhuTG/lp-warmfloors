const slider = new Swiper('.hero__slider', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.hero__slider-btn_next',
    prevEl: '.hero__slider-btn_prev',
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    560: {
      spaceBetween: 8,
    },
  }
});

export default slider;
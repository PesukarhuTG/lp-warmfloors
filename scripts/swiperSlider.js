const slider = new Swiper('.hero__slider', {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.hero__slider-btn_next',
    prevEl: '.hero__slider-btn_prev',
  },
  autoplay: {
    delay: 3000,
  },
});

export default slider;
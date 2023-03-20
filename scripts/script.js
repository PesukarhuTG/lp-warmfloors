import slider from './swiperSlider.js';
import calculator from './calculator.js';
import modalController from './modal.js';

slider();
calculator();
modalController({
  modal: '.modal',
  btnOpen: '.js-order',
  btnClose: '.modal__close',
});

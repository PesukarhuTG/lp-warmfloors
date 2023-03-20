import slider from './swiperSlider.js';
import calculator from './calculator.js';
import modalController from './modal.js';
import phoneMask from './phoneMask.js';
import validationModalInput from './validationModalInput.js';

slider();
calculator();
modalController({
  modal: '.modal',
  btnOpen: '.js-order',
  btnClose: '.modal__close',
});
phoneMask();
validationModalInput();

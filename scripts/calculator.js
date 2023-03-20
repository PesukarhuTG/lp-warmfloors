const calculatorForm = document.querySelector('.calculator__form');
const totalSquare = document.querySelector('.js-total-square');
const totalSum = document.querySelector('.js-total-sum');
const resultInfo = document.querySelector('.js-result-info');
const btnSubmit = document.querySelector('.js-submit');
const btnOrder = document.querySelector('.calculator__btn-order');

const plans = {
  'econom': 550,
  'comfort': 1400,
  'premium': 2700,
}

const calculator = () => {
  calculatorForm.addEventListener('input', () => {
    btnSubmit.disabled = !(calculatorForm.width.value > 0 && calculatorForm.length.value > 0);
  })

  calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (calculatorForm.width.value > 0 && calculatorForm.length.value > 0) {
      const square = calculatorForm.width.value * calculatorForm.length.value;
      let sum = square * plans[calculatorForm.plan.value];

      resultInfo.classList.add('calculator__result-wrapper_show');
      btnOrder.classList.add('calculator__btn-order_show');

      totalSquare.textContent = `${square} кв м`;
      totalSum.textContent = `${sum} ₽`;
    }
  })
};

export default calculator;
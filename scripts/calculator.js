const calculatorForm = document.querySelector('.calculator__form');
const totalSquare = document.querySelector('.js-total-square');
const totalSum = document.querySelector('.js-total-sum');
const resultInfo = document.querySelector('.js-result-info');

const plans = {
  'econom': 550,
  'comfort': 1400,
  'premium': 2700,
}

const calculator = () => {
  calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (calculatorForm.width.value > 0 && calculatorForm.length.value > 0) {
      const square = calculatorForm.width.value * calculatorForm.length.value;
      let sum = square * plans[calculatorForm.plan.value];

      resultInfo.style.display = 'block';

      totalSquare.textContent = `${square} кв м`;
      totalSum.textContent = `${sum} ₽`;
    }
  })
};

export default calculator;
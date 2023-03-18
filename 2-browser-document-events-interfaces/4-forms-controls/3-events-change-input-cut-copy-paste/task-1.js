/* Мышь, управляемая клавиатурой */
'use strict'

// Решение: https://codepen.io/valeriapvv/pen/LYJBjyy

// JS код из решения:

const Field = {
  Money: 'money',
  Months: 'months',
  Interest: 'interest'
};

const HEIGHT_BEFORE = 100;

const form = document.forms.calculator;
const moneyBefore = document.getElementById('money-before');
const moneyAfter = document.getElementById('money-after');
const heightAfterElement = document.getElementById('height-after');

const calculateResult = (initial, interest, years) =>
  Math.round(initial * (1 + interest) ** years);

const calculate = () => {
  const initial = parseInt(form[Field.Money].value);
  const years = parseInt(form[Field.Months].value) / 12;
  const interest = +form[Field.Interest].value / 100;
  const result = calculateResult(initial, interest, years);

  moneyBefore.textContent = initial;
  moneyAfter.textContent = result;

  heightAfterElement.style.height = result / initial * HEIGHT_BEFORE + 'px';
}

calculate();
form.addEventListener('input', calculate);

/* Сумма введённых чисел */
'use strict';

const getInputtedNumber = () => prompt('Введите число', '');

const sumInput = () => {
  const numbers = [];

  let value = getInputtedNumber();

  while (
    isFinite(value)
    && value !== ''
    && value !== null
  ) {
    numbers.push(+value);
    value = getInputtedNumber();
  }

  return numbers.reduce((sum, number) => sum + number, 0);
};

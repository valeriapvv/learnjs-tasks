/* Ввод числового значения */
'use strict';

const readNumber = () => {
  let number;

  while (!isFinite(number)) {
    number = prompt('Введите число', '');
  }

  if (number === null || number === '') {
    return null;
  }
  
  return number;
};

alert(readNumber());

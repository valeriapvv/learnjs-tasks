/* Сумма с помощью замыканий */
'use strict';

const sum = (a) => {
  return (b) => a + b;
};

console.log('sum(1)(2) => ', sum(1)(2)); // 3
console.log('sum(5)(-1) => ', sum(5)(-1)); // 4

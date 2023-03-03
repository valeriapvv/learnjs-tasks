/* Вычислить факториал */
'use strict';

const factorial = (n) => {
  const int = Math.floor(n);

  return int > 1 ? int * factorial(int - 1) : 1;
};

console.log('5! =', factorial(5));

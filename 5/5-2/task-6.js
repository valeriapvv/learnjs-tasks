/* Случайное целое число от min до max */
'use strict';

const randomInteger = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};

/* Почему 6.35.toFixed(1) == 6.3? Как правильно округлить 6.35? */
'use strict';

const roundCorrect = (number, decimalPlace) => {
  const multiplier = 10 ** decimalPlace;

  return Math.round(number * multiplier) / multiplier; 
};

roundCorrect(6.35, 1);

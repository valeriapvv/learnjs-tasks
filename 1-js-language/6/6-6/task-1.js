/* Установка и уменьшение значения счётчика */
'use strict';

const makeCounter = () => {
  let value = 0;

  const counter = () => ++value;

  counter.set = (newValue) => value = newValue;

  counter.decrease = () => --value;

  return counter;
};

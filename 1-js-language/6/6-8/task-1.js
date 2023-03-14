/* Вывод каждую секунду */
'use strict';

const TIME_DELAY = 1000;

// 1. setInterval
const printNumbers1 = (from, to) => {
  let currentNumber = from;
  let intervalId;

  const intervalCallback = () => {
    console.log(currentNumber++);

    if (currentNumber > to) clearInterval(intervalId);
  };

  intervalId = setInterval(intervalCallback, TIME_DELAY);
};

// 2. setTimeout
const printNumbers2 = (from, to) => {
  let currentNumber = from;

  const timeoutCallback = () => {
    console.log(currentNumber++);

    if (currentNumber <= to) {
      setTimeout(timeoutCallback, TIME_DELAY);
    }
  }

  setTimeout(timeoutCallback, TIME_DELAY);
};

printNumbers1(5, 10);
printNumbers2(5, 10);

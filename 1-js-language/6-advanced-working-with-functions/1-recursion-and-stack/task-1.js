/* Вычислить сумму чисел до данного */
'use strict';

// 1. Цикл
const sumTo1 = (n) => {
  let sum = 0;

  for (let i = 1; i <=n; i++) {
    sum += i;
  }

  return sum;
};

// 2. Рекурсия
const sumTo2 = (n) => {
  const int = Math.floor(n);

  return int > 1 ? int + sumTo2(int - 1) : int;
};

// 3. Формула суммы арифм. прогрессии (самое быстрое)
const sumTo3 = (n) => {
  const int = Math.floor(n);

  return int * (int + 1) / 2;
};

console.log('1. Цикл sum(100) =>', sumTo1(100));
console.log('2. Рекурсия sum(100) =>', sumTo2(100));
console.log('3. Формула sum(100) =>', sumTo3(100));

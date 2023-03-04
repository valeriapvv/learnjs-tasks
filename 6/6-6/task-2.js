/* Сумма с произвольным количеством скобок */
'use strict';

const sum = (startNumber) => {
  let lastSum = startNumber;

  const add = (number) => {
    lastSum += number;
    return add;
  }

  add[Symbol.toPrimitive] = () => lastSum;

  return add;
};

console.log(`sum(100) == ${sum(100)}`); // 100
console.log(`sum(6)(-1)(-2)(-3) == ${sum(6)(-1)(-2)(-3)}`); // 0
console.log(`sum(0)(1)(2)(3)(4)(5) == ${sum(0)(1)(2)(3)(4)(5)}`); // 15

/* Создайте new Accumulator */
'use strict';

function Accumulator(startingValue) {
  this.value = startingValue;
}

Accumulator.prototype.read = function () {
  const newNumber = +prompt('Введите число', '') || 0;
  this.value += newNumber;
};

const accumulator = new Accumulator(10);

accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);

/* Создайте калькулятор при помощи конструктора, new Calculator */
'use strict';

function Calculator() {
  let num1;
  let num2;

  this.read = function () {
    num1 = +prompt('Введите первое число', '');
    num2 = +prompt('Введите второе число', '');
  }

  this.sum = function () {
    return num1 + num2;
  }

  this.mul = function () {
    return num1 * num2;
  }
}

const calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

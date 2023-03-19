/* Создать расширяемый калькулятор */
'use strict';

function Calculator() {
  this.method = {
    '+': sum,
    '-': diff,
  };
}

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

Calculator.prototype.calculate = function(string) {
  const splittedString = string.split(' ');

  const operation = splittedString[1];
  const a = +splittedString[0];
  const b = +splittedString[2];

  return this.method[operation]?.(a, b) ?? NaN;
}

Calculator.prototype.addMethod = function(name, func) {
  this.method[name] = func;
};

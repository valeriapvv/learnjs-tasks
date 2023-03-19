/* Добавьте функциям декорирующий метод "defer()" */
'use strict';

Function.prototype.defer = function(ms) {
  const func = this;

  return function(...rest) {
    setTimeout(() => func.apply(this, rest), ms);
  }
}

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);

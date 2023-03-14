/* Добавить функциям метод "f.defer(ms)" */
'use strict';

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert('hello');
}

f.defer(1000);

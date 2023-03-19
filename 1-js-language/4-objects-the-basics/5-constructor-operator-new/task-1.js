/* Две функции - один объект */
'use strict';

const object = {};

// Функции возвращают ссылку на уже существующий объект
function A() { 
  return object;
}

function B() { 
  return object;
}

let a = new A();
let b = new B();

alert(a === b);

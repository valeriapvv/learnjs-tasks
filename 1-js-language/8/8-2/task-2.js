/* Создайте новый объект с помощью уже существующего */
'use strict';

// 1. Работает вызов конструктора на obj
// создает экземпляр ObjConstructor
function ObjConstructor() {
  this.prop = 'value';
}

const obj = new ObjConstructor();
const obj2 = new obj.constructor();

console.log(obj2.prop) // value

// 2. Переопределим прототип функции-конструктора.
// Вызов конструктора на anotherObj сработает не так как мы хотели
function AnotherObjConstructor() {
  this.prop = 'value';
}

AnotherObjConstructor.prototype = {
  anotherProp: 'anotherValue',
};

const anotherObj = new AnotherObjConstructor();
const anotherObj2 = new anotherObj.constructor();

console.log(anotherObj2.prop) // undefined

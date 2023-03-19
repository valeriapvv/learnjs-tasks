/* Добавьте toString в словарь */
'use strict';

const dictionary = Object.create(null) 

Object.defineProperty(dictionary, 'toString', {
  value: function() {
    return Object.keys(this).join();
  },
 });

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 

for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

alert(dictionary); // "apple,__proto__"

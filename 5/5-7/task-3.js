/* Перебираемые ключи */
'use strict';

const map = new Map();

map.set("name", "John");

const keys = Array.from(map.keys());

keys.push("more");

alert(keys);

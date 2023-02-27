/* Трансформировать в массив имён */
'use strict';

const getUserNames = (users) => users.map(user => user.name);

const vasya = {name: "Вася", age: 25};
const petya = {name: "Петя", age: 30};
const masha = {name: "Маша", age: 28};

const users = [vasya, petya, masha];

const names = getUserNames(users);

alert(names); 

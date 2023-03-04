/* Сортировать по полю */
'use strict';

const byField = (fieldName) => {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
};

const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const usersByName = users.slice().sort(byField("name"));
const usersByAge = users.slice().sort(byField("age"));

console.log(usersByName);
console.log(usersByAge);

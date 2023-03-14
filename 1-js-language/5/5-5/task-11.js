/* Получить средний возраст */
'use strict';

const getAverageAge = (users) => users.reduce((result, user, index, array) => {
  const currentSum = result + user.age;

  if (index !== array.length - 1) {
    return currentSum;
  }

  return currentSum / array.length;
}, 0);

const vasya = {name: "Вася", age: 25};
const petya = {name: "Петя", age: 30};
const masha = {name: "Маша", age: 29};

const arr = [vasya, petya, masha];

alert(getAverageAge(arr));

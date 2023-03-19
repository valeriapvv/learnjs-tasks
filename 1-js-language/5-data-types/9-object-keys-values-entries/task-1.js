/* Сумма свойств объекта */
'use strict';

const sumSalaries = (salaries) => {
  const values = Object.values(salaries);
  let sum = 0;

  for (let value of values) {
    sum += value;
  }

  return sum;
};

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

alert(sumSalaries(salaries));

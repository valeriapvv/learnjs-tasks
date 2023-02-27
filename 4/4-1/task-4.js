/* Сумма свойств объекта */
'use strict';

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = getSalariesSum(salaries);

function getSalariesSum(membersSalary) {
  let result = 0;

  for (let member in membersSalary) {
    result += membersSalary[member];
  }

  return result;
}

/* Максимальная зарплата */
'use strict';

const topSalary = (salaries) => {
  let topSalary = 0;
  let topMember = null;

  for(let [member, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      topMember = member;
    }
  }

  return topMember;
};

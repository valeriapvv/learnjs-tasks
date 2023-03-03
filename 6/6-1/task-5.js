/* Вывод односвязного списка в обратном порядке */
'use strict';

// 1. Цикл
const printListInReverse1 = (list) => {
  let innerList = list;
  const values = [];

  while (innerList) {
    values.push(innerList.value);
    innerList = innerList.next;
  }

  values.reverse().forEach(value => console.log(value));
};

// 2. Рекурсия
const printListInReverse2 = (list) => {
  if (list.next) printListInReverse2(list.next);

  console.log(list.value);
};

// Проверка
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log('\n1. Цикл');
printListInReverse1(list);

console.log('\n2. Рекурсия');
printListInReverse2(list);

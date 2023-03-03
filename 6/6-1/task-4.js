/* Вывод односвязного списка */
'use strict';

// 1. Цикл
const printList1 = (list) => {
  let innerList = list;

  while (innerList) {
    console.log(innerList.value);
    innerList = innerList.next;
  }
};

// 2. Рекурсия
const printList2 = (list) => {
  console.log(list.value);

  if (list.next) printList2(list.next);
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
printList1(list);

console.log('\n2. Рекурсия');
printList2(list);

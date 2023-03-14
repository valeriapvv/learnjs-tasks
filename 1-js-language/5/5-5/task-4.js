/* Сортировать в порядке по убыванию */
'use strict';

const sortDescending = (array) => array.sort((a, b) => b - a);

const arr = [5, 2, 1, -10, 8];
sortDescending(arr);

alert(arr);

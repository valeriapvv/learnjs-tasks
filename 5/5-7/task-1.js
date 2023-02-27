/* Фильтрация уникальных элементов массива */
'use strict';

const unique = (arr) => Array.from(new Set(arr));

const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));

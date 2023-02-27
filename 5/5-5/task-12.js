/* Оставить уникальные элементы массива */
'use strict';

const unique = (arr) => Array.from(new Set(arr));

const strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));

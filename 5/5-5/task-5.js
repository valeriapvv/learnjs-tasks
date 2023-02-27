/* Скопировать и отсортировать массив */
'use strict';

const copySorted = (array) => array.slice().sort();

const arr = ["HTML", "JavaScript", "CSS"];
const sorted = copySorted(arr);

alert(sorted);
alert(arr);

/* Фильтрация по диапазону */
'use strict';

const filterRange = (arr, a, b) => arr.filter((element) => element => a && element <= b);

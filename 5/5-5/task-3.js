/* Фильтрация по диапазону "на месте" */
'use strict';

const filterRangeInPlace = (arr, a, b) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];

    if (element < a || element > b) arr.splice(i, 1);
  }
};
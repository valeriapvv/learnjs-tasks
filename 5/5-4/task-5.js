/* Подмассив наибольшей суммы */
'use strict';

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) maxSum = currentSum;

    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
};

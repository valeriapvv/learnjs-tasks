/* Перемешайте массив */
'use strict';

const getRandomInteger = (a, b) => {
  const random = Math.random() * (b - a + 1) + a;
  return Math.floor(random);
}

const shuffle = (array) => {
  for (let i = 0; i < array.length; i++) {
    const randomIndex = getRandomInteger(0, array.length - 1);
    const randomElement = array[randomIndex];

    array[randomIndex] = array[i];
    array[i] = randomElement;
  }

  return array;
};

let arr = [1, 2, 3];

shuffle(arr);

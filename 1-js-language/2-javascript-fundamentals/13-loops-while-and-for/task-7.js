/* Вывести простые числа */
'use strict';

// Будем записывать простые числа в массив
const primes = [];
const n = 10;


if (n >= 2) {
  primes.push(2)
  console.log(2);
}

// Проверим только нечетные числа
Numbers:
for (let number = 3; number <= n; number += 2) {

  // Проверим делимость только на простые числа из массива primes,
  // которые не больше чем квадратный корень number
  for (let i = 1; i < primes.length; i++) {
    const div = primes[i];

    if (div > Math.sqrt(number)) break;

    if (!(number % div)) continue Numbers;
  }

  primes.push(number);
  console.log(number);
}

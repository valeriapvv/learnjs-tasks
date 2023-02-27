/* Функция pow(x,n) */
'use strict';

// Считаем, что пользователь вводит только числа

function pow(x, n) {
  if (n % 1 || n <= 0) {
    throw new Error('Ожидаются только целые положительные значения степени');
  }

  return x ** n;
}

const number = prompt('Введите число, которое хотите возвести в степень', '');
const power = prompt('Введите степень числа', '');

try {
  const result = pow(number, power);
  alert(result);
} catch(error) {
  alert(error.message);
}

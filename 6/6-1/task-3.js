/* Числа Фибоначчи */
'use strict';

const fib = (n) => {
  const int = Math.floor(n);

  return int > 2 ? fib(int - 1) + fib(int - 2) : 1;
};

console.log('fib(3) => ', fib(3));
console.log('fib(7) => ', fib(7));

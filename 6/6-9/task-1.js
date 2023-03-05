/* Декоратор-шпион */
'use strict';

function spy(func) {
  return function closure(...rest) {
    if (!closure.calls) {
      closure.calls = new Set();
    }

    closure.calls.add(rest);

    return func.apply(this, rest);
  }
}

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work.calls)

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

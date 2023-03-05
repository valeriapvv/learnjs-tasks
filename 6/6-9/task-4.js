/* Тормозящий (throttling) декоратор */
'use strict';

function throttle(f, ms) {
  let lastCall = 0;
  let lastCallId;

  const setTimeoutCallback = (args) => () => {
    lastCall = performance.now();
    f.apply(this, args);
  };

  return function(...rest) {
    const currentCall = performance.now();
    const timeDiff = currentCall - lastCall;

    if (lastCallId) clearTimeout(lastCallId);

    if (timeDiff < ms) {
      lastCallId = setTimeout(setTimeoutCallback(rest), ms - timeDiff);
      return;
    }
    
    lastCall = currentCall;
    f.apply(this, rest);
  }
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

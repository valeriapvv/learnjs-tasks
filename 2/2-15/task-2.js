/* Перепишите функцию, используя оператор '?' или '||' */
'use strict';

function checkAge(age) {
  // 1. С использованием оператора '?'
  return age > 18 ? true : confirm('Родители разрешили?');

  // 2. С использованием оператора '||'
  return age > 18 || confirm('Родители разрешили?');
}

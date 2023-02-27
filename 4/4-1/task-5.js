/* Умножаем все числовые свойства на 2 */
'use strict';

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

doubleNumericProperties(menu);

function doubleNumericProperties(object) {
  for (let key in object) {
    if (typeof object[key] === 'number') {
      object[key] *= 2;
    }
  }
}

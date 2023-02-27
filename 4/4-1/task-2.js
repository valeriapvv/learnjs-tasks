/* Проверка на пустоту */
'use strict';

let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    if ( obj.hasOwnProperty(key) ) {
      return true;
    }
  }

  return false;
}

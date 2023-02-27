/* Преобразуйте объект в JSON, а затем обратно в обычный объект */
'use strict';

const user = {
  name: "Василий Иванович",
  age: 35,
};

const userClone = JSON.parse(JSON.stringify(user));

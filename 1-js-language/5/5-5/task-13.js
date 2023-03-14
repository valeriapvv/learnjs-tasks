/* Создайте объект с ключами из массива */
'use strict';

const groupById = (users) => users.reduce((result, user) => {
  result[user.id] = user;
  return result;
}, {});

const users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

const usersById = groupById(users);

console.log(usersById);

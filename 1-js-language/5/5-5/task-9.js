/* Отсортировать пользователей по возрасту */
'use strict';

const sortByAge = (users) => users.slice().sort((user1, user2) => user1.age - user2.age);

/* Трансформировать в объекты */
'use strict';

const getUsersMapped = (users) => users.map(({name, surname, id}) => ({
  fullName: `${name} ${surname}`,
  id,
}));

const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
const petya = { name: "Петя", surname: "Иванов", id: 2 };
const masha = { name: "Маша", surname: "Петрова", id: 3 };

const users = [ vasya, petya, masha ];

const usersMapped = getUsersMapped(users);

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);

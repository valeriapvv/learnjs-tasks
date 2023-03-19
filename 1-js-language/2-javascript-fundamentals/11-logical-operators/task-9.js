/* Проверка логина */
'use strict';

const login = prompt('Введите логин', '')

if (!login) {
  alert('Отменено');
} else if (login === 'Админ') {
  const password = prompt('Введите пароль', '')

  if (!password) {
    alert('Отменено');
  } else if (password === 'Я главный') {
    alert('Здравствуйте!')
  } else {
    alert('Неверный пароль');
  }
} else {
  alert('Я вас не знаю');
}

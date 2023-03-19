/* Получите данные о пользователях GitHub */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/BaOPvjx?editors=0011

const URL = 'https://api.github.com/users/';

const createTask = async (name) => {
  try {
    const request = await fetch(`${URL}${name}`);

    if (!request.ok) return null;

    return await request.json();

  } catch(error) {
    return null;
  }
};

const getUsers = async (names) => {
  const tasks = names.map(createTask);
  return await Promise.all(tasks);
};
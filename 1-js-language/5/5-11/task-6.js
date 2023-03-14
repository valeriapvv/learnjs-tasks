/* Сколько сегодня прошло секунд? */
'use strict';

const getSecondsToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const today = new Date(year, month, day);

  return Math.round((now - today) / 1000);
};

alert(getSecondsToday());

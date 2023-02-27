/* Форматирование относительной даты */
'use strict';

const formatTime = (time) => time < 10 ? '0' + time : time;

const formatDate = (date) => {
  const now = new Date();
  let timeDiff = (now - date) / 1000;

  if (timeDiff < 1) {
    return 'сейчас';
  }

  if (timeDiff < 60) {
    return `${Math.floor(timeDiff)} сек. назад`;
  }

  timeDiff /= 60
  if (timeDiff < 60) {
    return `${Math.floor(timeDiff)} мин. назад`;
  }

  const year = date.getFullYear() % 100;
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayHours = date.getHours();
  const dayMinutes = date.getMinutes();

  return `${formatTime(day)}.${formatTime(month)}.${formatTime(year)}` + 
    ` ${formatTime(dayHours)}:${formatTime(dayMinutes)}`;
};

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

alert(formatDate(new Date(new Date - 86400 * 1000)));

/* Сколько секунд осталось до завтра? */
'use strict';

const getSecondsToTomorrow = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const tomorrow = new Date(year, month, day + 1);

  return Math.round((tomorrow - now) / 1000);
};

alert(getSecondsToTomorrow());

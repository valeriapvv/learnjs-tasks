/* Последнее число месяца? */
'use strict';

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month);
  date.setDate(date.getDate() + 30);
  
  let lastDay = date.getDate();

  while (lastDay < 28) {
    date.setDate(lastDay - 1)
    lastDay = date.getDate();
  }

  return lastDay;
};

alert(getLastDayOfMonth(2012, 1));

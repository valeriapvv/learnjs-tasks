/* Создайте календарь в виде таблицы */
'use strict';

// Песочница: https://plnkr.co/edit/t08F7Gnj836QAvYv?p=preview

const WEEK_DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const createCalendarHead = () => {
  const tr = document.createElement('tr');
  
  for (let day of WEEK_DAYS) {
    const th = document.createElement('th');
    th.textContent = day;
    tr.append(th);
  }

  return tr;
};

const createCalendar = (element, year, month) => {
  const table = document.createElement('table');
  table.append(createCalendarHead());

  const lastDay = new Date(year, month, 0);
  const daysCount = lastDay.getDate();

  const firstWeekDay = new Date(year, month - 1, 1).getDay();
  let firstWeakDayIndex = firstWeekDay === 0 ? 6 : firstWeekDay - 1;
  let currentDay = 1;

  while (currentDay <= daysCount) {
    const tr = document.createElement('tr')

    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      
      if (i >= firstWeakDayIndex && currentDay <= daysCount) {
        td.textContent = currentDay;
        currentDay++;
      };

      if (i >= firstWeakDayIndex) firstWeakDayIndex = 0;

      tr.append(td);
    }

    table.append(tr);
  }

  console.log(currentDay)

  element.append(table);
};

createCalendar(
  document.getElementById('calendar'),
  2012,
  9,
);

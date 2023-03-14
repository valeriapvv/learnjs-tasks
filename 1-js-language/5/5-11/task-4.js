/* Какой день месяца был много дней назад? */
'use strict';

const getDateAgo = (date, days) => {
  const dateAgo = new Date(date);
  dateAgo.setDate(date.getDate() - days);

  return dateAgo.getDate();
};

const date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

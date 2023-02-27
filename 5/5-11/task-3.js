/* День недели в европейской нумерации */
'use strict';

const getLocalDay = (date) => date.getDay() || 7;

const date = new Date(2012, 0, 3);
alert(getLocalDay(date)); 

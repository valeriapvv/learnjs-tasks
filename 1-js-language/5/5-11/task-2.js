/* Покажите день недели */
'use strict';

const WEAK_DAYS = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const getWeekDay = (date) => WEAK_DAYS[date.getDay()];

const date = new Date(2012, 0, 3); 
alert(getWeekDay(date));  

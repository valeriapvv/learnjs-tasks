/* Создайте календарь в виде таблицы */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/YzOLqLw

/*
 *  <div id="clock">
 *    <span id="clock-hours">hh</span>:<span id="clock-minutes">mm</span>:<span id="clock-seconds">ss</span>
 *  </div>
 */

//  JS-код из решения

const clock = document.querySelector('#clock');
const hoursElement = clock.querySelector('#clock-hours');
const minutesElement = clock.querySelector('#clock-minutes');
const secondsElement = clock.querySelector('#clock-seconds');

const ClockDefault = {
  Hours: 'hh',
  Minutes: 'mm',
  Seconds: 'ss',
};

const INTERVAL_DELAY = 1000;
let intervalId;

const formatByTwoDigits = (dateUnit) => dateUnit < 10 ? `0${dateUnit}` : dateUnit;

const clockStart = () => {
  if (intervalId) return;

  let prevHours;
  let prevMinutes;

  const redraw = () => {
    const now = new Date();
    
    // Seconds
    secondsElement.textContent = formatByTwoDigits(now.getSeconds());

    // Minutes
    const currentMinutes = now.getMinutes();

    if (currentMinutes === prevMinutes) return;

    minutesElement.textContent = formatByTwoDigits(currentMinutes);
    prevMinutes = currentMinutes;

    // Hours
    const currentHours = now.getHours();

    if (currentHours === prevHours) return;

    hoursElement.textContent = formatByTwoDigits(currentHours);
    prevHours = currentHours;
  };

  redraw();

  intervalId = setInterval(redraw, INTERVAL_DELAY);
};

const clockStop = () => {
  if (intervalId) {
    clearInterval(intervalId);

    hoursElement.textContent = ClockDefault.Hours;
    minutesElement.textContent = ClockDefault.Minutes;
    secondsElement.textContent = ClockDefault.Seconds;

    intervalId = null;
  }
};

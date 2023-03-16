/* Найдите координаты точек относительно окна браузера */
'use strict';

// Песочница: https://plnkr.co/edit/1FHjn76pZeEq1Jxq?p=preview&preview

const showCoords = (element) => {
  const {
    top,
    left,
    bottom,
    right,
  } = element.getBoundingClientRect();

  const topInside = top + element.clientTop;
  const leftInside = left + element.clientLeft;
  const bottomInside = topInside + element.clientHeight;
  const rightInside = leftInside + element.clientWidth;

  alert(`top left outside: ${left}:${top}`);
  alert(`bottom right outside: ${right}:${bottom}`);
  alert(`top left inside: ${leftInside}:${topInside}`);
  alert(`bottom right inside: ${rightInside}:${bottomInside}`);
};

const field = document.getElementById('field');
showCoords(field);

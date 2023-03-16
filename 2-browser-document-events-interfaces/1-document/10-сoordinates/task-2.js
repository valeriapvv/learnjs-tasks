/* Покажите заметку рядом с элементом */
'use strict';

// Песочница: https://plnkr.co/edit/yfKfxyfM6u62Ehuw?p=preview&preview

const Position = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
};

const positionAt = (anchor, position, elem) => {
  const {
    top,
    left,
    width: anchorWidth,
    height: anchorHeight,
  } = anchor.getBoundingClientRect();

  const elemHeight = elem.offsetHeight;

  switch (position) {
    case Position.Top:
      elem.style.top = top - elemHeight + 'px';
      elem.style.left = left + 'px';
      break;
    case Position.Right:
      elem.style.top = top + 'px';
      elem.style.left = left + anchorWidth + 'px';
      break;
    case Position.Bottom:
      elem.style.top = top + anchorHeight + 'px';
      elem.style.left = left + 'px';
      break;å
    default:
      throw new Error('Некорректно указана позиция');
  }
};

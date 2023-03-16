/* Покажите заметку около элемента (абсолютное позиционирование) */
'use strict';

// Песочница: https://plnkr.co/edit/nerhhQnOiUOgcuPp?p=preview&preview

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

  const topAbsolute = top + window.pageYOffset;
  const leftAbsolute = left + window.pageXOffset;

  const elemHeight = elem.offsetHeight;

  switch (position) {
    case Position.Top:
      elem.style.top = topAbsolute - elemHeight + 'px';
      elem.style.left = leftAbsolute + 'px';
      break;
    case Position.Right:
      elem.style.top = topAbsolute + 'px';
      elem.style.left = leftAbsolute + anchorWidth + 'px';
      break;
    case Position.Bottom:
      elem.style.top = topAbsolute + anchorHeight + 'px';
      elem.style.left = leftAbsolute + 'px';
      break;
    default:
      throw new Error('Некорректно указана позиция');
  }
};

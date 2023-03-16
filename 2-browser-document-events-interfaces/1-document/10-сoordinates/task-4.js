/* Расположите заметку внутри элемента (абсолютное позиционирование)*/
'use strict';

const Position = {
  TopOut: 'top-out',
  TopIn: 'top-in',
  RightOut: 'right-out',
  RightIn: 'right-in',
  BottomOut: 'bottom-out',
  BottomIn: 'bottom-in',
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

  const elemWidth = elem.offsetWidth;
  const elemHeight = elem.offsetHeight;

  switch (position) {
    case Position.TopOut:
      elem.style.top = topAbsolute - elemHeight + 'px';
      elem.style.left = leftAbsolute + 'px';
      break;
    case Position.TopIn:
      elem.style.top = topAbsolute + 'px';
      elem.style.left = leftAbsolute + 'px';
      break;
    case Position.RightOut:
      elem.style.top = topAbsolute + 'px';
      elem.style.left = leftAbsolute + anchorWidth + 'px';
      break;
    case Position.RightIn:
      elem.style.top = topAbsolute + 'px';
      elem.style.left = leftAbsolute + anchorWidth - elemWidth + 'px';
      break;
    case Position.BottomOut:
      elem.style.top = topAbsolute + anchorHeight + 'px';
      elem.style.left = leftAbsolute + 'px';
      break;
    case Position.BottomIn:
      elem.style.top = topAbsolute + anchorHeight - elemHeight + 'px';
      elem.style.left = leftAbsolute + 'px';
      break;
    default:
      throw new Error('Некорректно указана позиция');
  }
};

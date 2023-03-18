/* Мышь, управляемая клавиатурой */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/eYLjgjo

// JS код из решения:

const OFFSET_VALUE = 10;

const Position = {
  Top: 'top',
  Left: 'left',
};

const ArrowKey = {
  Up: 'ArrowUp',
  Down: 'ArrowDown',
  Left: 'ArrowLeft',
  Right: 'ArrowRight'
};

const getCurrentPosition = (element, position) => {
  const value = getComputedStyle(element)[position];
  return parseInt(value);
};

const setMove = (element) => {
  element.tabIndex = 0;
  element.style.position = 'relative';

  const onArrowKeydown = (evt) => {
    let offsetPosition;
    let sign = 1;

    switch (evt.key) {
      case ArrowKey.Up:
        offsetPosition = Position.Top;
        sign = -1;
        break;
      case ArrowKey.Down:
        offsetPosition = Position.Top;
        break;
      case ArrowKey.Left:
        offsetPosition = Position.Left;
        sign = -1;
        break;
      case ArrowKey.Right:
        offsetPosition = Position.Left;
        break;
      default:
        return;
    }

    element.style[offsetPosition] =
      getCurrentPosition(element, offsetPosition) + sign * OFFSET_VALUE + 'px';
  };

  const onBlur = () => {
    document.removeEventListener('keydown', onArrowKeydown);
  };

  const onFocus = () => {
    document.addEventListener('keydown', onArrowKeydown);
    element.addEventListener('blur', onBlur, { once: true });
  };

  element.addEventListener('focus', onFocus);
};

const mouse = document.getElementById('mouse');
setMove(mouse);

/* Добавить кнопку закрытия */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/eYLKJxR

// JS код из решения:

const panes = document.querySelectorAll('.pane');
const removeButton = document.getElementById('remove-template')
  .content
  .firstElementChild;

for (let pane of panes) {
  pane.append(removeButton.cloneNode(true));
}

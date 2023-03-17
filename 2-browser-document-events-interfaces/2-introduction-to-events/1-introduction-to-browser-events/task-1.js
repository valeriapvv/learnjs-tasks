/* Скрыть элемент по нажатию кнопки */
'use strict';

//  Песочница: https://plnkr.co/edit/U0HPUVFPnzFEcmxD?p=preview&preview

const hideButton = document.getElementById('hider');
const textElement = document.getElementById('text');

hideButton.addEventListener('click', () => {
  textElement.style.display = 'none';
});

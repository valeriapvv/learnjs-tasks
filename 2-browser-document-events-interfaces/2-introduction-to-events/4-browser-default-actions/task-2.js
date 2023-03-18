/* Поймайте переход по ссылке */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/ZEMjWZo

// JS код из решения:

const contents = document.getElementById('contents');
const LINK_SELECTOR = 'a[href]:not([href^="#"])';

const confirmEscape = () => confirm('Хотите перейти по этой ссылке?');

contents.addEventListener('click', (evt) => {
  const link = evt.target.closest(LINK_SELECTOR);
  
  if (link && !confirmEscape()) {
    evt.preventDefault();
  }
});

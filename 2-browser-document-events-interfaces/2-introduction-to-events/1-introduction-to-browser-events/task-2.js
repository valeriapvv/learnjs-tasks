/* Спрятать себя */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/YzOLmpL?editors=1010

/*
 *  <button id="self-hider" type="button">Нажми, чтобы спрятать</button>
 */

const selfHider = document.getElementById('self-hider');

selfHider.addEventListener('click', function() {
  this.style.display = 'none';
});
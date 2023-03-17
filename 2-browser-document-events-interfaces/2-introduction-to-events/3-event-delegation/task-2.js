/* Раскрывающееся дерево */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/rNZKdeP

// JS код из решения

const tree = document.getElementById('tree');

tree.addEventListener('click', (evt) => {
  const title = evt.target.closest('span');
  
  if (!title) return;
  
  const item = title.parentElement;
  item.classList.toggle('opened');
});

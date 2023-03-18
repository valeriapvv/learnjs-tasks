/* Галерея изображений */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/jOvprOa

// JS код из решения

const thumbsContainer = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

thumbs.addEventListener('click', (evt) => {
  const imageLink = evt.target.closest('a[href]');

  if (!imageLink) return;

  evt.preventDefault();

  const href = imageLink.getAttribute('href');
  largeImage.src = href;
});

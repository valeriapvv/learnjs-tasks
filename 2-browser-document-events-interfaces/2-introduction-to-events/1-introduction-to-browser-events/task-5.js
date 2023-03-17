/* Создать раскрывающееся меню */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/eYLKNXP

/*
 *  <div class="menu">
 *    <button class="menu__toggle" type="button">Сладости (нажми меня)!</button>
 *    <ul class="menu__list">
 *      <li>Пирожное</li>
 *      <li>Пончик</li>
 *      <li>Мёд</li>
 *    </ul>
 *  </div> 
 */

const menu = document.querySelector('.menu');
const toggleButton = menu.querySelector('.menu__toggle');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('menu--opened');
});

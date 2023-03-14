/* Дочерние элементы в DOM */
'use strict';

/*
 *  <html>
 *  <body>
 *    <div>Пользователи:</div>
 *    <ul>
 *      <li>Джон</li>
 *      <li>Пит</li>
 *    </ul>
 *  </body>
 *  </html>
 */

//// Получим элементы

// 1. <div>
const div = document.body.firstElementChild;

// 2. <ul>
const ul = div.nextElementSibling;

// 3. Второй <li>
const secondLi = ul.children[1];

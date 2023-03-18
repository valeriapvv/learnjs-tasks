/* Добавьте пункт к выпадающему списку */
'use strict';

/*
 *  <select id="genres">
 *    <option value="rock">Рок</option>
 *    <option value="blues" selected>Блюз</option>
 *  </select>
 */

const genres = document.getElementById('genres');

// 1.
const selectedOption = genres.options[genres.selectedIndex];
console.log('значение: ', selectedOption.value);
console.log('текст: ', selectedOption.text);

// 2.
const newOption = new Option('Классика', 'classic');
genres.append(newOption);

// 3.
newOption.selected = true;
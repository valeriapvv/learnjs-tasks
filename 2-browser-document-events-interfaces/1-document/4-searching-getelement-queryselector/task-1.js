/* Поиск элементов */
'use strict';

// Документ с таблицей и формой: https://learn.javascript.ru/task/find-elements/table.html

// 1. Таблица с id="age-table"
const ageTable = document.getElementById('age-table');

// 2. Все элементы label внутри этой таблицы.
const labels = ageTable.getElementsByTagName('lable');

// 3. Первый td в этой таблице (со словом «Age»).
const firstTd = ageTable.querySelector('td');

// 4. Форму form с именем name="search".
const searchForm = document.forms.search;

// 5. Первый input в этой форме.
const inputs = searchForm.getElementsByTagName('input');
const firstInput = inputs[0];

// 6. Последний input в этой форме.
const lastInput = inputs[inputs.length - 1];

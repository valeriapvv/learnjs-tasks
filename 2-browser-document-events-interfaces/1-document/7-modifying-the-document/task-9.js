/* Вставьте HTML в список */
'use strict';

const itemOne = document.getElementById('one');
const htmlString = '<li>2</li><li>3</li>';

itemOne.insertAdjacentHTML('afterend', htmlString);

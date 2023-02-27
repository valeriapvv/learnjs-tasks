/* Операции с массивами */
'use strict';

// 1.
const styles = ['Джаз', 'Блюз'];

// 2.
styles.push('Рок-н-ролл');

// 3.
const medianIndex = Math.floor((styles.length - 1) / 2);
styles[medianIndex] = 'Классика';

// 4.
console.log(styles.shift());

// 5.
styles.unshift('Рэп', 'Регги');

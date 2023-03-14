/* Переведите текст вида border-left-width в borderLeftWidth */
'use strict';

const camelize = (str) => {
  const words = str.split('-');

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    words[i] = word[0].toUpperCase() + word.slice(1);
  }

  return words.join('');
};

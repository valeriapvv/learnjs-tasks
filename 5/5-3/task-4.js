/* Выделить число */
'use strict';

const extractCurrentValue = (str) => {
  const match = str.match(/^\$\d+/);

  return match && +match[0].slice(1);
};

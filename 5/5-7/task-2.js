/* Отфильтруйте анаграммы */
'use strict';

const aclean = (arr) => {
  const clearArr = []
  const wordsSet = new Set();

  arr.forEach(word => {
    const ascendingWord = word.toLowerCase().split('').sort().join('');

    if (!wordsSet.has(ascendingWord)) {
      clearArr.push(word);
      wordsSet.add(ascendingWord);
    }
  });

  return clearArr;
};

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

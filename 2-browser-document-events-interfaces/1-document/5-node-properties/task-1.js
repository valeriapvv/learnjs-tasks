/* Считаем потомков */
'use strict';

for (let li of document.querySelectorAll('li')) {
  const text = li.firstChild.data.trim();
  const descendantsCount = li.querySelectorAll('li').length;

  alert(`text: ${text}; descendants: ${descendantsCount}`);
}

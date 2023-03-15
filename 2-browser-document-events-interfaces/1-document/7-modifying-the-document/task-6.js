/* Выведите список потомков в дереве */
'use strict';

// Песочница: https://plnkr.co/edit/ctsHkCNZvPWyTwCT?p=preview

const setInnerItemsCount = (tree) => {
  for (let item of tree.querySelectorAll('li')) {
    const innerItemsCount = item.querySelectorAll('li').length;

    if (innerItemsCount) {
      item.firstChild.data += ` [${innerItemsCount}]`;
    }
  }
}

const list = document.querySelector('ul');
setInnerItemsCount(list);

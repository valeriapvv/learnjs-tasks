/* Создайте список */
'use strict';

const createList = () => {
  const listElement = document.createElement('ul');

  while(true) {
    const itemText = prompt('Введите содержимое <li>', '');
    
    if (!itemText) break;

    const item = document.createElement('li');
    item.textContent = itemText;
    listElement.append(item);
  }

  return listElement;
};

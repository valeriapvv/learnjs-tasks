/* Создайте дерево из объекта */
'use strict';

// Песочница: https://plnkr.co/edit/wRRUON5bJbKj4oGE?p=preview

const createTree = (data = {}) => {
  const dataEntries = Object.entries(data);

  if (!dataEntries.length) return null;

  const listElement = document.createElement('ul');

  for (let [itemText, innerData = {}] of dataEntries) {
    const item = document.createElement('li');

    item.append(itemText, createTree(innerData) || '');

    listElement.append(item);
  }

  return listElement;
};

const data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const container = document.getElementById('tree');
const tree = createTree(data);
container.append(tree);

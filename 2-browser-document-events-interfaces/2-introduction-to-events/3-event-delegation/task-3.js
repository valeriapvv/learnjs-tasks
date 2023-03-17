/* Сортируемая таблица */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/eYLKrJp

// JS код из решения:

const table = document.getElementById('grid');
const tableBody = table.querySelector('tbody');

const DataType = {
  Number: 'number',
  String: 'string',
};

table.addEventListener('click', (evt) => {
  const heading = evt.target.closest('th');
  
  if (!heading) return;
  
  const cellIndex = heading.cellIndex;
  const dataType = heading.dataset.type;
  const rowsList = Array.from(tableBody.rows);

  switch (dataType) {
    case DataType.Number:
      rowsList.sort((rowA, rowB) => {
        const valueA = rowA.cells[cellIndex].textContent;
        const valueB = rowB.cells[cellIndex].textContent;
        return parseInt(valueA) - parseInt(valueB);
      });
      break;
    case DataType.String: 
      rowsList.sort((rowA, rowB) => {
        const valueA = rowA.cells[cellIndex].textContent;
        const valueB = rowB.cells[cellIndex].textContent;
        return valueA > valueB ? 1 : -1
      });
      break;
    default:
      return;
  }
  
  tableBody.textContent = '';
  tableBody.append(...rowsList);
});

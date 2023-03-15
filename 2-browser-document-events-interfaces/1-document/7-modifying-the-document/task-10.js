/* Сортировка таблицы */
'use strict';

const sortByFirstColumn = (table) => {
  const rowsList = Array.from(table.rows).slice(1);

  rowsList.sort((row1, row2) => {
    const td1 = row1.children[0].textContent;
    const td2 = row2.children[0].textContent;

    return td1 > td2 ? 1 : -1;
  });

  table.tBodies[0].append(...rowsList);
};

sortByFirstColumn(
  document.getElementById('table')
);

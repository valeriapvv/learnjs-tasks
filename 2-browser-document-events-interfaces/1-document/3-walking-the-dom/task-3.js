/* Выделите ячейки по диагонали */
'use strict';

/* Таблица 5x5:
 *
 *  <html>
 *  <body>
 *    <table>
 *      <tr>
 *        <td>1:1</td>
 *        ...
 *        <td>5:1</td>
 *      </tr>
 *      ...
 *      <tr>
 *        <td>1:5</td>
 *        ...
 *        <td>5:5</td>
 *      </tr>
 *  </body>
 *  </html>
 */

// Выделим все диагональные <td>

const tableRows = document.body.firstElementChild.rows;

for (let i = 0; i < tableRows.length; i++) {
  tableRows[i]
    .cells[i]
    .style
    .backgroundColor = 'red';
}

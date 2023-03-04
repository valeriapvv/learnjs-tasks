/* Армия функций */
'use strict';

function makeArmy() {
  const shooters = [];

  let i = 0;
  while (i < 10) {
    const shooter = createOrderedShooter(i);
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

function createOrderedShooter(order) {
  return function() {
    alert(order);
  }
}

const army = makeArmy();

army[0]();
army[5]();
army.at(-1)();

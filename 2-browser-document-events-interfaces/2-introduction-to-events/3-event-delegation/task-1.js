/* Спрячьте сообщения с помощью делегирования */
'use strict';

// Песочница: https://plnkr.co/edit/7n3obk1PsA8VrNOs?p=preview&preview

const container = document.getElementById('container');

container.addEventListener('click', (evt) => {
  const closeButton = evt.target.closest('.remove-button');

  if (closeButton) {
    closeButton.parentElement.remove();
  }
});

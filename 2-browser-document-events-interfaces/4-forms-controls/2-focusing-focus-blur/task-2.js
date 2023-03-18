/* Редактирование TD по клику */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/gOdjLBp

// JS код из решения:

const table = document.getElementById('bagua-table');

const createEditControls = (textarea, editingElement) => {
  const initialHtml = editingElement.innerHTML;

  // Controls
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');

  const saveBtn = btn.cloneNode(true);
  saveBtn.textContent = 'OK';

  const cancelBtn = btn.cloneNode(true);
  cancelBtn.textContent = 'CANCEL';

  // Controls wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('controls');
  wrapper.append(saveBtn, cancelBtn);

  wrapper.addEventListener('click', (evt) => {
    const controlBtn = evt.target.closest('button');

    if (!controlBtn) return;

    editingElement.innerHTML = controlBtn === saveBtn
      ? textarea.value
      : initialHtml;

    table.addEventListener('click', onEdit);
  });

  return wrapper;
};

const setEdit = (element) => {
  // Create textarea
  const textarea = document.createElement('textarea');
  textarea.value = element.innerHTML;

  // Create controls
  const controlsElement = createEditControls(textarea, element);

  // Insert textarea & controls
  element.innerHTML = '';
  element.append(textarea, controlsElement);
  textarea.focus();
};

function onEdit(evt) {
  const cell = evt.target.closest('td');
  if (!cell) return;

  setEdit(cell);
  this.removeEventListener('click', onEdit);
}

table.addEventListener('click', onEdit);

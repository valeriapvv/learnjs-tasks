/* Редактируемый div */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/yLxqaxY

// JS код из решения:

const editableElement = document.getElementById('view');

const replaceByTextarea = (element) => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('edit');
  textarea.setAttribute('id', 'edit');
  textarea.value = element.textContent;
  
  textarea.addEventListener('blur', function() {
    element.textContent = this.value;
    this.replaceWith(element);
  }, {once: true});
  
  element.replaceWith(textarea);
  textarea.focus();
};

function onEdit() {
  replaceByTextarea(this);
}

editableElement.addEventListener('click', onEdit);
editableElement.addEventListener('focus', onEdit);

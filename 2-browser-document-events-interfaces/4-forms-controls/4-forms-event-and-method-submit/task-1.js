/* Модальное диалоговое окно с формой */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/NWLBLXJ

// JS код из решения:

const showButton = document.getElementById('show-button');
const modal = document.getElementById('prompt');
const form = document.getElementById('prompt-form');
const promptMessage = document.getElementById('prompt-message');

const ElementName = {
  Text: 'text',
  Submit: 'submit',
  Cancel: 'cancel'
};

form.addEventListener('submit', (evt) => evt.preventDefault());

showButton.addEventListener('click', () => {
  showPrompt('Ваш комментрий<br>по этому поводу:', alert);
});

function showPrompt(html, callback) {
  modal.hidden = false;
  document.body.style.overflowY = 'hidden';

  promptMessage.innerHTML = html;

  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onTabKeydown);

  function onModalClick(evt) {
    switch (evt.target.name) {
      case ElementName.Submit:
        const value = form[ElementName.Text].value;
        hide(value);
        break;
      case ElementName.Cancel:
        hide(null);
        break;
    }
  }

  function onTabKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hide(null);
      return;
    }
    
    if (evt.key !== 'Tab') return;

    const element = evt.target;
    const toForward = !evt.shiftKey;

    const firstElement = form[ElementName.Text];
    const lastElement = form[ElementName.Cancel];

    if (element === firstElement && !toForward) {
      lastElement.focus();
      evt.preventDefault();
      return;
    }

    if (element === lastElement && toForward) {
      firstElement.focus();
      evt.preventDefault();
    }
  }

  function hide(value) {
    modal.hidden = true;
    modal.removeEventListener('click', onModalClick);
    document.removeEventListener('keydown', onTabKeydown);
    
    form.reset();
    
    document.body.style.overflowY = '';
    
    callback(value);
  }
};

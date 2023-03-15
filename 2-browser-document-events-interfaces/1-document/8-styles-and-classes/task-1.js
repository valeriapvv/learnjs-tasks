/* Создать уведомление */
'use strict';

const TIMEOUT_DELAY = 1500;

const showNotification = ({
  top,
  right,
  html,
  className,
}) => {
  const element = document.createElement('div');
  element.className = 'notification';
  
  if (className) {
    element.classList.add(className);
  }
  
  element.className = className;
  element.innerHTML = html;
  element.style.position = 'fixed';
  element.style.top = top + 'px';
  element.style.right = right + 'px';

  document.body.append(element);

  setTimeout(() => element.remove(), TIMEOUT_DELAY);
};


showNotification({
  top: 10,
  right: 10,
  html: "Hello!",
  className: "welcome",
});

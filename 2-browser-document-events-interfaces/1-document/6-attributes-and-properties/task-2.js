/* Сделайте внешние ссылки оранжевыми */
'use strict';

const links = document.querySelectorAll(
  'a[href*="://"]:not([href^="http://internal.com"])'
);

for (let link of links) {
  link.style.color = 'orange';
}

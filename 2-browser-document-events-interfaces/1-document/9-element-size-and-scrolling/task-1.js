/* Найти размер прокрутки снизу */
'use strict';

const getScrollBottom = (elem) => elem.scrollHeight - elem.scrollTop - elem.clientHeight;

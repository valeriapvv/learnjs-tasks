/* Перепишите 'if..else' в '?' */
'use strict';

const login = '';

const message = 
  login == 'Сотрудник' ? 'Привет' :
  login == 'Директор' ?  'Здравствуйте' :
  login == '' ? 'Нет логина' : 
  '';
  
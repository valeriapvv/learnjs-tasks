/* Проверка на спам */
'use strict';

const checkSpam = (str) => {
  const lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.include('viagra') || lowerCaseStr.include('xxx');
};

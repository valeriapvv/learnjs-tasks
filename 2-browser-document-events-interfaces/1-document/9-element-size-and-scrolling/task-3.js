/* Поместите мяч в центр поля */
'use strict';

// Песочница: https://plnkr.co/edit/udpQnFGCJWs8XXgI?p=preview&preview

const field = document.getElementById('field');
const ball = document.getElementById('ball');

const FieldCenter = {
  X: field.clientWidth / 2,
  Y: field.clientHeight / 2,
};

const BallOffset = {
  X: ball.clientWidth / 2,
  Y: ball.clientHeight / 2,
};

ball.style.left = FieldCenter.X - BallOffset.X + 'px';
ball.style.top = FieldCenter.Y - BallOffset.Y + 'px';

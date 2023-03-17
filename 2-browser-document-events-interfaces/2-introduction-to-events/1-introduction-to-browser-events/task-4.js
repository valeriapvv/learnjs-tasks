/* Передвиньте мяч по полю */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/abaKzbB?editors=1010

const field = document.getElementById('field');
const ball = document.getElementById('ball');

const BallCenter = {
  X: ball.offsetWidth / 2,
  Y: ball.offsetHeight / 2,
};

const Position = {
  XMin: BallCenter.X,
  XMax: field.clientWidth - BallCenter.X,
  YMin: BallCenter.Y,
  YMax: field.clientHeight - BallCenter.Y,
};

const moveBall = function (evt) {
  const {top, left} = this.getBoundingClientRect();

  const clickX = evt.clientX - left - this.clientLeft;
  const clickY = evt.clientY - top - this.clientTop;

  const Coord = {
    X: Math.max(Position.XMin, Math.min(clickX, Position.XMax)),
    Y: Math.max(Position.YMin, Math.min(clickY, Position.YMax)),
  };

  ball.style.left = Coord.X - BallCenter.X + 'px';
  ball.style.top = Coord.Y - BallCenter.Y + 'px';
};

field.addEventListener('click', moveBall);

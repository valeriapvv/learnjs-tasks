/* Карусель */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/JjaZMwp

// JS код из решения: 

const slides = Array.from(document.querySelector('.slider__list').children);
const buttonLeft = document.querySelector('.slider__control--left');
const buttonRight = document.querySelector('.slider__control--right');

const SLIDE_WIDTH = 130;
const VISIBLE_SLIDES_COUNT = 3;
const Direction = {
  Left: 'left',
  Right: 'right',
};

const slidesCount = slides.length;
const lastMinOffset = SLIDE_WIDTH * (VISIBLE_SLIDES_COUNT - 1);
const controlsBlockTime = 800;

const getOffset = (slide) => parseInt(getComputedStyle(slide).left);

const setControlsAvailability = () => {
  const check = () => {
    const firstSlideOffset = getOffset(slides[0]);
    const lastSlideOffset = getOffset(slides.at(-1));
    
    buttonLeft.disabled = false;
    buttonRight.disabled = false;
    
    buttonLeft.classList.toggle('control-blocked', firstSlideOffset >= 0);
    buttonRight.classList.toggle('control-blocked', lastSlideOffset <= lastMinOffset);
  }
  
  buttonLeft.disabled = true;
  buttonRight.disabled = true;
  
  setTimeout(check, controlsBlockTime)
};

const moveSlides = (direction = Direction.Right) => {
  const offset = direction === Direction.Right ? -SLIDE_WIDTH : SLIDE_WIDTH;
  
  for (let slide of slides) {
    const currentSlideOffset = getOffset(slide);
    slide.style.left = currentSlideOffset + offset + 'px';
  }
};

const initSlider = () => {
  slides.forEach((slide, index) => {
    slide.style.position = 'absolute';
    slide.style.left = index * SLIDE_WIDTH + 'px';
  });
  
  setControlsAvailability();
  
  buttonRight.addEventListener('click', () => {
    moveSlides(Direction.Right);
    setControlsAvailability();
  });

  buttonLeft.addEventListener('click', () => {
    moveSlides(Direction.Left);
    setControlsAvailability();
  });
};

initSlider();

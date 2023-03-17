/* Поведение "подсказка" */
'use strict';

// Решение: https://codepen.io/valeriapvv/pen/Podaerr

// JS код из решения:

const tooltip = document.getElementById('tooltip');

const hideTooltip = () => {
  tooltip.textContent = '';
  tooltip.hidden = true;
  tooltip.style.left = '';
  tooltip.style.top = '';
};

document.addEventListener('mouseover', (evt) => {
  const target = evt.target.closest('[data-tooltip]');

  if (!target && !tooltip.hidden) {
    hideTooltip();
    return;
  };

  if (!target) return;

  tooltip.textContent = target.dataset.tooltip;
  tooltip.hidden = false;
  const {
    left,
    top,
    bottom,
    width,
  } = target.getBoundingClientRect();

  const tooltipLeftOffset = (width - tooltip.offsetWidth) / 2
  const leftPosition = Math.max(0, left + tooltipLeftOffset);

  const tooltipTopOffset = tooltip.offsetHeight + 5;
  const topPosition = top > tooltipTopOffset
    ? top - tooltipTopOffset
    : bottom + 5;

  tooltip.style.left = leftPosition + 'px';
  tooltip.style.top = topPosition + 'px';
});

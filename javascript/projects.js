/*document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const expandButton = document.querySelector('.expand-button');
  const uiCard = document.querySelector('.ui-project-card');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  leftArrow.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  rightArrow.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  expandButton.addEventListener('click', () => {
    uiCard.classList.toggle('expanded');
    expandButton.textContent = uiCard.classList.contains('expanded') ? 'X' : 'Expand';
  });
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const expandButton = document.querySelector('.expand-button');
  const uiCard = document.querySelector('.ui-project-card');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  leftArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing accidentally
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  rightArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  expandButton.addEventListener('click', (e) => {
    e.stopPropagation();
    uiCard.classList.toggle('expanded');
    expandButton.textContent = uiCard.classList.contains('expanded') ? '×' : 'Expand';
  });
});

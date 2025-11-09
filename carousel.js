document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-carousel .slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.querySelector('.carousel-controls .prev');
  const nextBtn = document.querySelector('.carousel-controls .next');
  let current = 0;
  const total = slides.length;
  const intervalTime = 6000;
  let slideInterval;

  function goToSlide(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + total) % total;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() { goToSlide(current + 1); }
  function prevSlide() { goToSlide(current - 1); }

  nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
  prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      goToSlide(idx);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  slideInterval = setInterval(nextSlide, intervalTime);
});

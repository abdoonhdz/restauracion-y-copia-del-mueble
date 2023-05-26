const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let interval;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

function startCarousel() {
  interval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
  clearInterval(interval);
}

showSlide();
startCarousel();

document.getElementById('prevBtn').addEventListener('click', () => {
  prevSlide();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  nextSlide();
});

document.querySelector('.carousel').addEventListener('mouseover', () => {
  stopCarousel();
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
  startCarousel();
});

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

// -------------------can do slider--------------------------
const sliderContainer = document.querySelector(".slider-container");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const sliderItems = document.querySelectorAll(".slider-item");
let currentIndex = 0;

function updateSliderPosition() {
  const itemWidth = sliderItems[0].offsetWidth;
  const newPosition = -currentIndex * itemWidth;
  sliderContainer.style.transform = `translateX(${newPosition}px)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSliderPosition();
});

nextButton.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, sliderItems.length - 3);
  updateSliderPosition();
});

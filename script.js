const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
// ---------------------what can i do ------------------
{
  /* <script> */
}
const sliderContainer1 = document.querySelector(".slider-container1");
const prevButton1 = document.querySelector(".slider-prev1");
const nextButton1 = document.querySelector(".slider-next1");
const sliderItems1 = document.querySelectorAll(".slider-item1");
let currentIndex1 = 0;

function updateSliderPosition1() {
  const itemWidth1 = sliderItems1[0].offsetWidth;
  const newPosition1 = -currentIndex1 * itemWidth1;
  sliderContainer1.style.transform = `translateX(${newPosition1}px)`;
}

prevButton1.addEventListener("click", () => {
  currentIndex1 = Math.max(currentIndex1 - 1, 0);
  updateSliderPosition1();
});

nextButton1.addEventListener("click", () => {
  currentIndex1 = Math.min(currentIndex1 + 1, sliderItems1.length - 1);
  updateSliderPosition1();
});
// </script>

// -------------------category slider--------------------------
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
  currentIndex = Math.min(currentIndex + 1, sliderItems.length - 1);
  updateSliderPosition();
});

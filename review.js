document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".slider-dots");

    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("slider-dot");
        if (index === 0) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
            setActiveSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    let activeIndex = 0;

    function setActiveSlide(index) {
        slides[activeIndex].classList.remove("active");
        slides[index].classList.add("active");
        activeIndex = index;
        updateDots();
        updateSliderPosition();
    }

    function updateDots() {
        const dots = document.querySelectorAll(".slider-dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === activeIndex);
        });
    }

    function updateSliderPosition() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
    }

    let startX = 0;
    let isDragging = false;
    let shiftX = 0;

    track.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - track.offsetLeft;
        shiftX = 0;
    });

    track.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const x = e.pageX - track.offsetLeft;
        shiftX = x - startX;
    });

    track.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        if (shiftX < -50 && activeIndex < slides.length - 1) {
            setActiveSlide(activeIndex + 1);
        } else if (shiftX > 50 && activeIndex > 0) {
            setActiveSlide(activeIndex - 1);
        } else {
            setActiveSlide(activeIndex);
        }
    });

    track.addEventListener("mouseleave", () => {
        if (!isDragging) return;
        isDragging = false;
        setActiveSlide(activeIndex);
    });

    window.addEventListener("resize", () => {
        updateSliderPosition();
    });

    updateSliderPosition();
});

document.addEventListener("DOMContentLoaded", function () {
    // Slides Projects
    function showNextSlide(className, totalClassName) {
        let currentIndex = 0;
        setInterval(() => {
            const slides = document.querySelector(`.${className}`);
            const totalSlides = document.querySelectorAll(`.${totalClassName}`).length;
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 6000);
    }

    showNextSlide("slides", "slide");
    showNextSlide("slides2", "slide2");
    showNextSlide("slides3", "slide3");

    // Progress Bar
    function animateProgress(barId, finalValue) {
        let bar = document.getElementById(barId);
        let value = 0;
        let interval = setInterval(() => {
            if (value >= finalValue) {
                clearInterval(interval);
            } else {
                value++;
                bar.style.width = value + "%";
            }
        }, 20);
    }

    animateProgress("html", 80);
    animateProgress("js", 70);
    animateProgress("git", 75);
    animateProgress("react", 65);
    animateProgress("tailwind", 60);
    animateProgress("python", 60);
    animateProgress("azure", 50);
});
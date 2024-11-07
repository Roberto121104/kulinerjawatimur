function changeSlide(n) {
    var slides = document.getElementsByClassName("slide");
    var currentSlide = document.querySelector(".slide.active");
    var nextSlideIndex = Array.prototype.indexOf.call(slides, currentSlide) + n;

    if (nextSlideIndex >= slides.length) {
        nextSlideIndex = 0;
    } else if (nextSlideIndex < 0) {
        nextSlideIndex = slides.length - 1;
    }

    currentSlide.classList.remove("active");
    slides[nextSlideIndex].classList.add("active");
}

let currentSlideIndex = 0;
handleSlideDisplay(currentSlideIndex);
addEventListeners();

function handleNextSlide(n) {
    console.log("Going to next slide");
    currentSlideIndex += n;
    handleSlideDisplay(currentSlideIndex);
}

function handleSlideDisplay(n) {
    let slides = document.getElementsByClassName("slide");
    let navBtns = document.getElementsByClassName("nav-btn");

    if (n > slides.length - 1) { currentSlideIndex = 0 };
    if (n < 0) { currentSlideIndex = slides.length - 1 }

    for (let slide of slides) {
        slide.style.display = "none";
    };

    for (let navBtn of navBtns) {
        navBtn.className = navBtn.className.replace(" active", "")
    };

    slides[currentSlideIndex].style.display = "flex";
    navBtns[currentSlideIndex].className += " active";
}

function addEventListeners() {
    let navBtns = document.querySelectorAll(".nav-btn")
    for (let i in navBtns) {
        navBtns[i].addEventListener("click", () => {
            currentSlideIndex = i;
            handleSlideDisplay(currentSlideIndex);
        })
    }
}
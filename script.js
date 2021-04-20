let currentSlideIndex = 0;
handleSlideDisplay(currentSlideIndex);


function handleNextSlide(n) {
    currentSlideIndex += n;
    handleSlideDisplay();
}

function handleSlideDisplay(n) {
    let slides = document.getElementsByClassName("slide");
    let navBtns = document.getElementsByClassName("nav-btn");

    if (typeof n == 'number') {
        currentSlideIndex = n;
    }

    if (currentSlideIndex > slides.length - 1) { currentSlideIndex = 0 };
    if (currentSlideIndex < 0) { currentSlideIndex = slides.length - 1 };

    for (let slide of slides) {
        slide.style.display = "none";
    };

    for (let navBtn of navBtns) {
        navBtn.className = navBtn.className.replace(" active", "")
    };

    slides[currentSlideIndex].style.display = "flex";
    navBtns[currentSlideIndex].className += " active";
}

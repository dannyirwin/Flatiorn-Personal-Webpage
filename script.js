let currentSlideIndex = 0;
handleSlideDisplay(currentSlideIndex);


function handleNextSlide(n) {
    console.log("Going to next slide");
    console.log(currentSlideIndex)
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

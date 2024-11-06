let slideIndex = 1;
showSlides(slideIndex);

// Function to move slides forward or backward
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide img');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove active class from all dots
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const slides = document.querySelectorAll("#carousel img");
const thumbnails = document.querySelectorAll("#thumbs img");

let index = 0;
let autoSlide;

// Show slide function
function showSlide(i) {
    slides.forEach((img, n) => img.classList.toggle("active", n === i));
    thumbnails.forEach((thumb, n) =>
        thumb.classList.toggle("active-thumb", n === i)
    );
    index = i;
}

// Next slide
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
    resetAutoSlide();
}

// Previous slide
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    resetAutoSlide();
}

// Go to specific slide
function goToSlide(i) {
    showSlide(i);
    resetAutoSlide();
}

// Auto slide every 3 seconds
function startAutoSlide() {
    autoSlide = setInterval(() => {
        nextSlide();
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

startAutoSlide();
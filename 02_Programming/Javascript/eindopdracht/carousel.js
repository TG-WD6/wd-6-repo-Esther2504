let carouselSlider = document.querySelector(".carousel-slider")
let carouselImages = document.querySelectorAll(".carousel-slider img")

let counter = 1;

carouselSlider.style.transform = 'translateX(' + (-400 * counter) + 'px)';

function slideLeft() {
    if (counter <= 0) return;
    carouselSlider.style.transition = "transform 0.3s linear";
    counter--;
    carouselSlider.style.transform = 'translateX(' + (-400 * counter) + 'px)';
}

function slideRight() {
    if (counter >= 4) return;
    carouselSlider.style.transition = "transform 0.3s linear";
    counter++;
    console.log(counter);
    carouselSlider.style.transform = 'translateX(' + (-400 * counter) + 'px)';
}

carouselSlider.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'first-image') {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-400 * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'last-image') {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = 'translateX(' + (-400 * counter) + 'px)';
    }
}) 
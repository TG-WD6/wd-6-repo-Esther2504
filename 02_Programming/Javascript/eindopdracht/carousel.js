let carouselSlide = document.querySelector(".carousel-slide")
let carouselImages = document.querySelectorAll(".carousel-slide img")

let counter = 1;

carouselSlide.style.transform = 'translateX(' + (-400 * counter) + 'px)';

function slideRight() {
    if (counter >= 4) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-400 * counter) + 'px)';
}

function slideLeft() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-400 * counter) + 'px)';
}

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-400 * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-400 * counter) + 'px)';
    }
}) 
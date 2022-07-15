let carouselSlider = document.querySelector(".carousel__slider")
let carouselImages = document.querySelectorAll(".carousel__slider img")

// Begint bij de eerste image
let counter = 1;

carouselSlider.style.transform = 'translateX(' + (-25 * counter) + 'rem)';

function slideLeft() {
    if (counter <= 0) {
        return
    };
    carouselSlider.style.transition = "transform 0.3s linear";
    // Bij het klikken gaat de counter naar beneden en daarmee naar de image ervoor
    counter--;
    // De image verplaatst de lengte van image
    carouselSlider.style.transform = 'translateX(' + (-25 * counter) + 'rem)';
}

function slideRight() {
    if (counter >= 4) {
        return
    };
    carouselSlider.style.transition = "transform 0.3s linear";
    counter++;
    carouselSlider.style.transform = 'translateX(' + (-25 * counter) + 'rem)';
}

// De transitionend event vindt plaats wanneer een transitie klaar is
// Als de counter bij de eerste of laatste image is, slaat de counter de duplicates over
carouselSlider.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'carousel__firstimage') {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-25 * counter) + 'rem)';
    }

    if (carouselImages[counter].id === 'carousel__lastimage') {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = 'translateX(' + (-25 * counter) + 'rem)';
    }
}) 
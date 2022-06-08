const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const navItem = document.querySelector(".nav-item-transition");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // navItem.classList.toggle("active");
})
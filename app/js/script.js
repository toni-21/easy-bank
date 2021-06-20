const hamburgerButton = document.querySelector('#hamburgerButton');
const header = document.querySelector('.header');
const body = document.querySelector("body");
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll(".has-fade");

hamburgerButton.addEventListener('click', function() {
    console.log("click hamburger");

    if (header.classList.contains('open')) {
        header.classList.remove('open'); //close hamburger menu
        body.classList.remove('noScroll');
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });


    } else {
        header.classList.add('open'); //open hamburger menu
        body.classList.add('noScroll');
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
})
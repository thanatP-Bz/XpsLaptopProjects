const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
const slideInterval;

//const next slide
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('.current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('.current');
    }
}
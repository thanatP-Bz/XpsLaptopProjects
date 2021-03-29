const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

//next slide
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
    } else {
    slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

//previous slide
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
    } else {
    slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

//button
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setinterval(nextSlide, intervalTime);
    };
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setinterval(nextSlide, intervalTime);
    };
});

//time interval auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
};
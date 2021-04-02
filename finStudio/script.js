const openModal = document.querySelector('.btn-account');
const modalBg = document.querySelector('.modal-bg');
const closeModal = document.querySelector('.close-modal');
const showcase = document.querySelector('.showcase');

const navBar = document.querySelector('.navbar');

///open modal
openModal.addEventListener('click', function () {
   modalBg.classList.add('bg-active');
   console.log(openModal);
});

closeModal.addEventListener('click', function () {
   modalBg.classList.remove('bg-active');
});

///scroll navbar
/* const initialCoords = modalBg.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
   console.log(window.scrollY);

   if (window.scrollY > initialCoords.bottom)
   navBar.classList.add('sticky');
   else {
      navBar.classList.remove('sticky');
   }
}); */

const header = document.getElementById('header');
const navHeight = navBar.getBoundingClientRect().height;

const stickyNav = function (entries) {
   const [entry] = entries;
   console.log(entry);

   if (!entry.isIntersecting)
   navBar.classList.add('sticky');
   else navBar.classList.remove('sticky');
}
const headerObsever = new IntersectionObserver
(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin: `-${navHeight}px`,
});

headerObsever.observe(header);

///slide show images
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 4000;
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
        slideInterval = setInterval(nextSlide, intervalTime);
    };
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    };
});

//time interval auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
};
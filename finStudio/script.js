const openModal = document.querySelector('.btn-1');
const modalBg = document.querySelector('.modal-bg');
const closeModal = document.querySelector('.close-modal');
const showcase = document.querySelector('.showcase');

const navBar = document.querySelector('.navbar');

///open modal
openModal.addEventListener('click', function (e) {
   e.preventDefault();
   modalBg.classList.add('bg-active');
   console.log(openModal);

   navBar.classList.remove('sticky');
});

closeModal.addEventListener('click', function () {
   modalBg.classList.remove('bg-active');
});

//smooth scrolling
document.querySelectorAll('.btn-link').forEach((el) => {
    el.addEventListener('click', () => {
        e.preventDefault();
    })
})


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
const navHeight = header.getBoundingClientRect();
console.log(navHeight);

const stickyNav = function (entries) {
   const [entry] = entries;

   if (!entry.isIntersecting) 
   navBar.classList.add('sticky');
    else navBar.classList.remove('sticky');
}
const headerObsever = new IntersectionObserver
(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin:'-300px',
});

headerObsever.observe(header);


 //reveal scroll section
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries,obsever) {
    const [entry] = entries;
    console.log(entry);
    
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    obsever.unobserve(entry.target);
}

const allSectionObsever = new IntersectionObserver (revealSection, {
    root: null,
    threshold: 0.1,
});

allSection.forEach(section => {
    allSectionObsever.observe(section);
    section.classList.add('section--hidden');
});

///slide show images
//slide image
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
    
    let curSlide = 0;
    const maxSlide = slides.length;
    
    const slider = document.querySelector('.slider');
    slider.style.transform = 'scale(0.8)';
    //function
    
    //0%, 100%, 200%, 300%
    const createDots = function () {
      slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
    
    const activateDot = function(slide) {
      document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    
      document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
    };
    
    ///go to slide
    const goToSlide = function(slide) {
      slides.forEach(
        (s, i) => (s.style.transform  = `translateX(${100 * (i - slide)}%)`)
        );
    };
    
    //nextSlide
    const nextSlide = function() {
    
      if (curSlide === maxSlide -1) {
        curSlide = 0;
      } else {
        curSlide++;
      };
      goToSlide(curSlide);
      activateDot(curSlide);
    };
    
    //previous slide
    const prevSlide = function() {
    if (curSlide === 0)  {
       curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    };
    
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    }
    
    init();
    
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
    //-100%, 0%, 100%, 200%
    
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Arrowleft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
    
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
    };
    slider();
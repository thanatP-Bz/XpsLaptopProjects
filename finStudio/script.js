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
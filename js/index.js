

// init Swiper:
const swiper = new Swiper('.swiper-articles', {
  pagination: {
    el: '.swiper-pagination-articles',
    bulletClass: 'bulka',
    bulletActiveClass:'super-bulka',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-articles',
    prevEl: '.swiper-button-prev-articles',
  },
  slidesPerView: 4.0,
  spaceBetween: 20,
  breakpoints:{
    1195:{
      slidesPerView: 4.0,
    },
    740:{
      slidesPerView: 2.0,
      spaceBetween: 10,
    },
    0:{
      slidesPerView: 1.0,
    }
  },
});
const swiperСourses = new Swiper('.swiper-courses', {
  pagination: {
    el: '.swiper-pagination-courses',
    bulletClass: 'bulka',
    bulletActiveClass:'super-bulka',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-courses',
    prevEl: '.swiper-button-prev-courses',
  },
  slidesPerView: 4.0,
  spaceBetween: 20,
  breakpoints:{
    740:{
      slidesPerView: 2.0,
      spaceBetween: 10,
    },
    0:{
      slidesPerView: 1.0,
    }
  },
});
const swiperProgCool = new Swiper('.swiper-prog-cool', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-prog-cool',
    prevEl: '.swiper-button-prev-prog-cool',
  },
  slidesPerView: 1.0,
  spaceBetween: 20,
});


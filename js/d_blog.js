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
    slidesPerView: 3.0,
    spaceBetween: 20,
    breakpoints:{
      1195:{
        slidesPerView: 3.0,
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
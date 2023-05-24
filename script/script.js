const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  clickable: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',

  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const mySwiper = new Swiper('.welcome-swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: true,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  }
  
});
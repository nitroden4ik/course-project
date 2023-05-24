// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   slidesPerView: 3,
//   spaceBetween: 30,
//   clickable: true,
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
  // navigation: {
  //   prevEl: '.swiper-prev',
  //   nextEl: '.swiper-next',

  // },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


// const mySwiper = new Swiper('.welcome-swiper-container', {
//   direction: 'horizontal',
//   slidesPerView: 1,
//   loop: true,
//   autoplay: true,
//   autoHeight: true,
//   enabled: true,
//   init: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 2
//     }
//   }
  
// });

var swiper1 = new Swiper('.swiper', {
  pagination: {
        el: '.swiper-pagination',
      },
        navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',

  },
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  clickable: true,
  loop: true,
});
var swiper2 = new Swiper('.welcome-swiper', {
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  clickable: true,
  loop: true,
  navigation: {
    prevEl: '.welcome-slide-swiper-prev-btn',
    nextEl: '.welcome-slide-swiper-next-btn',
   
  },
  pagination: {
    el: '.welcome-pagination',
    clickable: true,
  },


});
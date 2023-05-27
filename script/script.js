
const swiper1 = new Swiper('.swiper', {
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
const swiper2 = new Swiper('.welcome-swiper', {
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

const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 30,
  direction: 'horizontal',
  slidesPerView: 1,
  autoplay: true,
});


const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu-list');

dropdownBtn.addEventListener('click', function() {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});

const macos = document.getElementById('macos');
const android = document.getElementById('android');
const pc = document.getElementById('pc');
const ios = document.getElementById('ios');
const windows = document.getElementById('windows');

macos.addEventListener('click', changeImageSrc);
android.addEventListener('click', changeImageSrc);
pc.addEventListener('click', changeImageSrc);
ios.addEventListener('click', changeImageSrc);
windows.addEventListener('click', changeImageSrc);

function changeImageSrc(event) {
  const img = document.querySelector('.req-col-right img');
  let src;

  switch (event.target.id) {
    case 'macos':
      src = 'img/mac-xxl.png';
      break;
    case 'android':
      src = 'img/android-xxl.png';
      break;
    case 'pc':
      src = 'img/chromebook-xxl.png';
      break;
    case 'ios':
      src = 'img/ios-xxl.png';
      break;
    case 'windows':
      src = 'img/windows-xxl.png';
      break;
    default:
      src = 'img/windows-xxl.png';
  }

  img.setAttribute('src', src);
  document.querySelector('.menu-list').style.display = ''; // Show the element
}



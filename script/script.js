
const swiper1 = document.querySelector('.swiper');
const swiper2 = document.querySelector('.welcome-swiper');

if(swiper1 || swiper2){
const swiper1 = new Swiper('.swiper', {
  pagination: {
  el: '.swiper-pagination',
  },
  navigation: {
  prevEl: '.swiper-prev',
  nextEl: '.swiper-next',},
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
})};

document.addEventListener('DOMContentLoaded', function() {
  const guidedropdownBtn = document.getElementById('guide-dropdown-btn');
  const guidedropdownMenu = document.getElementsByClassName('dropdown-content')[0];

  if (guidedropdownBtn) { // check if the element exists
    guidedropdownBtn.addEventListener('click', function() {
      guidedropdownMenu.classList.toggle('show');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const guidedropdownBtn = document.getElementById('guide-dropdown-btn');
  const guidedropdownMenu = document.getElementsByClassName('dropdown-content')[0];

  if (guidedropdownBtn) { // check if the element exists
    guidedropdownBtn.addEventListener('click', function() {
      guidedropdownMenu.innerHTML = `
      <a href="./guide/games.html">Как начать играть?</a>
      <a href="./guide/save.html">Как сэкономить</a>
      <a href="#">Технологии NVIDIA</a>
      `;
    });
  }

  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu-list');

  if (dropdownBtn) { // check if the element exists
    dropdownBtn.addEventListener('mouseup', function() {
      if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    });
  }
});

const burgerBtn = document.getElementsByClassName('btn-burger-icon')[0];
const sidebar = document.getElementsByClassName('sidebar')[0];

if (burgerBtn) {
  burgerBtn.addEventListener('click', function() {
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
      burgerBtn.innerHTML = `<svg class="btn__icon header__toggleIconClose" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7123 16.7729C16.0052 17.0658 16.4801 17.0658 16.7729 16.7729C17.0658 16.48 17.0658 16.0052 16.7729 15.7123L13.0607 12L16.7729 8.2877C17.0658 7.99481 17.0658 7.51993 16.7729 7.22704C16.48 6.93415 16.0052 6.93415 15.7123 7.22704L12 10.9393L8.28766 7.22699C7.99477 6.9341 7.5199 6.9341 7.227 7.22699C6.93411 7.51989 6.93411 7.99476 7.227 8.28765L10.9393 12L7.22699 15.7123C6.9341 16.0052 6.9341 16.4801 7.22699 16.773C7.51989 17.0659 7.99476 17.0659 8.28765 16.773L12 13.0606L15.7123 16.7729Z" fill="#eeeeee"></path>
      </svg>`;
    } else {
      sidebar.style.display = 'none';
  
    }
  });
}






const macos = document.getElementById('macos');
const android = document.getElementById('android');
const pc = document.getElementById('pc');
const ios = document.getElementById('ios');
const windows = document.getElementById('windows');

if (macos) {
  macos.addEventListener('click', changeImageSrc);
}

if (android) {
  android.addEventListener('click', changeImageSrc);
}

if (pc) {
  pc.addEventListener('click', changeImageSrc);
}

if (ios) {
  ios.addEventListener('click', changeImageSrc);
}

if (windows) {
  windows.addEventListener('click', changeImageSrc);
}

function changeImageSrc(event) {
  const img = document.querySelector('.req-col-right img');
  let src;

  // switch pictures

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
  document.querySelector('.menu-list').style.display = '';
}




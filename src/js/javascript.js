/////
document.addEventListener("DOMContentLoaded", () => {

  const textShowMoreBtn = document.querySelector('.expand-btn');
  const textContainer = document.querySelector('.about-us__elem');

  const toggleBrandsShowMore = () => {
    textContainer.classList.toggle('about-us__elem--full');
    textShowMoreBtn.classList.toggle('expand-btn--hide');

    if (textContainer.classList.contains('about-us__elem--full')) {

      textShowMoreBtn.textContent = 'Скрыть';
    } else {
      textShowMoreBtn.textContent = 'Читать далее';
    }
};

  textShowMoreBtn.addEventListener('click', toggleBrandsShowMore);
});
/////
document.addEventListener("DOMContentLoaded", () => {

    const brandsShowMore = document.querySelector('.show-more__btn');
    const brandsContainer = document.querySelector('.brands__details-items');
    const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text--brands');
  
    const toggleBrandsShowMore = () => {
      brandsContainer.classList.toggle('brands__details-items--show-more');
      brandsShowMoreTxt.classList.toggle('show-more__text--hide');
  
      if (brandsContainer.classList.contains('brands__details-items--show-more')) {
  
        brandsShowMoreTxt.textContent = 'Скрыть';
      } else {
        brandsShowMoreTxt.textContent = 'Показать все';
      }
    };
  
    brandsShowMore.addEventListener('click', toggleBrandsShowMore);
  });
////

  document.addEventListener('DOMContentLoaded', () => {
  
    const modalLanguage = document.querySelectorAll('.lang__link');
  
    modalLanguage.forEach(item => {
      item.addEventListener('click', () => {
          modalLanguage.forEach(element => {
          element.classList.remove('lang__link--active');
        });
        item.classList.add('lang__link--active');
      });
    });
  });
  ////
  document.addEventListener('DOMContentLoaded', () => {
    const modalCallOpenBtns = document.querySelectorAll('.action-btn--call');
    const modalCall = document.querySelector('.modal-call');
    const modalCallCloseBtn = document.querySelector('.modal-form__close--call');
    const menu = document.querySelector('.aside-menu');
    const overlay = document.querySelector('.overlay');
  
    const openModalCall = function () {
      modalCall.classList.add('modal-call--active');
      overlay.classList.add('overlay--active');
  
      if (menu.classList.contains('aside-menu--active')) {
        menu.classList.remove('aside-menu--active');
      }
  
    };
  
    const closeModalCall = function () {
      modalCall.classList.remove('modal-call--active');
      overlay.classList.remove('overlay--active');
    };
  
    modalCallOpenBtns.forEach(btn => {
      btn.addEventListener('click', openModalCall, false);
    });
  
    modalCallCloseBtn.addEventListener('click', closeModalCall, false);
  
    overlay.addEventListener('click', closeModalCall, false);
  });
  ////
  document.addEventListener('DOMContentLoaded', () => {
    const modalFeedbackOpenBtns = document.querySelectorAll('.action-btn--chat');
    const modalFeedback = document.querySelector('.modal-feedback');
    const modalFeedbackCloseBtn = document.querySelector('.modal-form__close--feedback');
    const menu = document.querySelector('.aside-menu');
    const overlay = document.querySelector('.overlay');
  
  
    const openModalFeedback = function () {
      modalFeedback.classList.add('modal-feedback--active');
      overlay.classList.add('overlay--active');
  
      if (menu.classList.contains('aside-menu--active')) {
        menu.classList.remove('aside-menu--active');
  
      }
  
    };
  
    const closeModalFeedback = function () {
      modalFeedback.classList.remove('modal-feedback--active');
      overlay.classList.remove('overlay--active');
    };
  
    modalFeedbackOpenBtns.forEach(btn => {
      btn.addEventListener('click', openModalFeedback, false);
    });
  
    modalFeedbackCloseBtn.addEventListener('click', closeModalFeedback, false);
    overlay.addEventListener('click', closeModalFeedback, false);
  });
  /////
  document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.querySelector('.menu-open');
    const menu = document.querySelector('.aside-menu');
    const menuClose = menu.querySelector('.aside-btn__close');
    const modalFeedback = document.querySelector('.modal-feedback');
    const modalCall = document.querySelector('.modal-call');
    const overlay = document.querySelector('.overlay');
  
  
    const openMenu = function () {
      menu.classList.add('aside-menu--active');
      overlay.classList.add('overlay--active');
  
      if (modalFeedback.classList.contains('modal-feedback--active')) {
        modalFeedback.classList.remove('modal-feedback--active');
      }
  
      if (modalCall.classList.contains('modal-call--active')) {
        modalCall.classList.remove('modal-call--active');
      }
    };
  
    const closeMenu = function () {
      menu.classList.remove('aside-menu--active');
      overlay.classList.remove('overlay--active');
    };
  
    menuOpen.addEventListener('click', openMenu, false);
  
    menuClose.addEventListener('click', closeMenu, false);
  
    overlay.addEventListener('click', closeMenu, false);
  
  
    const modalNavItems = document.querySelectorAll('.aside-menu__nav-item');
  
    modalNavItems.forEach(item => {
      item.addEventListener('click', () => {
        modalNavItems.forEach(element => {
          element.classList.remove('aside-menu__nav-item--active');
        });
        item.classList.add('aside-menu__nav-item--active');
      });
    });
  });
  ////
  document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll('.menu__item');
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(element => {
          element.classList.remove('menu__item--active');
        });
        item.classList.add('menu__item--active');
      });
    });
  });
  //////
  document.addEventListener("DOMContentLoaded", () => {

    const brandsShowMore = document.querySelector('.show-more__btn--devices');
    const brandsContainer = document.querySelector('.devices__list-items');
    const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text--devices');
  
    const toggleBrandsShowMore = () => {
      brandsContainer.classList.toggle('devices__list-items--show-more');
      brandsShowMoreTxt.classList.toggle('show-more__text--hide');
  
      if (brandsContainer.classList.contains('devices__list-items--show-more')) {
  
        brandsShowMoreTxt.textContent = 'Скрыть';
      } else {
        brandsShowMoreTxt.textContent = 'Показать все';
      }
    }
  
    brandsShowMore.addEventListener('click', toggleBrandsShowMore);
  });

///
if(document.documentElement.clientWidth <= 550) {

    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: -50,
        breakpoints: {
            480: {
                slidesPerView: 1,
        
                spaceBetween: -150,
            },
            600: {
                slidesPerView: 2,
    
                spaceBetween: -50,
            },
        }
    });

    const pricesSwiper = new Swiper('.swiper-second', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: -30,
        breakpoints: {
            480: {
                slidesPerView: 1,
        
                spaceBetween: -150,
            },
            600: {
                slidesPerView: 2,
    
                spaceBetween: 0,
            },
        }
    });

    }
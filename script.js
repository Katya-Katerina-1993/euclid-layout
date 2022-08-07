// hero
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.addEventListener('DOMContentLoaded', function () {
//burger-menu
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('active')
    document.querySelector('#menu').classList.toggle('is-active')
  });

// search
  document.querySelector('#search__btn').addEventListener('click', function () {
    document.querySelector('.form__search').classList.add('active')
  });

  document.querySelector('#closed__btn').addEventListener('click', function () {
    document.querySelector('.form__search').classList.remove('active')
  });

// how we work
  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active')
      });
      event.currentTarget.classList.add('tabs-nav__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function (tabsItem) {
        tabsItem.classList.remove('tabs-item--active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });
});

// frequently asked questions
$( function() {
  $( ".accordion" ).accordion({
    heightStyle: "content"
  });
} );

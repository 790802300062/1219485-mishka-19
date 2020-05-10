var openModalCart = document.querySelectorAll('.products__cart-link');
var modal = document.querySelector('.popup-add');
var ESC_KEY = 27;
var map = document.querySelector('.contacts__yandex-map');
var noImgMap = document.querySelector('.contacts__map');
var openModal = document.querySelector('.promo__btn');
var siteNav = document.querySelector('.page-header__site-list');
var userNav = document.querySelector('.page-header__user-list');
var jsOff = document.querySelector('.page-header__nav');
var menuToggle = document.querySelector('.page-header__toggle');

//меню

siteNav.classList.toggle('page-header__site-list--closed');
userNav.classList.toggle('page-header__user-list--closed');
jsOff.classList.toggle('page-header__nav--closed');
jsOff.classList.remove('page-header__nav--nojs');

menuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  siteNav.classList.toggle('page-header__site-list--closed');
  userNav.classList.toggle('page-header__user-list--closed');
  jsOff.classList.toggle('page-header__nav--closed');
});

//модальное для индекс

if (openModal) {
  openModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popup-add--show');
  });
}

var closeModalEsc = function(evt) {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    if (modal.classList.contains('popup-add--show')) {
      evt.preventDefault();
      modal.classList.remove('popup-add--show');
    }
  }
}

window.addEventListener('keydown', closeModalEsc);

//модальное для каталога

for(var i = 0; i < openModalCart.length; i++) {
  openModalCart[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popup-add--show');
  });
  window.addEventListener('keydown', closeModalEsc);
}

var closeModalEsc = function(evt) {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    if (modal.classList.contains('popup-add--show')) {
      evt.preventDefault();
      modal.classList.remove('popup-add--show');
    }
  }
}

window.addEventListener('keydown', closeModalEsc);

//карта

if (map) {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.93868216937056, 30.323106771163893],
      zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([59.93868216937056, 30.323106771163893], {
      hintContent: 'Офис Мишка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.svg',
      iconImageSize: [68, 101],
      iconImageOffset: [-30, -150]
    });

    myMap.geoObjects.add(myPlacemark);
  };
}

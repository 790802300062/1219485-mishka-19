var map = document.querySelector('.contacts__yandex-map');
var noImgMap = document.querySelector('.contacts__map');

map.classList.remove('contacts__yandex-map--nojs');
noImgMap.classList.add('contacts__map--display-none')

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
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [68, 101],
      iconImageOffset: [-30, -150]
    });

    myMap.geoObjects.add(myPlacemark);
  };
}

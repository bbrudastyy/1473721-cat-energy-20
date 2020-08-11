var mapImg = document.querySelector(".cooperation__map--image");
var mapMap = document.querySelector(".cooperation__map");

mapImg.classList.add("cooperation__map--none");
mapMap.classList.remove("cooperation__map--none");


ymaps.ready(init);
var myMap;
var pageWidth = document.body.clientWidth;

function init() {
  if (pageWidth < 768) {
    myMap = new ymaps.Map("map", {
      center: [59.938937, 30.323075],
      zoom: 16
    });

    var pin = new ymaps.Placemark([59.938937, 30.323075], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [57, 53]
    });

    myMap.geoObjects.add(pin);
  }
  else if (pageWidth >= 768 && pageWidth < 1440) {
    myMap = new ymaps.Map("map", {
      center: [59.938937, 30.323075],
      zoom: 16
    });

    var pin = new ymaps.Placemark([59.938937, 30.323075], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [113, 106]
    });

    myMap.geoObjects.add(pin);
  }
  else if (pageWidth >= 1440) {
    myMap = new ymaps.Map("map", {
      center: [59.938937, 30.323075],
      zoom: 16
    });

    var pin = new ymaps.Placemark([59.938937, 30.3230755], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [113, 106]
    });

    myMap.geoObjects.add(pin);
  }
}

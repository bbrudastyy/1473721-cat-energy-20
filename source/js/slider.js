var pageWidth = document.body.clientWidth;
var tabletWidth = 768;

if (pageWidth < tabletWidth) {

  var imgBefore = document.querySelector(".example__img--before");
  var imgAfter = document.querySelector(".example__img--after");
  var btnBefore = document.querySelector(".example__text-change--before");
  var btnAfter = document.querySelector(".example__text-change--after");

  btnBefore.addEventListener('click', function () {
    imgBefore.classList.remove("example__img--none");
    imgAfter.classList.add("example__img--none");
  });

  btnAfter.addEventListener('click', function () {
    imgAfter.classList.remove("example__img--none");
    imgBefore.classList.add("example__img--none");
  });
}

else {

  var slider = document.querySelector(".example__range");
  var imgBefore = document.querySelector(".example__img--before");
  var imgAfter = document.querySelector(".example__img--after");
  var btnBefore = document.querySelector(".example__text-change--before");
  var btnAfter = document.querySelector(".example__text-change--after");

  slider.addEventListener('input', function () {
    imgBefore.style.width = (100 - slider.value) + "%";
    imgAfter.style.width = slider.value + "%";
  });

  btnBefore.addEventListener('click', function () {
    imgBefore.style.width = "100%";
    imgAfter.style.width = "0%";
    slider.value = 0;
  });

  btnAfter.addEventListener('click', function () {
    imgAfter.style.width = "100%";
    imgBefore.style.width = "0%";
    slider.value = 100;
  });
}

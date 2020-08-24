var form = document.querySelector(".selection__form");
if (form) {
  var validateBtn = form.querySelector(".selection__btn");
  var requireds = form.querySelectorAll(".form-required");
  var icons = form.querySelectorAll(".cat-owner__icon");

  validateBtn.addEventListener('click', function (event) {
    event.preventDefault();

    for (var i = 0; i < requireds.length; i++) {
      requireds[i].classList.remove("error--field");
      if (i > 2) {
        icons[i - 2].classList.remove("error--icon");
      }
      if (!requireds[i].value) {
        requireds[i].classList.add("error--field");
        if (i > 1) {
          icons[i - 2].classList.add("error--icon");
        }
        window.scrollTo(0, 0);
      }
    }
  });
}

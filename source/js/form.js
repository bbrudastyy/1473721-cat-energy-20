var form = document.querySelector(".selection__form");
if (form){
  var validateBtn = form.querySelector(".selection__btn");
  var requireds = form.querySelectorAll(".form-required");

  validateBtn.addEventListener('click', function (event) {
    event.preventDefault();

    for (var i = 0; i < requireds.length; i++) {
      requireds[i].classList.remove("error");
      if (!requireds[i].value) {
        requireds[i].classList.add("error");
        window.scrollTo(0, 0);
      }
    }
  });
  }

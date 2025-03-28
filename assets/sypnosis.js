document.querySelector('.close-drawer span').addEventListener('click', function() {
    const menuButton = document.querySelector('.header__icon--menu[aria-expanded="true"]');
    const menuDrawer = document.querySelectorAll('.custom-menu-drawer');
    if (menuButton) {
        menuButton.click(); // Simulating a click event
    }
});


document.addEventListener("DOMContentLoaded", function () {
  var sliders = document.querySelectorAll(".testimonials-slider");
  sliders.forEach(function (slider) {
    new Flickity(slider, {
      cellAlign: "center",
      adaptiveHeight: true,
      avoidReflow: true,
      contain: true,
      wrapAround: true,
      pageDots: true,
      prevNextButtons: false,
      autoPlay: 3000
    });
  });
});




// SWIPER
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// // SLICK
$(".single-item").slick();

// // BXSLIDER
$(document).ready(function() {
  $(".slider").bxSlider();
});

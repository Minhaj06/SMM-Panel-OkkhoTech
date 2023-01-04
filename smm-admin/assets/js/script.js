$(document).ready(function () {
  // Toggle Sidebar
  $(".menu-icon").click(function () {
    $(".sidebar").toggleClass("show-sidebar");
    $(".body-wrapper-freeze").toggleClass("d-block");
  });

  $(".body-wrapper-freeze").click(function () {
    $(".sidebar").toggleClass("show-sidebar");
    $(".body-wrapper-freeze").toggleClass("d-block");
  });
});

// Filter Menu Active Toggle
const filterMenu = document.querySelector(".filter-menu");
const filterMenuItem = document.querySelectorAll(".filter-menu li");
// const p_cat = document.querySelectorAll(".p_cat");
// const p_single = document.querySelectorAll(".port_items div");

filterMenuItem.forEach((item) => {
  item.addEventListener("click", function () {
    filterMenuItem.forEach((singleItem) => singleItem.classList.remove("active"));
    this.classList.add("active");
  });
});

// init Isotope Filter
var $grid = $(".grid").isotope({
  // options
});
// filter items on button click
$(".filter-menu").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

// Popular Product Slider
const popularProductSwiper = new Swiper(".popular-product-swiper", {
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".popular-product .swiper-button-next",
    prevEl: ".popular-product .swiper-button-prev",
  },
});

// Featured Categories Slider
const featuredCategoriesSwiper = new Swiper(".featured-categories-swiper", {
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".featured-categories .swiper-button-next",
    prevEl: ".featured-categories .swiper-button-prev",
  },
  pagination: {
    el: ".featured-categories .position-relative .swiper-pagination",
    clickable: true,
  },
});

// Testimonial Slider
const testimonialSpeechSwiper = new Swiper(".testimonial-speech-swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonial-speech .position-relative .swiper-button-next",
    prevEl: ".testimonial-speech .position-relative .swiper-button-prev",
  },
  pagination: {
    el: ".testimonial-speech .swiper-pagination",
    clickable: true,
  },
});

// Single Product Page Swiper Slider
var swiper = new Swiper(".single-product-slider .mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".single-product-slider .mySwiper2", {
  loop: false,
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});

// Password Show Hide
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");

const passIcon = document.querySelector(".pass-icon");
const cPassIcon = document.querySelector(".c-pass-icon");

function showHidePass(selector, icon) {
  console.log(password.value);

  if (selector.type === "password") {
    selector.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    selector.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Price Range Slider
let rangeSlider = document.querySelector(".range-slider");
let rangeSliderAfter = window.getComputedStyle(rangeSlider, "::after");

let rangeSelector = document.querySelector(".range-selector");
let rangeSelectedValue = document.querySelector(".range-selected-value");

rangeSelectedValue.innerHTML = rangeSlider.value * 100 + "৳";

rangeSlider.oninput = function () {
  rangeSelector.style.left = this.value + "%";

  rangeSelectedValue.innerHTML = this.value * 100 + "৳";

  rangeSlider.style.setProperty("--rangeSliderWidth", this.value + "%");
};

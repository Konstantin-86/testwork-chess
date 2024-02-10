const firstSwiper = new Swiper(".first-slider", {
  loop: false,
  effect: "cube",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".next-btn--first",
    prevEl: ".prev-btn--first",
  },

  slidesPerView: 1,
});

const swiper = new Swiper(".second-slider", {
  loop: true,

  pagination: {
    el: ".my-pagination",
    type: "fraction",
  },
  slidesPerView: 1,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1366: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener('DOMContentLoaded', function(){
  const eventsSlider = new Swiper('.events__cards-container', {
    slidesPerView: 1,
    slidesPerGroup: 3,
    spaceBetween: 50,

    pagination: {
      el: '.swiper__events-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.events__btn--next',
      prevEl: '.events__btn--prev',
    },

   breakpoints: {
      200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
      },

      1500: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

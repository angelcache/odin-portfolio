const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: -200,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: -750
    }
  },
  on: {
    slideChangeTransitionStart: function () {
      // reset all frames to silver
      document.querySelectorAll(".swiper-slide .frame").forEach(frame => {
        frame.src = "assets/bg-imgs/frame-silver.png";
      });

      // set active frame to gold
      const activeSlide = this.slides[this.activeIndex];
      const activeFrame = activeSlide.querySelector(".frame");
      if (activeFrame) {
        activeFrame.src = "assets/bg-imgs/frame-gold.png";
      }
    }
  }
});

swiper.slides[swiper.activeIndex].querySelector(".frame").src = "assets/bg-imgs/frame-gold.png";
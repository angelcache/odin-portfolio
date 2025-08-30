const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionEnd: function () {
      // Reset all frames to silver
      document.querySelectorAll(".swiper-slide .frame").forEach(frame => {
        frame.src = "assets/bg-imgs/frame-silver.png";
      });

      // Set active frame to gold
      const activeSlide = this.slides[this.activeIndex];
      const activeFrame = activeSlide.querySelector(".frame");
      if (activeFrame) {
        activeFrame.src = "assets/bg-imgs/frame-gold.png";
      }
    }
  }
});

// Run once at load to initialize frames
document.querySelectorAll(".swiper-slide .frame").forEach(frame => {
  frame.src = "assets/bg-imgs/frame-silver.png";
});
swiper.slides[swiper.activeIndex].querySelector(".frame").src = "assets/bg-imgs/frame-gold.png";
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,        
  centeredSlides: true,                
  spaceBetween: -800,       
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
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

// initialize frames at load
document.querySelectorAll(".swiper-slide .frame").forEach(frame => {
  frame.src = "assets/bg-imgs/frame-silver.png";
});
swiper.slides[swiper.activeIndex].querySelector(".frame").src = "assets/bg-imgs/frame-gold.png";

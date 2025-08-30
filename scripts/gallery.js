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
      // remove old direction classes
      this.slides.forEach(slide => {
        slide.classList.remove("from-left", "from-right");
      });

      // get the new active slide
      const active = this.slides[this.activeIndex];

      // force reflow so animation can re-trigger
      void active.offsetWidth;

      // add class depending on swipe direction
      if (this.swipeDirection === "next") {
        active.classList.add("from-right");
      } else if (this.swipeDirection === "prev") {
        active.classList.add("from-left");
      }

      // reset all frames to silver
      document.querySelectorAll(".swiper-slide .frame").forEach(frame => {
        frame.src = "assets/bg-imgs/frame-silver.png";
      });

      // set active frame to gold
      const activeFrame = active.querySelector(".frame");
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

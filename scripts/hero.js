/*
  Code below makes the odin project logo appear when hover over "Odin Project" link
*/

const odinLogo = document.querySelector(".odin-link-img");
const odinLink = document.querySelector(".odin-link");
let timer;
let locked = false;

// Delay listening into hover to wait for assets to load and animate in fully
setTimeout(() => {
  odinLink.addEventListener("mouseenter", () => {

    if (locked) return;
    locked = true;
    
    odinLogo.style.visibility = "visible";
    odinLogo.style.animation = "none";
    void odinLogo.offsetWidth;
    odinLogo.style.animation = "reveal-odin 1.2s ease-in-out forwards";

    timer = setTimeout(() => {
      odinLogo.style.animation = "none";
      void odinLogo.offsetWidth;
      odinLogo.style.animation = "hide-odin 1.2s ease-in-out reverse forwards";

      setTimeout(() => {
        locked = false;
      }, 1200);
    }, 5000)
});
}, 3000);
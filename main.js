const sideMenuBtn = document.querySelector(".menu2-btn");
const sideMenu = document.querySelector(".menu2");
const sideMenuList = document.querySelectorAll(".menu2-list");
const closeBtn = document.querySelector(".close-btn");
const collapseMenu = document.querySelector(".link");
const collapseMenu2 = document.querySelector(".link2");
const tl = gsap.timeline();


tl.from("header", {opacity:0, duration:1, x:30, ease: Power2.easeInOut})
  .from(".menu2-btn", {opacity:0, duration:1, x:30, ease: Power2.easeInOut}, "-=.3")
  .from(".content1 h1", {opacity:0, duration:.5, y:-30, stagger:.5, ease: "bounce"}, "-=.5")
  .from(".content2 .box1", {opacity:0, duration:.7, x:30, ease: Power2.easeInOut}, "-=.3")
  .from(".content1 .button", {opacity:0, duration:.7, y:30, scale:.3, ease: "elastic"}, "+=.4");

  /* this opens the side menu */

sideMenuBtn.addEventListener("click", () => {
    if(sideMenu.style.visibility == "hidden") {
        sideMenu.style.visibility = "visible";
        sideMenu.style.backgroundColor = "white";
        sideMenu.style.width = "100%";
        sideMenu.style.height = "100%";
        sideMenu.style.borderRadius = "350px 0px 0px 0px";
        tl.from(".menu2 .menu2-list li", {opacity: 0, x: 20, duration:1, stagger: 0.5, ease:"elastic"}, "+=.5");
    }
    else {
        sideMenu.style.visibility = "hidden";
    }
});

collapseMenu.addEventListener("click", () => {
    sideMenu.style.visibility = "hidden";
    sideMenu.style.transition = "all .2s ease-in-out";
});

collapseMenu2.addEventListener("click", () => {
    sideMenu.style.visibility = "hidden";
    sideMenu.style.transition = "all .2s ease-in-out";
});


/* this closes the side menu */

closeBtn.addEventListener("click", () => {
    if(sideMenu.style.visibility == "visible") {
        sideMenu.style.visibility = "hidden";
        sideMenu.style.backgroundColor = "royalblue";
        sideMenu.style.width = "0%";
        sideMenu.style.height = "0%";
        sideMenu.style.borderRadius = "50%";
    }
    else {
        sideMenu.style.visibility = "visible";
    }
});

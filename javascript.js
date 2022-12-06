
 let nav =document.querySelector(".navbar")
 let menubar = document.querySelector("#menu-bar");
 let row =document.querySelector(".row")

 menubar.addEventListener('click',function(){
  menubar.classList.toggle("fa-times");
  nav.classList.toggle("active")
 });

  window.onscroll= ()=> {
     nav.classList.remove("active")
     menubar.classList.remove("fa-times");

     if (pageYOffset > 80) {
       row.classList.add("active");
     } else {
       row.classList.remove("active");
     }
  };








      let valueDisplays = document.querySelectorAll(".count");
      let interval = 400;
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
// ---slider testimonies---
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
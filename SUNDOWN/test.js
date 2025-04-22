const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
});

var elemC = document.querySelector(".elem-container")
var imageC = document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter", function(e){
  imageC.style.display = "block";
})
elemC.addEventListener("mouseleave", function(e){
  imageC.style.display = "none";
})

var elems = document.querySelectorAll(".elem");


elems.forEach(function (elem) {
  elem.addEventListener("mouseenter",function(e){
    var bgimg = elem.getAttribute("data-img")
    imageC.style.backgroundImage = `url(${bgimg})`;
  })
});



// elem.forEach(function (val) {
//     val.addEventListener("mouseenter", function () {
//         val.children[1].style.opacity = "1";
//     });

//     val.addEventListener("mouseleave", function () {
//         val.children[1].style.opacity = "0";
//     });
//     val.addEventListener("mousemove", function (dets) {
//         val.children[1].style.left = dets.pageX+"px"
//         val.children[1].style.top = dets.pageY+"px"
//     });
// });



// function init() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,

//     // for tablet smooth
//     tablet: { smooth: true },

//     // for mobile
//     smartphone: { smooth: true },
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     // follwoing line is not required to work pinning on touch screen

//     /* pinType: document.querySelector(".smooth-scroll").style.transform
//       ? "transform"
//       : "fixed"*/
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// init();



// var cursor = document.querySelector(".cursor");
// var logo = document.getElementById("logo");

// var isLogoHovered = false;

// logo.addEventListener("mouseenter", function () {
//   isLogoHovered = true;
//   updateCursorVisibility();
// });

// logo.addEventListener("mouseleave", function () {
//   isLogoHovered = false;
//   updateCursorVisibility();
// });

// document.addEventListener("mousemove", function (e) {
//   if (!isLogoHovered) {
//     cursor.style.left = e.pageX + "px";
//     cursor.style.top = e.pageY + "px";
//   }
// });

// function updateCursorVisibility() {
//   if (isLogoHovered) {
//     cursor.style.display = "block";
//   } else {
//     cursor.style.display = "none";
//   }
// }


function swiper(params) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
  
}

swiper()

// var menu = document.querySelector(".nav h3");
// var full = document.querySelector(".full-scr");
// var navimg = document.querySelector(".nav img");
// var flag = 0;

// menu.addEventListener("click", function (e) {
//   if (flag === 0) {
//     full.style.top = "0";
//     navimg.style.opacity = "0";
//     flag = 1;
//   } else {
//     full.style.top = "-100%";
//     navimg.style.opacity = "1";
//     flag = 0;
//   }
// });

// const toggleButton = document.querySelector('.nav h3');
// const fullScreenOverlay = document.querySelector('.full-scr');

// toggleButton.addEventListener('click', () => {
//     // Toggle the class to show/hide the full-screen overlay
//     fullScreenOverlay.classList.toggle('active');
// });
var menu = document.querySelector(".nav h3");
var full = document.querySelector(".full-scr");
var navimg = document.querySelector(".nav img");
var flag = 0;

menu.addEventListener("click", function (e) {
  if (flag === 0) {
    full.style.top = "0";
    navimg.style.opacity = "0";
    flag = 1;
  } else {
    full.style.top = "-100%";
    navimg.style.opacity = "1";
    flag = 0;
  }
});

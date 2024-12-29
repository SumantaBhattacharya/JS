// document.addEventListener("mouseenter", function () {
//   var nav = document.querySelector("nav");
//   var navBottom = document.querySelector(".nav-bottom");
//   var tl = gsap.timeline()
//   tl.to(".navBottom", {
//     height: "21vh",
//   });
//   tl.to(".bottom-div h5 span",{
//     display: "block"
//   });
//   tl.from(".bottom-div h5 span",{
//     y:20,
//     stagger:{
//         amount: 0.6,
//     },
//     duration: 0.2
//   })

// });
// document.addEventListener("mouseleave", function () {
//   var nav = document.querySelector("nav");
//   var navBottom = document.querySelector(".nav-bottom");
//   var tl = gsap.timeline()
//   tl.to(".bottom-div h5 span",{
//     y:20,
//     stagger:{
//         amount: 0.2,
//     },
//     duration: 0.2
//   })
//   tl.to()

// });
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  var navBottom = document.querySelector(".nav-bottom");
  var tl = gsap.timeline({ paused: true }); // Initialize the timeline in paused state

  // Animation to show the navBottom and h5 spans
  tl.to(navBottom, {
    height: "21vh",
  });
  tl.to(".bottom-div h5 span", {
    display: "block",
  });
  tl.from(".bottom-div h5 span", {
    y: 20,
    stagger: {
      amount: 0.6,
    },
    duration: 0.2,
  });

  // Event listener for mouseenter on nav
  nav.addEventListener("mouseenter", function () {
    tl.play(); // Play the timeline when mouse enters nav
  });

  // Event listener for mouseleave on nav
  nav.addEventListener("mouseleave", function () {
    tl.reverse(); // Reverse the timeline when mouse leaves nav
  });
});

// gsap.to('.move', {
//   duration: 6, // Animation duration in seconds
//   x: '-100%', // Move the element to the left by 100%
//   repeat: -1, // Repeat the animation infinitely
//   ease: 'linear' // Linear easing
// });
document.addEventListener("DOMContentLoaded", function () {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    var rightImg = elem.querySelector("img");

    elem.addEventListener("mouseenter", function () {
      // Uncomment the following line to directly set opacity using vanilla JavaScript
      // rightImg.style.opacity = 1;

      // Use GSAP to animate opacity and scale to 1 on mouse enter
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      // Uncomment the following line to directly set opacity using vanilla JavaScript
      // rightImg.style.opacity = 0;

      // Use GSAP to animate opacity and scale to 0 on mouse leave
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      // Use GSAP to move the image based on mouse position
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 150,
      });

      // console.log(elem.getBoundingClientRect().x);
      // console.log(elem.getBoundingClientRect().y);
    });
  });
});

// rightImg.style.opacity = 0;
// elem.childNodes[3].style.opacity = 0function page3VideoAnimation() {
var page3Center = document.querySelector(".page3-center");
var video = document.querySelector(".page3 video");
var icon = document.querySelector(".page3-center .icon");

// Function to show the icon
function showIcon() {
  icon.style.display = "flex";
}

// Click event listener for the center div
page3Center.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    gsap.to(video, {
      transform: "scale(1)",
      opacity: 1,
      borderRadius: 0,
    });
    icon.style.display = "none";
  } else {
    video.pause();
    gsap.to(video, {
      transform: "scale(0.7)",
      opacity: 0,
      borderRadius: "30px",
    });
    showIcon(); // Show the icon when video is paused
  }
});

// Event listener for when the mouse enters the center area
page3Center.addEventListener("mouseenter", function () {
  showIcon();
});

// Event listener for when the mouse leaves the center area
page3Center.addEventListener("mouseleave", function () {
  if (video.paused) {
    icon.style.display = "flex";
  } else {
    icon.style.display = "none";
  }
});

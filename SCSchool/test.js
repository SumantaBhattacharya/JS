
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true,
// });

//instead of y we can write top and instead of x we can write left
// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   // follwoing line is not required to work pinning on touch screen

//   /* pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed"*/
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();


function loading(){
    var tl = gsap.timeline();

tl.to(".loader #yellow1", {
    top: "-100%",
    delay: 0.2,
    duration: 0.5,
    ease: "expo.out",
});

tl.from(".loader #yellow2", {
    top: "100%",
    delay: 1,
    duration: 0.5,
    ease: "expo.out",
},"anim");

tl.to(".loader h1,.loader h1 em",{
    delay: 1,
    color: "black"
},"anim")
//https://gsap.com/docs/v3/Eases/

tl.to(".loader ",{
    display:"none"
})
};

loading();
var elems = document.querySelectorAll(".elem");
let element = document.querySelector(".page2");

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var bgimg = elem.getAttribute("data-img")
        // console.log(bgimg);
        element.style.backgroundImage = `url('${bgimg}')`;
    });
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
});

document.querySelector(".footer h2").addEventListener("click",function(){
  scroll.scrollTo(0)
})
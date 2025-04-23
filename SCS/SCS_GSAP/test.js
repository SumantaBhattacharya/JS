// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true,
// });

//instead of y we can write top and instead of x we can write left
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



var tl = gsap.timeline()

tl.to(".loader h1", {
    scale: 1.5,     // Scaling factor, making it 1.5 times larger
    delay: 0.5,     // Delay before starting the animation (in seconds)
    duration: 1,     // Duration of the animation (in seconds)
    onStart:time()
});

tl.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration: 1,
})

function time(){
    var a =0
    var intervalID = setInterval(function(){
        a= a + Math.floor(Math.random() * 20 +1)
        if(a<100){
            document.querySelector(".loader h1").innerText = a +"%"
        }else{
            a=100
            document.querySelector(".loader h1").innerText = a +"%"
            clearInterval(intervalID)
        }
        // console.log(a);
    },150)
}

tl.to(".page1 h1", {
    // x: "-100%",
    // ease: "none",
    transform:"translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0", // trigger animation when the top of the element hits the top of the viewport
        end: "bottom -200", // trigger animation when the bottom of the element hits the top of the viewport
        // markers: true,
        scrub: 2,
        pin: true
    },
});



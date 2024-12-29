gsap.to("#box",{
    x:1200,
    y:300,
    duration: 2,
    delay: 1,
    backgroundColor: "rgba(255,255,55,0.5)",
    rotate: 360,
    scale: 0.5
})
gsap.from("#box1",{
    x:1200,
    y:300,
    duration: 2,
    delay: 1,
    backgroundColor: "rgba(255,255,55,0.5)",
    rotate: 360,
    scale: 0.5
})
gsap.to("h1",{
    x:600,
    color: "yellow",
    duration: 2,
    delay: 2,
})
gsap.to("h2",{
    x:600,
    color: "yellow",
    duration: 2,
    delay: 0.5,
    stagger: 1,
    repeat: -1,
    yoyo: true,
})

let tl = gsap.timeline()
tl.to("h3",{
    x:600,
    duration: 1
})
tl.to("h4",{
    x:600,
    duration: 1
})
tl.to("h5",{
    x:600,
    duration: 1  
})

// scrollTrigger:".page2 #box"

// gsap.from(".page3 #box", {
//     scale: 0,
//     duration: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page3 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "to 30%",
//         scrub: true//1-5
//     }
// });

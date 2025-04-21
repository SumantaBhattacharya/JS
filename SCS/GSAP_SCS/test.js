gsap.from(".page1 #box",{
    scale:0,
    delay:1,
    duration: 2,
    rotate:360
})
gsap.from(".page2 #box",{
    scale:0,
    delay:1,
    duration: 1,
    rotate:360,
    scrollTrigger:".page2 #box"
})
gsap.from(".page3 #box", {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: ".page3 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "to 30%",
        scrub: true//1-5
    }
});
// awards.com
// 

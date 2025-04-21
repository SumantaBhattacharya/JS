var tl = gsap.timeline()


tl.from(".nav",{
    opacity: 0,
    delay:0.3,
})

tl.from(".nav img, .nav ul, .nav .sign",{
    y: -80,
    opacity:0,
    duration:0.8,
    stagger: 0.2,
})

tl.from(".left h1,.left span img",{
    x: -500,
    opacity: 0,
    duration:0.5,
    stagger: 0.5
})

tl.from(".right img",{
    scale:0.5,
    opacity:0,
    duration:0.5
})

gsap.from(".page2 .box", {
    scale: 0,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 .box", // Fix: Changed ".page2.box" to ".page2" as the trigger
        scroller: "body",
        markers: true,
        start: "top 70%",
        end: "+=35%", // Fix: Changed "to" to "+=" for relative end position
        scrub: true
    }
});

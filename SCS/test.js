var tl = gsap.timeline()
tl.from("#nav img, #nav li, #nav button", {
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger: 0.1
})

tl.from(".main h1",{
    x: -100,
    opacity:0,
    stagger: 0.2,
})

tl.from(".main >img",{
    scale:0,
    opacity:0,

})

tl.from("h5",{
    x:-100,
    opasity:0,
    scale:0,
})

tl.to("h5",{
    y:30,
    repeat: -1,
    duration:0.7,
    yoyo:true
})
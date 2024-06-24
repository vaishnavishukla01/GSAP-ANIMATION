var tl = gsap.timeline()

tl.from("nav h3, nav i, nav h2, nav button",{
   y: -80,
   duration: 1,
   opacity: 0,
   stagger: 0.2

})

tl.from("h1", {
    opacity: 0,
    scale: .7,
    duration: 1
})

tl.from("img", {
    y: 800,
    rotate: 360,
    duration: 1.5,
    opacity: 0,
    stagger: 1.4
})

tl.to("img", {
    y: -800,
    rotate: 360,
    duration: 1.8,
    opacity: 0,
    stagger: 1
})

tl.to("h1", {
    opacity: 1,
    scale: .9,
    duration: 1
})

tl.to("body", {
    duration: 1,
    backgroundColor: "rgb(64, 223, 207)",
})

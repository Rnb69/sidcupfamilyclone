var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"

    crsrblur.style.left = dets.x- 200 + "px" //so that it properly follows us not , should sit right behind the 1st cursor before it was matching its left top point instead
    crsrblur.style.top = dets.y-200 + "px"   // 200 is half of the size of cursor
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

    

gsap.to("#nav", {
    backgroundColor: "#000",
    duration : 0.5,
    height: "110px",
    scrollTrigger : {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",  //when to start the animation
        end: "top -11%",    // when to hide the effect
        scrub: 1 // smooth 1-5 / true or false
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // marker: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#aboutus img, #aboutus-in", {
    y:90,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#aboutus',
        scroller: "body",
        // marker: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.card',
        scroller: "body",
        // marker: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})
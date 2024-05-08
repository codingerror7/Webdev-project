function init() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

init();

//code to make a cursor:
let crsr = document.querySelector(".cursor");
let main = document.querySelector(".main");
let videocrsr = document.querySelector(".mainvideo");
document.addEventListener("mousemove" , function(dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
})
videocrsr.addEventListener("mouseenter" , () => {
  console.log("mouse enterd successfully!");
  crsr.style.width = "90px";
  crsr.innerText = "click";
  crsr.style.borderRadius = "10px";
  crsr.style.backgroundColor = "#edbfff";
  crsr.style.color = "black";
  crsr.style.fontWeight = "400";
  crsr.style.padding = "15px";
  crsr.style.textAlign = "center";
})
videocrsr.addEventListener("mouseleave" , () => {
  console.log("mouse leaved successfully!");
  crsr.innerText = "";
  crsr.style.width = "20px";
  crsr.style.backgroundColor = "#edbfff";
  crsr.style.padding = "0px";
})

let boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem) {
  elem.addEventListener("mouseenter" , function() {
    let att = elem.getAttribute("data-image");
    crsr.style.width = "300px";
    crsr.style.height = "250px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  })
  elem.addEventListener("mouseleave" , function() {
    crsr.style.height = "20px";
    crsr.style.width = "20px";
    crsr.style.backgroundColor = "#edbfff";
    crsr.style.borderRadius = "50%";
  })
})

let tl = gsap.timeline({
    scrollTrigger : {
        scroller : ".main",
        trigger : ".page1 h1",
        scrub : 3,
        //markers : true,//
        start : "top 26%",
        end : "top 0"
    }
})
//dono elements saath m chlein isliye variable "anim" diya h
tl.to(".page1 h1" , {
    x : -100,
} , "anim")
tl.to(".page1 h2" , {
    x : 100,
} , "anim")

tl.to(".page1 video" , {
    width : "95%"
} , "anim")


let tl2 = gsap.timeline({
  scrollTrigger : {
      scroller : ".main",
      trigger : ".page1 h1",
      scrub : 3,
      //markers : true,
      start : "top -90%",
      end : "top -95%"
  }
})

tl2.to(".main" , {
  backgroundColor : "white"
})

tl2.from(".page2 h1 , .page2-container" , {
       y : 100,
      opacity : 0
})

let tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
     // markers:true,
      start: "top -290%",
      end: "top -310%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})

gsap.from(".page3-part1" , {
  y : 100,
  opacity : 0,
  scrollTrigger : {
    trigger : ".page3-part1",
    scroller : ".main",
    scrub : 4,
   // markers : true,
    start : "top 50%",
    end : "top 0%"
  }
})
gsap.from(".page3-part2" , {
  y : 100,
  opacity : 0,
  scrollTrigger : {
    trigger : ".page3-part2",
    scroller : ".main",
    scrub : 4,
   // markers : true,
    start : "top 60%",
    end : "top 0%"
  }
})
gsap.to(".cursor" , {
  scrollTrigger : {
      scroller : ".body",
      trigger : ".cursor",
      scrub : 5
  }
})




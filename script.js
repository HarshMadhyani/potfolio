const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videocontAnimation() {
  let videocant = document.querySelector("#video-container");
  let playbtn = document.querySelector("#play");
  videocant.addEventListener("mouseenter", (dets) => {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocant.addEventListener("mouseleave", (dets) => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videocant.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
      left: dets.x - 47,
      top: dets.y - 50,
    });
  });
}
videocontAnimation();

function page1Animation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.4,
  });
  gsap.from("#video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.1,
    duration: 0.6,
  });
}
page1Animation();

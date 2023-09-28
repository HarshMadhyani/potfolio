function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

init();

gsap.to("#heading h1", {
  y: 0,
  ease: Power2,
  delay: 0.3,
  duration: 0.5,
  stagger: 0.3,
});

gsap.to(
  "#page1 #namediv",
  {
    x: -400,
    scale: 1.3,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#namediv",
      scroller: "#main",
      start: "80% 30%",
      end: "100% 80%",
      // markers: true,
      scrub: 5,
    },
  },
  "a"
);
gsap.to(
  "#page1 #frontname",
  {
    x: 800,
    scale: 1.3,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#namediv",
      scroller: "#main",
      start: "80% 30%",
      end: "100% 80%",
      scrub: 5,
    },
  },
  "a"
);
gsap.to(
  "#page1 #heading",
  {
    backgroundColor: "black",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#namediv",
      scroller: "#main",
      start: "80% 30%",
      end: "100% 80%",
      scrub: 1,
    },
  },
  "a"
);

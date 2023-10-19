const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
function animaTori() {
  var tl = gsap.timeline();
  tl.to("#heading h1", {
    y: 0,
    ease: Expo,
    delay: 0.3,
    duration: 0.5,
    stagger: 0.3,
  });

  tl.to(
    "#page1 #namediv",
    {
      x: "-90%",
      scale: 1.3,
      color: "white",

      ease: Power2,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#namediv",
        start: "80% 30%",
        end: "+=400px",
        scrub: 2,
      },
    },
    "a"
  );
  tl.to(
    "#page1 #frontname",
    {
      x: 1000,
      color: "white",
      scale: 1.3,
      ease: Power2,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#namediv",
        start: "80% 30%",
        end: "+=400px",
        scrub: true,
      },
    },
    "a"
  );
  tl.to(
    "#page1 #heading",
    {
      backgroundColor: "black",
      duration: 0.8,
      ease: Power2,
      scrollTrigger: {
        trigger: "#namediv",
        start: "80% 30%",
        end: "100% 80%",
        scrub: true,
      },
    },
    "a"
  );
  gsap.to("#aboutimg", {
    y: "-40%",
    ease: Power1,
    scrollTrigger: {
      trigger: "#about",
      start: "4% 20%",
      end: "100% 80%",
      scrub: true,
    },
  });

  gsap.to("#firstprt h1", {
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: "+=900px",
      scrub: 3,
      pin: true,
    },
    x: "-240%",
  });
  gsap.to("#imgdip img", {
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: "+=1000px",
      scrub: 3,
    },
    scale: 1.4,
  });

  gsap.to(
    ".leftpage",
    {
      scrollTrigger: {
        trigger: "#page4",
        start: "top -20px",
        end: "+=2000px",
        scrub: 2,
        markers: true,
        pin: true,
      },
      rotateY: "0",
    },
    "filp"
  );
  gsap.to(
    ".rightpage",
    {
      scrollTrigger: {
        trigger: "#page4",
        start: "top -20px",
        end: "+=2000px",
        scrub: 2,
      },
      rotateY: "0",
    },
    "filp"
  );
}
requestAnimationFrame(raf);
animaTori();

Shery.mouseFollower();
Shery.makeMagnet(".magnet");

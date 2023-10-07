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
      x: -400,
      scale: 1.3,
      ease: Expo,
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
    "#page1 #frontname",
    {
      x: 800,
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
}
requestAnimationFrame(raf);
animaTori();

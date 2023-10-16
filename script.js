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
        scrub: true,
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
      end: "+=1000px",
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

  gsap.from(".linesvg", {
    drawSvg: "0",
    duration: 1,
  });
}
requestAnimationFrame(raf);
animaTori();

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.imageEffect("#imgcnt", {
  style: 4,
  debug: true,
  config: {
    uColor: { value: true },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 2.94, range: [0, 5] },
    uFrequency: { value: 6.4, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.9854871277132762 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.56, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

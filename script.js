const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
// Function to get and update the body width
function updateBodyWidth() {
  const bodyWidth = document.body.clientWidth;
  console.log(`Body width: ${bodyWidth}px`);
}

// Initial call to get the initial width
updateBodyWidth();

// Add a resize event listener to continuously update the width
window.addEventListener("resize", updateBodyWidth);
function animaTori() {
  var tl = gsap.timeline();
  tl.to("#heading h1", {
    y: 0,
    opacity: 1,
    rotateX: "0deg",
    ease: "power3.out",
    delay: 0.3,
    duration: 3,
  });

  tl.to(
    "#page1 #namediv",
    {
      x: "-40%",
      scale: 1.3,
      color: "white",
      ease: Power2,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#namediv",
        start: "80% 30%",
        end: "+=400px",
        scrub: 3,
      },
    },
    "a"
  );
  tl.to(
    "#page1 #frontname",
    {
      x: "50%",
      color: "white",
      scale: 1.3,
      ease: Power2,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#namediv",
        start: "80% 30%",
        end: "+=400px",
        scrub: 3,
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
  gsap.to(".rightpage", {
    scrollTrigger: {
      trigger: "#page4",
      start: "top -20px",
      end: "bottom -10px",
    },
    opacity: 1,
    duration: 2,
  });
  gsap.to(".leftpage", {
    scrollTrigger: {
      trigger: "#page4",
      start: "top -20px",
      end: "bottom -10px",
    },
    opacity: 1,
    duration: 2,
  });
}
requestAnimationFrame(raf);
animaTori();

Shery.mouseFollower();
Shery.makeMagnet(".magnet");

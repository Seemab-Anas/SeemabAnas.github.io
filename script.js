var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

function loader() {
  return new Promise((resolve) => {
    var loader = document.querySelector(".loader");

    // Event listener for when the window finishes loading
    window.addEventListener("load", function () {
      loader.style.display = "none";
      resolve();
    });

    // Ensure the loader is displayed initially
    document.addEventListener("DOMContentLoaded", function () {
      loader.style.display = "flex";
    });
  });
}

loader().then(() => {
  // GSAP Timeline starts after the loader is hidden

  let tl = gsap.timeline();

  tl.from("#frame", {
    height: 0,
    width: 0,
    duration: 1,
  });
  tl.from("#nav", {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from("#foot", {
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from("#menue", {
    x: -100,
    opacity: 0,
    duration: 1,
  });
  tl.from("#main", {
    opacity: 0,
    duration: 1,
  });
  tl.from("#page-1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
  tl.from("#page-1 p", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
});

// Function to handle media query changes
function handleScreenSizeChange(e) {
  if (e.matches) {

    gsap.from(".proj1", {
      x: 300,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj1",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 100%",
        end:"top 30%"
      },
    });
    gsap.from(".proj2", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj2",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 100%",
        end:"top 30%"
      },
    });
    gsap.from(".proj3", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj3",
        scroller: "#main",
        // markers:true,
        scrub: 2,
       start: "top 100%",
        end:"top 30%"
      },
    });
    gsap.from(".proj4", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj4",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 100%",
        end:"top 30%"
      },
    });
  } else {
    gsap.from(".proj1", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj1",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 180%",
      },
    });
    gsap.from(".proj2", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj2",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 180%",
      },
    });
    gsap.from(".proj3", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj3",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 180%",
      },
    });
    gsap.from(".proj4", {
      x: 1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".proj4",
        scroller: "#main",
        // markers:true,
        scrub: 2,
        start: "top 180%",
      },
    });
  }
}

// Create a MediaQueryList object
const mediaQueryList = window.matchMedia("(max-width: 900px)");

// Add a listener for the screen size change
mediaQueryList.addEventListener("change", handleScreenSizeChange);

// Initial check
handleScreenSizeChange(mediaQueryList);

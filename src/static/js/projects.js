gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let panelsContainer = document.querySelector("#panels-container");

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel-horizontal");

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        id: "trigger",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
      },
    });

    gsap.utils.toArray(".panel-vertical").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        id: "trigger2",
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  },
  "(max-width: 799px)": function () {
    gsap.utils.toArray(".panel-vertical").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        id: "trigger2",
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  },
});

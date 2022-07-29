gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let panelsContainer = document.querySelector("#panels-container");

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel-horizontal");
gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
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
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

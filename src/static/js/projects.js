gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let panelsContainer = document.querySelector("#panels-container");

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel-horizontal");
// gsap.to(panels, {
//   xPercent: -100 * (panels.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#panels-container",
//     pin: true,
//     start: "top top",
//     scrub: 1,
//     snap: {
//       snapTo: 1 / (panels.length - 1),
//       inertia: false,
//       duration: { min: 0.1, max: 0.1 },
//     },
//     end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
//   },
// });

let isAlreadyEnabled = false;
WidthChange(window.innerWidth >= 900);

window.addEventListener("resize", () => {
  WidthChange(window.innerWidth >= 900);
});

function WidthChange(shouldEnable) {
  const trigger = ScrollTrigger.getById("trigger");

  if (!shouldEnable && trigger) {
    gsap.killTweensOf([trigger.scroller, trigger.animation]);
    gsap.set(panels, { xPercent: 0, overwrite: true, height: "100px" });
    trigger.disable(true, false);
    isAlreadyEnabled = false;
  }

  if (shouldEnable && !isAlreadyEnabled) {
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

    isAlreadyEnabled = true;
  }
}

gsap.utils.toArray(".panel-vertical").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    id: "trigger2",
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

const cursor = document.querySelector("#cursor");
let timer;

cursor.style.position = "fixed";
cursor.style.zIndex = `999`;

const cursorFactory = (n) => {
  const textLength = cursor.innerHTML.length;

  cursor.innerHTML = cursor.textContent.replace(
    /\S/g,
    "<span class='cursor-span'>$&</span>"
  );

  const element = document.querySelectorAll("span");

  for (let i = 0; i < element.length; i++) {
    element[i].style.transform = `rotate(${(i * 360) / textLength}deg)`;
    element[i].style.transformOrigin = `0 ${n}px`;
    element[i].style.top = `-${n}px`;
  }
};

cursorFactory(100);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("scroll", (e) => {
  clearTimeout(timer);
  // Scroll position
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.style.animationDuration = "1s";

  // Debouncing
  timer = setTimeout(() => {
    cursor.style.animationDuration = "7.5s";
  }, 50);
});

// hover effect
const hovers = document.querySelectorAll(".hover");

hovers.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.innerHTML = "click-click-click-";
    cursorFactory(130);
  });

  element.addEventListener("mouseleave", () => {
    cursor.innerHTML = "scroll-to-discover-";
    cursorFactory(100);
  });
});

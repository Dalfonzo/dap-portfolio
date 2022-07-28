const header = document.querySelector(".header");
const navigation = document.querySelector(".header__nav");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");
const closeMenuIcon = document.querySelector("#close-icon");
const headerLink = document.querySelector(".header__link");
let isOpen = false;

function toggleDisplay(selector) {
  if (selector === "none" || selector === "") {
    return "block";
  } else {
    return "none";
  }
}

function toggleClasses() {
  header.classList.toggle("open-menu");
  navigation.classList.toggle("vertical-menu");
  body.classList.toggle("no-vertical-overflow");

  menuIcon.style.display = toggleDisplay(menuIcon.style.display);
  closeMenuIcon.style.display = toggleDisplay(closeMenuIcon.style.display);
}

function displayWindowSize() {
  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  if (w >= 600 && isOpen) {
    toggleClasses();
    isOpen = false;
  }
}

window.addEventListener("resize", displayWindowSize);

document.querySelectorAll(".header__link").forEach((el) =>
  el.addEventListener("click", () => {
    if (isOpen) {
      isOpen = !isOpen;
      toggleClasses();
    }
  })
);

menu.addEventListener("click", () => {
  isOpen = !isOpen;
  toggleClasses();
});

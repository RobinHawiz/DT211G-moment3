const html = document.querySelector("html");
const jeMappelle = document.querySelector(".je-mappelle-hamburger");
const nav = document.querySelector("nav");
const navLinks = nav.querySelector("ul");
const logo = document.querySelector(".logo");

jeMappelle.addEventListener("click", () => {
  // Accessibility.
  if (nav.classList.contains("toggle")) {
    jeMappelle.setAttribute("aria-label", "Meny");
    jeMappelle.setAttribute("aria-expanded", false);
  } else {
    jeMappelle.setAttribute("aria-label", "Stäng meny");
    jeMappelle.setAttribute("aria-expanded", true);
  }
  // Opening and closing of the menu.
  for (const line of jeMappelle.children) {
    line.classList.toggle("toggle");
  }
  nav.classList.toggle("toggle");
  logo.classList.toggle("nav-opened");
  html.classList.toggle("disable-nav-scrolling");
  /*
  Before setting display: none to the ul, we need to wait until the nav is closed. 
  Otherwise the links will disappear before the nav is closed, which looks weird.
  */
  if (navLinks.classList.contains("toggle")) {
    setTimeout(() => {
      navLinks.classList.toggle("toggle");
    }, "500");
  }
  // If the nav is closed and is to be opened, then we want to instantly set display: flex to the ul, in order to "reveal" them while the nav is opening.
  else {
    navLinks.classList.toggle("toggle");
  }
});

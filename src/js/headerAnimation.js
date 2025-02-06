const logo = document.querySelector(".logo a");
const letters = logo.textContent.split("");
const jeMapelleLines = document.querySelectorAll(".je-mappelle-hamburger span");

var path = window.location.pathname;
var page = path.split("/").slice(-2)[0];

if (page === "DT211G-moment3") {
  logoAnimation(2);
  jeMapelleLinesAnimation(2.5);
} else {
  logoAnimation(0);
  jeMapelleLinesAnimation(0.5);
}

function logoAnimation(delay) {
  logo.innerHTML = "";
  for (let i = 0; i <= letters.length - 1; i++) {
    logo.innerHTML += `<span class="letter letter-${i}">${letters[i]}</span>`;
    document.querySelector(`.letter-${i}`).style.animation = `0.5s ease ${
      delay + i / 30
    }s forwards logo-animation`;
  }
}

function jeMapelleLinesAnimation(delay) {
  jeMapelleLines[0].style.animation = `0.5s ease ${delay}s forwards hamburger-span-1-animation`;
  jeMapelleLines[1].style.animation = `0.5s ease ${delay}s forwards hamburger-span-2-animation`;
}

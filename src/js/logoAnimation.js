const logo = document.querySelector(".logo a");
const letters = logo.textContent.split("");

var path = window.location.pathname;
var page = path.split("/").slice(-2)[0];

if (page === "sass") {
  logoAnimation(0);
} else {
  logoAnimation(2);
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

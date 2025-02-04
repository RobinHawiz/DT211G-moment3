const logo = document.querySelector(".logo a");
const letters = logo.textContent.split("");

logo.innerHTML = "";
for (let i = 0; i <= letters.length - 1; i++) {
  logo.innerHTML += `<span class="letter letter-${i}">${letters[i]}</span>`;
  document.querySelector(`.letter-${i}`).style.animation = `0.5s ease ${
    2 + i / 30
  }s forwards logo-animation`;
}

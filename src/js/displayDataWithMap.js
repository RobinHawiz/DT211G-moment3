const { fetchData } = require("./modules/fetchData");

const form = document.querySelector("form");
const iframe = document.querySelector("iframe");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const address = formData.get("address");
  const addressQuery = createQueryString(address);
  displayDataWithMap(
    `https://nominatim.openstreetmap.org/search?q=${addressQuery}&format=json`
  );
});

async function displayDataWithMap(url) {
  // Get data
  const dataObj = await fetchData(url);
  const lat = dataObj[0]["lat"];
  const lon = dataObj[0]["lon"];
  console.log(lat);
  console.log(lon);
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&marker=${lat}%2C${lon}&layers=ND`;
  iframe.setAttribute("src", src);
}

function createQueryString(str) {
  const chars = {
    " ": "+",
    ",": "%2C",
  };
  return str.replace(/ |,/g, (c) => chars[c]);
}

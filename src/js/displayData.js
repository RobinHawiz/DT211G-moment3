const { fetchData } = require("./fetchData");

async function displayData(url) {
  const data = await fetchData(url);
}

displayData("https://studenter.miun.se/~mallar/dt211g/");

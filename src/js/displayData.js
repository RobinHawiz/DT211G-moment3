const { fetchData } = require("./fetchData");
const { convertData } = require("./convertData");

async function displayData(url) {
  const dataObj = await fetchData(url);
  const dataArr = convertData(dataObj);
}

displayData("https://studenter.miun.se/~mallar/dt211g/");

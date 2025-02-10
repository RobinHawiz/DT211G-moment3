const { fetchData } = require("./fetchData");
const { convertMiunStatsData } = require("./convertData");

async function displayData(url) {
  const dataObj = await fetchData(url);
  const { dataArrCourses, dataArrPrograms } = convertMiunStatsData(dataObj);
}

displayData("https://studenter.miun.se/~mallar/dt211g/");

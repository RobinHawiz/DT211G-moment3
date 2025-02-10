const { fetchData } = require("./fetchData");
const { convertMiunStatsData } = require("./convertData");
const { sortMiunStatsData } = require("./sortData");

async function displayData(url) {
  // Get data
  const dataObj = await fetchData(url);
  // Seperate data (by type)
  const { dataArrCourses, dataArrPrograms } = convertMiunStatsData(dataObj);
  // Sort data (by number of applicants)
  sortMiunStatsData(dataArrCourses);
  sortMiunStatsData(dataArrPrograms);
  // Take out first N number of elements from the sorted data
  const topSixCourses = dataArrCourses.slice(0, 6);
  const topFivePrograms = dataArrPrograms.slice(0, 5);
}

displayData("https://studenter.miun.se/~mallar/dt211g/");

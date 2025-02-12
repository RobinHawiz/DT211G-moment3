const { fetchData } = require("./modules/fetchData");
const { convertMiunStatsData } = require("./modules/convertData");
const { sortMiunStatsData } = require("./modules/sortData");
const { createBarChart, createPieChart } = require("./modules/createCharts");

// Charts we want to display

const barChartTopSixCourses = document.getElementById(
  "top-six-courses-bar-chart"
);
const pieChartTopFivePrograms = document.getElementById(
  "top-five-programs-pie-chart"
);

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
  // Create charts
  createBarChart(topSixCourses, "Antal sökande", barChartTopSixCourses);
  createPieChart(topFivePrograms, "Antal sökande", pieChartTopFivePrograms);
}

displayData("https://studenter.miun.se/~mallar/dt211g/");

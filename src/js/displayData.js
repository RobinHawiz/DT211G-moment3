/**
 * @file Displays data in various ways.
 * @requires module:fetchData
 * @requires module:convertData.convertMiunStatsData
 * @requires module:sortData.sortMiunStatsData
 * @requires module:createCharts.createBarChart
 * @requires module:createCharts.createPieChart
 */

const { fetchData } = require("./modules/fetchData");
const { convertMiunStatsData } = require("./modules/convertData");
const { sortMiunStatsData } = require("./modules/sortData");
const { createBarChart, createPieChart } = require("./modules/createCharts");

/**
 * Displays data in various charts created with the {@link https://www.chartjs.org/|Chart.js} library.
 * @param {string} url url that links to a (publicly accessible) JSON data source.
 */
async function displayDataWithChart(url) {
  // HTML elements that will be used to render the charts.
  /**
   * HTML canvas element where a bar chart will be rendered.
   * @type {HTMLElement}
   */
  const barChartTopSixCourses = document.getElementById(
    "top-six-courses-bar-chart"
  );
  /**
   * HTML canvas element where a pie chart will be rendered.
   * @type {HTMLElement}
   */
  const pieChartTopFivePrograms = document.getElementById(
    "top-five-programs-pie-chart"
  );
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

displayDataWithChart("https://studenter.miun.se/~mallar/dt211g/");

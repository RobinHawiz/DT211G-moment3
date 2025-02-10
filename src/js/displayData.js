import Chart from "chart.js/auto";
const { fetchData } = require("./fetchData");
const { convertMiunStatsData } = require("./convertData");
const { sortMiunStatsData } = require("./sortData");
const barChartTopSixCourses = document.getElementById(
  "top-six-courses-bar-chart"
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
  createBarChart(topSixCourses);
}

function createBarChart(topSixCourses) {
  new Chart(barChartTopSixCourses, {
    type: "bar",
    data: {
      labels: [
        topSixCourses[0][1].split(" "),
        topSixCourses[1][1].split(" "),
        topSixCourses[2][1].split(" "),
        topSixCourses[3][1].split(" "),
        topSixCourses[4][1].split(" "),
        topSixCourses[5][1].split(" "),
      ],
      datasets: [
        {
          label: "Antal sökande",
          data: [
            topSixCourses[0][3],
            topSixCourses[1][3],
            topSixCourses[2][3],
            topSixCourses[3][3],
            topSixCourses[4][3],
            topSixCourses[5][3],
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          titleFont: {
            size: () => {
              if (window.innerWidth > 610) {
                console.log("14");
                return 14;
              } else if (window.innerWidth > 390) {
                console.log("10");
                return 12;
              } else {
                return 10;
              }
            },
          },
          callbacks: {
            title: (context) => {
              return context[0].label.replaceAll(",", " ");
            },
          },
        },
      },
      scales: {
        x: {
          display: () => {
            return window.innerWidth > 610 ? true : false;
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

displayData("https://studenter.miun.se/~mallar/dt211g/");

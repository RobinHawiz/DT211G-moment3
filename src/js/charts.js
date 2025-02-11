import Chart from "chart.js/auto";
const backgroundColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];
const borderColors = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];

function chartConfig(dataArr) {
  let labels = [];
  let data = [];
  let backgroundColor = [];
  let borderColor = [];
  for (let i = 0; i < dataArr.length; i++) {
    labels.push(dataArr[i][1].split(" "));
    data.push(dataArr[i][3]);
    backgroundColor.push(backgroundColors[i % backgroundColors.length]);
    borderColor.push(borderColors[i % borderColors.length]);
  }
  return { labels, data, backgroundColor, borderColor };
}

export function createBarChart(dataArr, label, barChart) {
  const { labels, data, backgroundColor, borderColor } = chartConfig(dataArr);
  new Chart(barChart, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          backgroundColor,
          borderColor,
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
            return window.innerWidth > 630 ? true : false;
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
export function createPieChart(dataArr, label, pieChart) {
  const { labels, data, backgroundColor, borderColor } = chartConfig(dataArr);
  new Chart(pieChart, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          align: "middle",
          display: () => {
            return window.innerWidth > 600 ? true : false;
          },
        },
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
        },
      },
    },
  });
}

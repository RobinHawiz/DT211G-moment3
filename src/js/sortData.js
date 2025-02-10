export function sortMiunStatsData(data) {
  // Descending order (we compare the total amount of applicants)
  data.sort((a, b) => b[3] - a[3]);
}

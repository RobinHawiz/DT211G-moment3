/**
 * Convert data module
 * @module sortData
 */

/**
 * Sorts a given array with ConvertedMiunData objects as elements in descending order by the total number of applicants.
 * @param {Array<ConvertedMiunData>} data see typedef in {@link module:convertData}.
 */
export function sortMiunStatsData(data) {
  data.sort((a, b) => b[3] - a[3]);
}

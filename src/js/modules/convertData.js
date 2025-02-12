/**
 * Convert data module
 * @module convertData
 */

/**
 * Specific JSON data coming from mid sweden university that has been parsed by {@link module:fetchData}.
 * @typedef MiunData
 * @type {Object}
 * @property {string} type indicates whether the data represents a course or a program
 * @property {string} name name of the course or program
 * @property {string} applicantsFirstHand total amount of first hand applicants
 * @property {string} applicants total amount of applicants
 */

/**
 * {@link MiunData} object converted into an array.
 * @typedef ConvertedMiunData
 * @type {array}
 * @property {string} 0 - indicates whether the data represents a course or a program
 * @property {string} 1 - name of the course or program
 * @property {string} 2 - total amount of first hand applicants
 * @property {string} 3 - total amount of applicants
 */

/**
 * Converts MiunData to ConvertedMiunData and separates it into two distinct arrays based on their type (course or program).
 * @param {Array<MiunData>} data see typedef for the MiunData object.
 * @returns {{Array<ConvertedMiunData>, Array<ConvertedMiunData>}} an object consisting of two arrays: the first contains all ConvertedMiunData with the type 'Kurs' (course), and the second contains those with the type 'Program'.
 */
export function convertMiunStatsData(data) {
  let dataArrCourses = [];
  let dataArrPrograms = [];
  data.forEach((obj) => {
    if (obj["type"] === "Kurs") {
      // We convert objects into arrays in order to be able to utilize array methods later on.
      dataArrCourses.push([...Object.values(obj)]);
    }
    // obj[type] === "Program", probably...
    else {
      dataArrPrograms.push([...Object.values(obj)]);
    }
  });
  return { dataArrCourses, dataArrPrograms };
}

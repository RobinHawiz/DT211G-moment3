export function convertMiunStatsData(data) {
  let dataArrCourses = [];
  let dataArrPrograms = [];
  data.forEach((obj) => {
    if (obj["type"] === "Kurs") {
      // We convert objects into arrays in order to be able to utilize array methods later on.
      dataArrCourses.push([...Object.values(obj)]);
    }
    // object[type] === "Program", probably...
    else {
      dataArrPrograms.push([...Object.values(obj)]);
    }
  });
  return { dataArrCourses, dataArrPrograms };
}

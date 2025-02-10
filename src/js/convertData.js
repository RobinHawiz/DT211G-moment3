export function convertData(data) {
  let output = [];
  data.forEach((obj) => {
    // We convert objects into arrays in order to be able to utilize array methods later on.
    output.push([...Object.values(obj)]);
  });
  return output;
}

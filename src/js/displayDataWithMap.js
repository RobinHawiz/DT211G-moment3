/**
 * @file Displays data on a map by embedding {@link https://www.openstreetmap.org|OpenStreetMap} with an iframe element.
 * @requires module:fetchData
 */

const { fetchData } = require("./modules/fetchData");

/**
 * HTML form element that holds an input and button element
 * @type {HTMLElement}
 */
const form = document.querySelector("form");
/**
 * HTML iframe element where a map will be rendered.
 * @type {HTMLElement}
 */
const iframe = document.querySelector("iframe");

/**
 * On submit, displays a map that is marked on an address given by the input value when the user presses the submit button.
 * @type {HTMLElement} the form that allows us to access the input value given by a user on submit.
 * @listens document#submit fires when the user presses the submit button.
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const address = formData.get("address");
  const addressQuery = createQueryString(address);
  displayDataWithMap(
    `https://nominatim.openstreetmap.org/search?q=${addressQuery}&format=json`
  );
});

/**
 * Displays data with the use of a map and a marker.
 * @param {string} url url that links to a (publicly accessible) JSON data source.
 */
async function displayDataWithMap(url) {
  const data = await fetchData(url);
  if (data.length > 0) {
    const lat = data[0]["lat"];
    const lon = data[0]["lon"];
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&marker=${lat}%2C${lon}&layers=ND`;
    iframe.setAttribute("src", src);
  }
}

/**
 * converts a string into a query string.
 * @param {string} str the string we want to "querify".
 * @returns a "queryfied" string.
 */
function createQueryString(str) {
  const chars = {
    " ": "+",
    ",": "%2C",
  };
  return str.replace(/ |,/g, (c) => chars[c]);
}

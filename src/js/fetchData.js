export async function fetchData(url) {
  let response = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Det uppstod ett fel:", error);
    });
  return response;
}

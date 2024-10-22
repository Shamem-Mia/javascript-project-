// finding element
let form = document.querySelector(".search-form");
let searchBtn = document.getElementById("search-btn");
let searchData = document.getElementById("search-data");
let search = document.getElementById("search");
let info = document.querySelector(".info");
const searchPlace = async (placeName) => {
  // Step 1: Get the latitude and longitude using the geocoding API
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=1&appid=996bcc79fd129433b0e53abada87d18f`;

  try {
    const geoRes = await fetch(geoUrl);
    if (!geoRes.ok) {
      throw new Error(`Geocoding error: ${geoRes.status}`);
    }
    const geoData = await geoRes.json();

    if (geoData.length === 0) {
      throw new Error("Location not found");
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    // Step 2: Use the latitude and longitude to get weather data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=996bcc79fd129433b0e53abada87d18f`;

    const weatherRes = await fetch(weatherUrl);
    if (!weatherRes.ok) {
      throw new Error(`Weather API error: ${weatherRes.status}`);
    }
    const weatherData = await weatherRes.json();

    showData(weatherData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showData = (data) => {
  console.log(data);
  searchData.innerHTML = `
  <h3>Temperature :  </h3>
  <h2 id="temp">    ${data.main.temp} °C</h2>
 
  `;
  info.innerHTML = `
        <h2>Feels like  : ${data.main.feels_like} °C</h2>
        
        `;
};

{
  /* 
          <h2>${$data.weather.description}</h2>
        <h2>Wind Speed  :  ${data.wind.speed}</h2> */
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let placeName = search.value;
  searchPlace(placeName);
});

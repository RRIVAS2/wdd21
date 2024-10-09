// select HTML elements in the document
const currentTemp = document.querySelector('#weather-temp'); // Target a specific element for the temperature
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'a983813151420642bae3d0325507b398';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${apiKey}&units=metric`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // Display the weather data
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);   
    }
}

apiFetch();

function displayResults(data) {
    console.log('hello');

    // Update only the temperature in the #weather-temp element
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;;

    // Update the weather icon source and alt attribute
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    // Update the figcaption with the weather description
    captionDesc.textContent = data.weather[0].description;
}




// API URL for the 3-day weather forecast (using lat/lon for location)

const apiKey2 = 'a983813151420642bae3d0325507b398';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=${apiKey2}&units=metric`;

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data); // Check if the data is fetched correctly
            displayForecast(data); // Display the forecast data
        } else {
            throw Error(`API error: ${await response.text()}`);
        }
    } catch (error) {
        console.error("Error fetching the forecast data:", error);
    }
}

fetchForecast();

function displayForecast(data) {
    const forecastContainer = document.querySelector('.forecast-container');

    // Check if `list` exists in the API response
    if (!data || !data.list) {
        console.error("No forecast data available");
        return;
    }

    // Filter for the next 3 days (assuming the forecast is in 3-hour intervals)
    const threeDaysForecast = data.list.filter((forecast, index) => index % 8 === 0).slice(1, 4);

    // Loop through the forecast for the next 3 days
    threeDaysForecast.forEach(day => {
        const forecastElement = document.createElement('div');
        forecastElement.classList.add('day-forecast');

        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        
        // Get the date and format it
        const date = new Date(day.dt_txt);
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create and append forecast elements for each day
        forecastElement.innerHTML = `
            <p>${formattedDate}</p>
            <img src="${icon}" alt="${day.weather[0].description}" class="forecast-icon">
            <p>${Math.round(day.main.temp)}&deg;C</p>
            <figcaption>${day.weather[0].description}</figcaption>
        `;

        // Append each day's forecast to the container
        forecastContainer.appendChild(forecastElement);
    });
}
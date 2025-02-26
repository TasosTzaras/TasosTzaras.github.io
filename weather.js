let cityName = document.getElementById('cityName');
let id = '298b597e70725c1bbbb1db8685c84c76';
let button = document.getElementById('searchBtn');
let form = document.querySelector("#weather-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (cityName.value.trim() !== '') {
        searchWeather(cityName.value.trim());
    }
});

const searchWeather = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod == '200') {
                let cityName = data.name;
                let temperature = data.main.temp;
                let humidity = data.main.humidity;
                let description = data.weather[0].description;
                let timezoneOffset = data.timezone; // Offset in seconds
                let localTime = getLocalTime(timezoneOffset);
                let icon = data.weather[0].icon;
                let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

                // Update the weatherResults div
                weatherResults.innerHTML = `
                    <h3>${cityName}</h3>
                    <p><strong>Time:</strong> ${localTime}</p>
                    <img src="${iconUrl}" alt="Weather Icon">
                    <p><strong>Temperature:</strong> ${temperature}°C</p>
                    <p><strong>Condition:</strong> ${description}</p>
                    <p><strong>Humidity:</strong> ${humidity}%</p>
                `;
            } else {
                weatherResults.innerHTML = `<p style="color: red;">City not found. Please try again.</p>`;
            }

        })
        .catch(error => console.error("Error fetching weather data:", error));
};

const getLocalTime = (offset) => {
    let utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000; // Get UTC time in milliseconds
    let localTime = new Date(utc + (offset * 1000)); // Adjust for the city's timezone
    return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // Format the time without seconds
};

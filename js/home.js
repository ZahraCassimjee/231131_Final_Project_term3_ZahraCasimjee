$(document).ready(function() {
    // Make the API call to get weather data
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=64420d889e704b43c562865c8fbaf006",
        success: function(data) {
            const location = data.name + ", " + data.sys.country;
            const temperatureCelsius = Math.round(data.main.temp - 273.15);
            const weatherConditions = data.weather[0].description;
            const pressure = data.main.pressure + " hPa";
            const humidity = data.main.humidity + "%";

            const weatherInfo = `
                Location: ${location}<br>
                Temperature: ${temperatureCelsius}°C<br>
                Weather Conditions: ${weatherConditions}<br>
                Pressure: ${pressure}<br>
                Humidity: ${humidity}
            `;

            // Display weather information
            $("#weather-widget").html(weatherInfo);
        }
    });
});




// OpenWeatherMap API key
const apiKey = 'c7fc519cb690f0e7d8c8a5325e0c4c50';
const city = 'Kigali'; 

// OpenWeatherMap API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const iconCode = data.weather[0].icon;

    
        document.getElementById('weather-description').innerText = weatherDescription;
        document.getElementById('temperature').innerText = `${temperature}°C`;
        
    
        const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById('weather-icon').src = weatherIconUrl;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-description').innerText = 'Weather information could not be loaded.';
        document.getElementById('temperature').innerText = 'Temperature data unavailable.';
    });

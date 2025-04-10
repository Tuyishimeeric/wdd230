
async function fetchWeather() {
    const apiKey = 'c7fc519cb690f0e7d8c8a5325e0c4c50';
    const city = 'London';
    
    // Fetch the weather data
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
    
    if (!response.ok) {
      console.error('Failed to fetch weather data');
      return;
    }
  
    const data = await response.json();
  
    // Display the temperature and description
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
  
    // Set the weather description and temperature in the DOM
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('description').textContent = description;
  
    // Set the weather icon dynamically
    const weatherIconImg = document.getElementById('weather-icon');
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconImg.src = iconUrl;
  }
  
  fetchWeather();
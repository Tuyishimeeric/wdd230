// Get the current year dynamically
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = 'Last modified: ' + lastModifiedDate;

// Mock data for weather and visits
const mockWeather = "25°C, Sunny";
const mockVisits = 250;

// Update weather and visits data dynamically
document.getElementById('weather-info').textContent = mockWeather;
document.getElementById('visit-count').textContent = mockVisits;

// Set current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = 'Last modified: ' + lastModifiedDate;

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞';  // Change icon to sun for light mode
    } else {
        darkModeToggle.textContent = '🌙';  // Change icon to moon for dark mode
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

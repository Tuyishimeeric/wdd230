// Set current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// Dark Mode Toggle with LocalStorage
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to apply dark mode
const applyDarkMode = (enabled) => {
    body.classList.toggle('dark-mode', enabled);
    darkModeToggle.textContent = enabled ? '🌞' : '🌙';
};

// Check saved preference
const savedDarkMode = localStorage.getItem('dark-mode') === 'enabled';
applyDarkMode(savedDarkMode);

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDarkMode ? '🌞' : '🌙';
});

// Hamburger Menu Toggle with Accessibility
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle menu
hamburger.addEventListener('click', () => {
    const isExpanded = navbar.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close menu on resize if switching to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

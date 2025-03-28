// Set current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Lazy loading for images below the fold (business spotlights and iframe)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]');
    
    images.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded'); // Optional: Add a class when loaded for animation or other purposes.
        });
    });
};

lazyLoadImages();  // Invoke on page load
// Get the current date
const currentDate = Date.now();

// Get last visit date from localStorage, if available
const lastVisit = localStorage.getItem('lastVisit');
const lastVisitMessage = document.getElementById('last-visit-message');

// If it's the user's first visit
if (!lastVisit) {
    localStorage.setItem('lastVisit', currentDate);
    lastVisitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    // Calculate time difference in days
    const timeDiff = currentDate - lastVisit;
    const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysSinceLastVisit < 1) {
        lastVisitMessage.textContent = 'Back so soon! Awesome!';
    } else {
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        lastVisitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', currentDate);
}

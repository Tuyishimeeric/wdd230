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

// Hamburger Menu Toggle - Only Active in Mobile View
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

function isMobileView() {
    return window.innerWidth <= 768;
}

function toggleMenu() {
    if (isMobileView()) {
        navbar.classList.toggle('show');
    }
}

hamburger.addEventListener('click', toggleMenu);

// Close menu on window resize if not in mobile view
window.addEventListener('resize', () => {
    if (!isMobileView()) {
        navbar.classList.remove('show');
    }
});

// Lazy loading for images below the fold (business spotlights and iframe)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]');

    images.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded');
        });
    });
};

lazyLoadImages();

// Page Visit Tracker
const currentDate = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const lastVisitMessage = document.getElementById('last-visit-message');

if (!lastVisit) {
    localStorage.setItem('lastVisit', currentDate);
    lastVisitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const timeDiff = currentDate - lastVisit;
    const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysSinceLastVisit < 1) {
        lastVisitMessage.textContent = 'Back so soon! Awesome!';
    } else {
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        lastVisitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }

    localStorage.setItem('lastVisit', currentDate);
}

document.addEventListener('DOMContentLoaded', () => {
    // === Footer Dates ===
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

    // === Dark Mode Toggle with Persistence ===
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '🌞';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDark ? '🌞' : '🌙';
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    });

    // === Hamburger Menu Toggle ===
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

    // Accessibility: allow keyboard toggle with Enter or Space
    hamburger.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            navbar.classList.toggle('show');
        }
    });

    // === Lazy Loading Enhancement ===
    const lazyLoadImages = () => {
        const lazyItems = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]');
        
        lazyItems.forEach((item) => {
            item.addEventListener('load', () => {
                item.classList.add('loaded');
            });
        });
    };

    lazyLoadImages();

    // === Last Visit Message ===
    const currentDate = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');
    const lastVisitMessage = document.getElementById('last-visit-message');

    if (!lastVisit) {
        lastVisitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysSince = Math.floor((currentDate - lastVisit) / (1000 * 3600 * 24));
        lastVisitMessage.textContent = daysSince < 1
            ? 'Back so soon! Awesome!'
            : `You last visited ${daysSince} ${daysSince === 1 ? 'day' : 'days'} ago.`;
    }

    localStorage.setItem('lastVisit', currentDate);
});

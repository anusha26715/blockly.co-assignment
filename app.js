
// Function to load a page into the #content container
function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById('content');
      if (container) {
        container.innerHTML = data;
      }
    })
    .catch(() => {
      document.getElementById('content').innerHTML = '<p>Page not found.</p>';
    });
}

// Initial load — default to home.html
document.addEventListener('DOMContentLoaded', () => {
  loadPage('home.html');
});

// Navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const page = this.getAttribute('href').replace('#', '') + '.html';
    loadPage(page);
  });
});



function applySavedTheme() {
  const currentTheme = localStorage.getItem('theme');
  const isDark = currentTheme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);

  const iconClass = isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill';
  const color = isDark ? '#ffe600' : '';

  const mobileIcon = document.getElementById('themeToggleMobile');
  const desktopIcon = document.getElementById('themeToggleDesktop');

  mobileIcon.className = `bi ${iconClass}`;
  desktopIcon.className = `bi ${iconClass}`;

  mobileIcon.style.color = color;
  desktopIcon.style.color = color;;
}

function toggleTheme(iconId) {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Update both icons
  const newIcon = isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill';
  const color = isDark ? '#ffe600' : ''; // Yellow sun, reset for moon

  const mobileIcon = document.getElementById('themeToggleMobile');
  const desktopIcon = document.getElementById('themeToggleDesktop');

  mobileIcon.className = `bi ${newIcon}`;
  desktopIcon.className = `bi ${newIcon}`;

  mobileIcon.style.color = color;
  desktopIcon.style.color = color;
}

// Applying theme on load
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();

  // Added click events
  document.getElementById('themeToggleMobile').addEventListener('click', () => toggleTheme('themeToggleMobile'));
  document.getElementById('themeToggleDesktop').addEventListener('click', () => toggleTheme('themeToggleDesktop'));
});

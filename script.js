// Theme toggler logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '🌙';
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
  }
  localStorage.setItem('theme', theme);
}

// Load theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

// Scroll to top button logic
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// script.js
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeIcon.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeIcon.textContent = isDark ? '🌙' : '🌞';
});

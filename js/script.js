// Tema Light/Dark toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

// La încărcare, setează tema după preferința salvată sau implicit dark
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('dark');
  }
});

// Slider recenzii
const reviews = document.querySelectorAll('.review');
const prevBtn = document.getElementById('prev-review');
const nextBtn = document.getElementById('next-review');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((r, i) => {
    r.classList.remove('active');
    if (i === index) r.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
});
nextBtn.addEventListener('click', () => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
});

// Auto slide recenzii la 7 secunde
setInterval(() => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}, 7000);

// Butoane "Cumpără" produse - alert simplu
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Produs adăugat în coș!');
  });
});

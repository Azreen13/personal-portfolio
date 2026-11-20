// 1. Fungsi tukar tab Technical Skills & Soft Skills
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach((panel) => panel.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const targetPanel = document.getElementById(btn.dataset.tab);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});

// 2. Isi lebar progress bar mengikut data-width
document.querySelectorAll('.progress-fill').forEach((bar) => {
  bar.style.width = bar.dataset.width;
});

// 3. Menu Hamburger (paparan telefon)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', () => {
    const isExpanded = navLinks.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isExpanded);
  });
}

// 4. Tukar & Simpan Tema Dark / Light Mode
const themeToggle = document.getElementById('themeToggle');

// Semak pilihan tema terakhir yang disimpan dalam pelayar
if (localStorage.getItem('portfolioTheme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = 'Light Mode';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    // Tukar teks butang & simpan status ke localStorage
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('portfolioTheme', isDark ? 'dark' : 'light');
  });
}

// 5. Tahun semasa di footer & butang Scroll to Top
const yearSpan = document.getElementById('currentYear');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
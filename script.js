const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');
const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

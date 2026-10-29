// js/navbar.js – diisi oleh anggota yang bertanggung jawab (lihat docs/ISSUES.md)
// ===== [Navbar] menu mobile =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
});
navMenu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);
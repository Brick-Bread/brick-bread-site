document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('nav-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const closeMenu = () => { menu.hidden = true; button.setAttribute('aria-expanded','false'); };
  button.addEventListener('click', () => { menu.hidden = !menu.hidden; button.setAttribute('aria-expanded',String(!menu.hidden)); });
  menu.addEventListener('click', e => { if(e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && !menu.hidden) { closeMenu(); button.focus(); } });
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold:0.1 });
    document.documentElement.classList.add('js-reveals');
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }
});
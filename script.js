function debounce(fn, wait) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : (root.getAttribute('data-theme') === 'dark' ? 'dark' : null);
    const next = current === 'light' ? 'dark' : (current === 'dark' ? 'light' : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light'));
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const tableWrap = document.querySelector('.table-wrap');
  const table = document.querySelector('table');
  if (!tableWrap || !table) return;

  function syncLabelsAndStack() {
    const ths = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const tds = Array.from(row.querySelectorAll('td'));
      tds.forEach((td, i) => td.setAttribute('data-label', ths[i] || ''));
    });
    if (window.innerWidth <= 520) tableWrap.classList.add('stacked'); else tableWrap.classList.remove('stacked');
  }

  const onResize = debounce(syncLabelsAndStack, 120);
  syncLabelsAndStack();
  window.addEventListener('resize', onResize);
});

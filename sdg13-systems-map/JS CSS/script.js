
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-target]');
  toggles.forEach(t => {
    t.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-target');
      const g = document.getElementById(id);
      if(!g) return;
      if(e.target.checked){ g.classList.add('highlight'); }
      else{ g.classList.remove('highlight'); }
    });
  });
});

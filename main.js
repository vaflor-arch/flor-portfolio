const grid = document.querySelector('#project-grid');
const placeholder = `<div class="project-art"><span>FLOR<span>BEE</span></span><i></i></div>`;
function renderProjects(filter = 'all') {
  const projects = siteContent.projects.filter(p => filter === 'all' || p.category === filter);
  grid.innerHTML = projects.map((p, i) => `<article class="project-card">
    <div class="project-image">${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy">` : placeholder}<span class="project-index">0${i + 1}</span></div>
    <div class="project-info"><p class="project-type">${p.type} · ${p.category}</p><h3>${p.title}</h3><p>${p.description}</p><div class="project-bottom"><span>${p.tools.join(' · ')}</span>${p.url ? `<a href="${p.url}" target="_blank" rel="noreferrer">View work ↗</a>` : '<span class="coming-soon">Add your link ↗</span>'}</div></div>
  </article>`).join('');
}
renderProjects();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); renderProjects(button.dataset.filter); }));
const menuButton = document.querySelector('.menu-button'); const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
const email = document.querySelector('#email-link'); email.href = `mailto:${siteContent.email}`;
const linkedin = document.querySelector('#linkedin-link'); linkedin.href = siteContent.linkedIn;
const form = document.querySelector('#contact-form-link'); form.href = siteContent.formUrl;
['#about-systeme-link', '#about-systeme-button', '#blogs-systeme-button'].forEach(selector => {
  const link = document.querySelector(selector);
  if (link && !siteContent.systemeUrl.includes('YOUR-SYSTEME')) {
    link.href = siteContent.systemeUrl;
    link.target = '_blank';
    link.rel = 'noreferrer';
  }
});

'use strict';

// ---------- Helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ---------- Year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Mobile menu ----------
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  // Close menu on navigation
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.2 });

$$('.reveal').forEach(el => io.observe(el));

// ---------- Projects data (shared via data/projects.js) ----------
// Ensure data/projects.js is included in HTML before this script.
const { categories, projects, projectsByCategory } = window.PROJECTS_DATA || { categories: [], projects: {}, projectsByCategory: {} };

// ---------- Render categories ----------
const categoryBar = document.getElementById('categoryBar');
const projectsContainer = document.getElementById('projectsContainer');
let activeKey = categories[0].key;

function renderCategoryPills() {
  if (!categoryBar) return;
  categoryBar.innerHTML = '';
  for (const c of categories) {
    const btn = document.createElement('button');
    btn.className = 'category-pill';
    btn.type = 'button';
    btn.textContent = c.label;
    btn.setAttribute('data-key', c.key);
    btn.setAttribute('aria-selected', c.key === activeKey ? 'true' : 'false');
    btn.addEventListener('click', () => {
      activeKey = c.key;
      renderCategoryPills();
      renderProjects();
    });
    categoryBar.appendChild(btn);
  }
}

// ---------- Render projects ----------
function cardTemplate(p) {
  return `
    <article class="group rounded-xl border border-white/15 bg-white/5 overflow-hidden hover:bg-white/10 transition reveal">
      <div class="aspect-video overflow-hidden bg-white/5">
        <img src="${p.img}" alt="${p.title}" class="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
      </div>
      <div class="p-4 space-y-1">
        <h3 class="font-semibold">${p.title}</h3>
        <p class="text-white/60 text-sm">${p.desc}</p>
        <a href="${p.href}" target="_blank" class="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          View <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </a>
      </div>
    </article>
  `;
}

function renderProjects() {
  if (!projectsContainer) return;
  const slugs = (projectsByCategory && projectsByCategory[activeKey]) || [];
  const list = slugs.map(slug => {
    const p = projects[slug];
    return {
      title: p.title,
      desc: p.desc,
      img: p.img,
      href: `./project.html?p=${encodeURIComponent(slug)}`
    };
  });
  projectsContainer.innerHTML = list.map(cardTemplate).join('');
  // re-attach reveals for new nodes
  $$('.reveal', projectsContainer).forEach(el => io.observe(el));
}

renderCategoryPills();
renderProjects();

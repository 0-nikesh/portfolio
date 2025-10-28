'use strict';

// small helpers
const $ = (sel, root=document) => root.querySelector(sel);
const params = new URLSearchParams(location.search);
const slug = params.get('p');

const setYear = () => { const y=$('#year'); if (y) y.textContent = new Date().getFullYear(); };
setYear();

const { projects } = window.PROJECTS_DATA || { projects: {} };
const proj = slug && projects[slug] ? projects[slug] : null;

function absoluteUrl(relativePath){
  try {
    const url = new URL(relativePath, location.origin + location.pathname.replace(/[^\/]*$/, ''));
    return url.href;
  } catch { return relativePath; }
}

function setText(id, text){ const el = document.getElementById(id); if (el) el.textContent = text; }
function setAttr(id, attr, val){ const el = document.getElementById(id); if (el) el.setAttribute(attr, val); }

function initTabs(){
  const tabs = Array.from(document.querySelectorAll('#viewerTabs [data-tab]'));
  const panels = {
    yt: document.getElementById('tab-yt'),
    pdf: document.getElementById('tab-pdf'),
    pptx: document.getElementById('tab-pptx')
  };
  tabs.forEach(btn => btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-tab');
    tabs.forEach(b => b.setAttribute('aria-selected', b===btn ? 'true' : 'false'));
    Object.entries(panels).forEach(([k,el]) => { if (!el) return; el.classList.toggle('hidden', k!==key); });
  }));
}

function build(){
  if (!proj){
    setText('projTitle', 'Project Not Found');
    setText('projDesc', 'The project you requested does not exist.');
    const img = document.getElementById('projImage'); if (img) img.style.display = 'none';
    document.getElementById('viewerTabs').style.display = 'none';
    return;
  }

  setText('projTitle', proj.title);
  setText('projDesc', proj.desc || '');
  setAttr('projRepo', 'href', proj.repo || '#');
  setAttr('projImage', 'src', proj.img || '');

  // YouTube
  const ytId = proj.youtubeId || '';
  const ytFrame = document.getElementById('ytFrame');
  if (ytId && ytFrame){ ytFrame.src = `https://www.youtube.com/embed/${encodeURIComponent(ytId)}`; }
  else { document.getElementById('tab-yt').classList.add('hidden'); }

  // PDF
  const pdf = proj.pdfPath || '';
  const pdfFrame = document.getElementById('pdfFrame');
  if (pdf && pdfFrame){ pdfFrame.src = `${pdf}#view=FitH`; }
  else { document.getElementById('tab-pdf').classList.add('hidden'); }

  // PPTX via Office embed within this page (no new tab)
  const pptx = proj.pptxPath || '';
  const pptxFrame = document.getElementById('pptxFrame');
  if (pptx && pptxFrame){
    const fileUrl = absoluteUrl(pptx);
    const office = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;
    pptxFrame.src = office;
  } else {
    document.getElementById('tab-pptx').classList.add('hidden');
  }

  initTabs();
}

build();

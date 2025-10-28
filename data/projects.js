// Central project data used by both index and project pages
// Edit here to add or update projects

window.PROJECTS_DATA = (function(){
  const categories = [
    { key: 'aiml', label: 'AI/ML Projects' },
    { key: 'flutter', label: 'Flutter Projects' },
    { key: 'mern', label: 'MERN Projects' },
    { key: 'figma', label: 'Figma Designs' },
    { key: 'awards', label: 'Award Winning' },
  ];

  // Project catalog keyed by slug
  const projects = {
    'vision-assistant': {
      slug: 'vision-assistant',
      title: 'Vision Assistant',
      desc: 'Realtime object captioning with web transformer.',
      img: './assets/images/project-aiml-1.svg',
      repo: 'https://github.com/yourhandle/vision-assistant',
      youtubeId: 'dQw4w9WgXcQ', // replace with your video id
      pdfPath: './assets/docs/vision-assistant.pdf',
      pptxPath: './assets/docs/vision-assistant.pptx',
      category: 'aiml'
    },
    'chat-finetuner': {
      slug: 'chat-finetuner',
      title: 'Chat Fine‑Tuner',
      desc: 'Lightweight RAG pipeline for domain Q&A.',
      img: './assets/images/project-aiml-2.svg',
      repo: 'https://github.com/yourhandle/chat-finetuner',
      youtubeId: 'dQw4w9WgXcQ',
      pdfPath: './assets/docs/chat-finetuner.pdf',
      pptxPath: './assets/docs/chat-finetuner.pptx',
      category: 'aiml'
    },
    'style-transfer-lab': {
      slug: 'style-transfer-lab',
      title: 'Style Transfer Lab',
      desc: 'Fast style transfer on device with WASM.',
      img: './assets/images/project-aiml-3.svg',
      repo: 'https://github.com/yourhandle/style-transfer-lab',
      youtubeId: 'dQw4w9WgXcQ',
      pdfPath: './assets/docs/style-transfer-lab.pdf',
      pptxPath: './assets/docs/style-transfer-lab.pptx',
      category: 'aiml'
    },

    'habit-orbit': {
      slug: 'habit-orbit', title: 'Habit Orbit', desc: 'Gamified habits with clean arch.',
      img: './assets/images/project-flutter-1.svg', repo: 'https://github.com/yourhandle/habit-orbit',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/habit-orbit.pdf', pptxPath: './assets/docs/habit-orbit.pptx', category: 'flutter'
    },
    'scanpay': {
      slug: 'scanpay', title: 'ScanPay', desc: 'QR wallet with riverpod/state.',
      img: './assets/images/project-flutter-2.svg', repo: 'https://github.com/yourhandle/scanpay',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/scanpay.pdf', pptxPath: './assets/docs/scanpay.pptx', category: 'flutter'
    },
    'travel-map': {
      slug: 'travel-map', title: 'Travel Map', desc: 'Offline maps & guides.',
      img: './assets/images/project-flutter-3.svg', repo: 'https://github.com/yourhandle/travel-map',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/travel-map.pdf', pptxPath: './assets/docs/travel-map.pptx', category: 'flutter'
    },

    'taskforge': {
      slug: 'taskforge', title: 'TaskForge', desc: 'Kanban + realtime collab.',
      img: './assets/images/project-mern-1.svg', repo: 'https://github.com/yourhandle/taskforge',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/taskforge.pdf', pptxPath: './assets/docs/taskforge.pptx', category: 'mern'
    },
    'shoplite': {
      slug: 'shoplite', title: 'ShopLite', desc: 'E‑commerce starter with auth.',
      img: './assets/images/project-mern-2.svg', repo: 'https://github.com/yourhandle/shoplite',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/shoplite.pdf', pptxPath: './assets/docs/shoplite.pptx', category: 'mern'
    },
    'devjournal': {
      slug: 'devjournal', title: 'DevJournal', desc: 'MDX blog with comments.',
      img: './assets/images/project-mern-3.svg', repo: 'https://github.com/yourhandle/devjournal',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/devjournal.pdf', pptxPath: './assets/docs/devjournal.pptx', category: 'mern'
    },

    'design-system': {
      slug: 'design-system', title: 'Design System', desc: 'Tokens, components, docs.',
      img: './assets/images/project-figma-1.svg', repo: 'https://github.com/yourhandle/design-system',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/design-system.pdf', pptxPath: './assets/docs/design-system.pptx', category: 'figma'
    },
    'mobile-banking': {
      slug: 'mobile-banking', title: 'Mobile Banking', desc: 'Flows and micro‑interactions.',
      img: './assets/images/project-figma-2.svg', repo: 'https://github.com/yourhandle/mobile-banking',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/mobile-banking.pdf', pptxPath: './assets/docs/mobile-banking.pptx', category: 'figma'
    },
    'saas-dashboard': {
      slug: 'saas-dashboard', title: 'SaaS Dashboard', desc: 'Data viz & theming.',
      img: './assets/images/project-figma-3.svg', repo: 'https://github.com/yourhandle/saas-dashboard',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/saas-dashboard.pdf', pptxPath: './assets/docs/saas-dashboard.pptx', category: 'figma'
    },

    'awwwards-hm': {
      slug: 'awwwards-hm', title: 'Awwwards HM', desc: 'Futuristic landing concept.',
      img: './assets/images/project-award-1.svg', repo: 'https://github.com/yourhandle/awwwards-hm',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/awwwards-hm.pdf', pptxPath: './assets/docs/awwwards-hm.pptx', category: 'awards'
    },
    'dribbble-top9': {
      slug: 'dribbble-top9', title: 'Dribbble Top 9', desc: 'Motion exploration series.',
      img: './assets/images/project-award-2.svg', repo: 'https://github.com/yourhandle/dribbble-top9',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/dribbble-top9.pdf', pptxPath: './assets/docs/dribbble-top9.pptx', category: 'awards'
    },
    'hackathon-winner': {
      slug: 'hackathon-winner', title: 'Hackathon Winner', desc: 'AI productivity tool.',
      img: './assets/images/project-award-3.svg', repo: 'https://github.com/yourhandle/hackathon-winner',
      youtubeId: 'dQw4w9WgXcQ', pdfPath: './assets/docs/hackathon-winner.pdf', pptxPath: './assets/docs/hackathon-winner.pptx', category: 'awards'
    },
  };

  // Map categories to project slugs (display order)
  const projectsByCategory = categories.reduce((acc, c) => {
    acc[c.key] = Object.values(projects).filter(p => p.category === c.key).map(p => p.slug);
    return acc;
  }, {});

  return { categories, projects, projectsByCategory };
})();

export const categories = [
  { key: 'featured', label: 'Featured' },
  { key: 'aiml', label: 'AI/ML Projects' },
  { key: 'flutter', label: 'Flutter Projects' },
  { key: 'mern', label: 'Web Apps' },
  { key: 'awards', label: 'Award Winning' },
]

export const projects = {
  // Featured / Case Studies
  'fohormalai': {
    slug: 'fohormalai',
    title: 'Fohormalai – Smart Waste Management System',
    desc: 'Multi-platform waste collection, marketplace, and analytics across Flutter, Django REST, and React Admin.',
    img: 'https://res.cloudinary.com/davmrc5zy/image/upload/v1763480089/logo-fohormalai_ckknik.svg',
    repo: 'https://github.com/0-nikesh/fohormalai', 
    live: '', // Live site link here (optional)
    figma: 'https://www.figma.com/file/fEZyAZ4bqgSsYIpfzgwZ4f/Fohormalai', 
    youtubeUrl: 'https://www.youtube.com/watch?v=D90E6OWJYaw', 
    pdfPath: '/assets/docs/fohormalai.pdf', // Documentation PDF
    pptxPath: 'https://res.cloudinary.com/davmrc5zy/raw/upload/v1763479305/%E0%A4%AB%E0%A5%8B%E0%A4%B9%E0%A5%8B%E0%A4%B0_%E0%A4%AE%E0%A4%B2%E0%A4%BE%E0%A4%88_whrjd2.pptx',
    period: 'Apr 2025 – Oct 2025',
    org: 'Coventry University',
    category: 'featured',
    skills: ['Flutter','Dart','Django REST','React','TypeScript','MongoDB','Tailwind CSS','JWT']
  },
  'vedally': {
    slug: 'vedally',
    title: 'Vedally – Email & SMS Marketing SaaS',
    desc: 'End-to-end brand + product design for a bulk email & SMS platform, from identity to UI systems.',
    img: '/assets/images/project-figma-3.svg',
    repo: '',
    live: 'https://www.vedally.com/',
    figma: 'https://www.figma.com/file/JndeDZzo7hUhU5tGyWJ4l5/Vedally',
    youtubeUrl: '',
    instagramUrl: 'https://www.instagram.com/vedallyofficial/',
    // youtubeId: '',
    // pdfPath: '/assets/docs/vedally.pdf',
    // pptxPath: '',
    period: 'Feb 2025 – May 2025',
    org: 'StableCluster',
    category: 'featured',
    skills: ['Branding','UI/UX','Design Systems','SaaS','Project Management']
  },

  // Featured — Hosting Platform Redesign
  'hosting-redesign': {
    slug: 'hosting-redesign',
    title: 'Web Hosting Platform — Redesign & Frontend Rebuild',
    desc: 'Led a full UI/UX redesign and rebuilt the frontend of an existing hosting platform; navigation simplified and traffic improved as reported by the company.',
    img: '/assets/images/project-mern-1.svg',
    repo: 'https://github.com/0-nikesh/new-prabhuhost',
    live: 'https://www.prabhuhost.com/',
    figma: 'https://www.figma.com/design/10HWTvwlGB5lM9OIjwXHJh/PrabhuHost?node-id=247-169&t=cOiDCVakSHwgIgGG-1',
    instagramUrl:'https://www.instagram.com/prabhuhostnp/',
    // youtubeUrl: '',
    // youtubeId: '',
    // pdfPath: '',
    // pptxPath: '',
    period: '',
    org: 'Stablecluster',
    category: 'featured',
    skills: ['UI/UX','Frontend','Design Systems','React','Tailwind']
  },

  // AI/ML
  'notebooklm-lite': {
    slug: 'notebooklm-lite',
    title: 'NotebookLM Lite – AI Educational Assistant',
    desc: 'Converts PDFs into conversational learning via Gemini, with chaptering, OCR, podcast mode, and privacy-safe parsing.',
    img: '/assets/images/project-aiml-2.svg',
    repo: 'https://github.com/0-nikesh/educational_chatbot',
    live: '',
    figma: '',
    youtubeUrl: 'https://www.youtube.com/watch?v=faoCv6bwvik',
    pdfPath: '/assets/docs/chatbot.pdf',
    pptxPath: '',
    period: 'Jul 2025 – Sep 2025',
    org: 'Coventry University',
    category: 'aiml',
    skills: ['LLM','OCR','Prompt Engineering','TTS','React','TypeScript','Vite','Tailwind']
  },
  'banking-assistant-bot': {
    slug: 'banking-assistant-bot',
    title: 'Banking Assistant Bot – AI KYC Automation',
    desc: 'Prototype robot for KYC automation with NLP, OCR, and facial recognition for faster onboarding.',
    img: '/assets/images/project-aiml-1.svg',
    repo: 'https://github.com/sandeshs0/Banking-Robot-with-NLP-and-Computer-Vision',
    // live: '',
    // figma: '',
    youtubeUrl: '',
    youtubeId: '',
    pdfPath: '/assets/docs/enterprise.pdf',
    // pptxPath: '',
    period: 'Jun 2024 – Aug 2024',
    org: 'Coventry University',
    category: 'aiml',
    skills: ['OpenCV','NLP','OCR','Speech Recognition','Robotics']
  },

  // MERN / Web
  'sajilotantra-web': {
    slug: 'sajilotantra-web',
    title: 'Sajilotantra – Web App (MERN)',
    desc: 'Social platform + civic guidance with posts, moderation, maps, and real-time notifications.',
    img: '/assets/images/project-mern-2.svg',
    repo: 'https://github.com/0-nikesh/web-frontend', // GitHub (web/admin) link here
    live: '',
    figma: 'https://www.figma.com/design/72lQRPRt2vX1BJI5LiUwM0/SajiloTantra?node-id=0-1&t=4fT8cSszVVgqGGdj-1',
    youtubeUrl: 'https://www.youtube.com/watch?v=AhxKULnFgwA', // Web demo link (optional)
    // youtubeId: '',
    // pdfPath: '/assets/docs/sajilotantra-web.pdf',
    // pptxPath: '',
    period: 'Nov 2024 – Mar 2025',
    org: 'Coventry University',
    category: 'mern',
    skills: ['MongoDB','Express','React','Node','Leaflet','Tailwind','WebSocket']
  },

  // Flutter / Mobile
  'sajilotantra-mobile': {
    slug: 'sajilotantra-mobile',
    title: 'Sajilotantra – Mobile App (Flutter)',
    desc: 'Flutter app with Clean Architecture, BLoC, sensors (auto theme, shake-to-logout), and feature parity with web.',
    img: '/assets/images/project-flutter-2.svg',
    repo: 'https://github.com/0-nikesh/sajilotantra-sem5', 
    live: '',
    figma: 'https://www.figma.com/file/fvWj1IhzYJUhD3059Lz46K/Sajilotantra-Mobile-UI',
    youtubeUrl: 'https://www.youtube.com/watch?v=FZCJQRIBVs4', 
    // youtubeId: '',
    pdfPath: 'https://console.cloudinary.com/app/c-d9da0fcc80a40d12549ab1f784dee7/assets/media_library/search/asset/3e8ba5bbaea07f9ccaa4a54081d36be0/manage/summary?q=&view_mode=mosaic&context=manage',
    pptxPath: '',
    period: 'Nov 2024 – Mar 2025',
    org: 'Coventry University',
    category: 'flutter',
    skills: ['Flutter','Dart','BLoC','Clean Architecture','Sensors']
  },
  'walletwatch': {
    slug: 'walletwatch',
    title: 'WalletWatch – Expense Tracker',
    desc: 'Flutter expense tracker assignment with transaction logging and spending analytics.',
    img: '/assets/images/project-flutter-1.svg',
    repo: 'https://github.com/0-nikesh/WalletWatch',
    live: '',
    // figma: '',
    youtubeUrl: 'https://www.youtube.com/watch?v=C7np5zDivHk',
    // youtubeId: '',
    pdfPath: '/assets/docs/walletwatch.pdf',
    // pptxPath: '',
    period: 'Nov 2023 – Feb 2024',
    org: 'Coventry University',
    category: 'flutter',
    skills: ['Flutter','Dart','UI/UX']
  },

  // Django / Hackathon
  'sajilotantra-2023': {
    slug: 'sajilotantra-2023',
    title: 'Sajilotantra (Django) – Civic Guidance & Forum',
    desc: 'Step-by-step government document guidance and a community forum built with Django.',
    img: '/assets/images/project-mern-3.svg',
    repo: '',
    live: '',
    figma: '',
    youtubeUrl: 'https://www.youtube.com/watch?v=Cy_x6FuxpSI',
    pdfPath: '/assets/docs/sajilotantra-2023.pdf',
    pptxPath: '',
    period: 'Dec 2023 – Jan 2024',
    org: 'Coventry University',
    category: 'mern',
    skills: ['Django','Tailwind','Agile','Scrum']
  },
  'sajilocity': {
    slug: 'sajilocity',
    title: 'SajiloCity – Pothole Reporting (Hackathon Winner)',
    desc: 'Civic reporting site enabling citizens to report potholes; built during a winning hackathon.',
    img: '/assets/images/project-award-1.svg',
    repo: 'https://github.com/bayes-ashok/recursion_404',
    live: '',
    figma: '',
    youtubeUrl: '',
    youtubeId: '',
    pdfPath: '/assets/docs/sajilocity.pdf',
    pptxPath: '',
    period: 'Dec 2023',
    org: '',
    category: 'awards',
    skills: ['Django','SMTP','Product Design']
  },
  'learnscape': {
    slug: 'learnscape',
    title: 'Learnscape – AI-driven VR Learning (Runner-up, IoA Shark Tank)',
    desc: 'An immersive AI+VR learning platform designed for students in remote regions — runner-up at IoA Student Shark Tank (Spring 2025).',
    img: '/assets/images/project-award-2.svg',
    repo: '',
    live: '',
    figma: '',
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7323758075448897538/',
    pdfPath: '/assets/docs/ioa-certificate.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=erSzWEaITew',
    // pptxPath: '',
    period: 'May 2025',
    org: 'Softwarica College of IT and E-commerce',
    category: 'awards',
    skills: ['AI','VR','EducationTech','Product Design'],
    credentials: [
      'Runner-up — Spring 2025 IoA Student Shark Tank',
      'Certificate available (uploaded)'
    ]
  }
}

export const projectsByCategory = categories.reduce((acc, c) => {
  acc[c.key] = Object.values(projects).filter(p => p.category === c.key).map(p => p.slug)
  return acc
}, {})

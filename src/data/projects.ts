export interface Project {
  id: string;
  title: string;
  category: string;
  descriptionKey: string; // Changed from description to descriptionKey for translations
  role: string;
  year: string;
  status: string;
  technologies: string[];
  images: string[];
  metrics?: {
    users?: string;
    downloads?: string;
    awards?: string;
  };
  website?: string;
  github?: string;
}

export const projectCategories = [
  { id: 'all', name: 'All Projects', color: 'blue' },
  { id: 'social', name: 'Social & Community Platforms', color: 'pink' },
  { id: 'arvr', name: 'AR / VR / 3D Experiences', color: 'cyan' },
  { id: 'ai', name: 'AI / ML / Creative Tools', color: 'purple' },
  { id: 'consumer', name: 'Consumer & Lifestyle Apps', color: 'green' },
  { id: 'media', name: 'Media, Entertainment & Content', color: 'orange' },
  { id: 'business', name: 'Business & Productivity Tools', color: 'gray' },
];

export const projects: Project[] = [
  // AR / VR / 3D Experiences (Selected)
  {
    id: 'lifesciencedb',
    title: 'LifeScienceDB — BodyParts3D',
    category: 'arvr',
    descriptionKey: 'project.lifesciencedb.description',
    role: 'AR/3D Web Developer',
    year: '2021',
    status: 'Launched',
    technologies: ['WebGL', 'Three.js', 'JavaScript', 'HTML5/CSS3', 'Node.js', 'Database'],
    images: [
      '/projects/lifesciencedb/1.jpg',
      '/projects/lifesciencedb/2.png',
      '/projects/lifesciencedb/3.gif',
      '/projects/lifesciencedb/4.png'
    ],
    website: 'https://lifesciencedb.jp/bp3d/'
  },
  {
    id: 'teamlab',
    title: 'teamLab — Digital Art Experiences',
    category: 'arvr',
    descriptionKey: 'project.teamlab.description',
    role: 'Frontend Developer',
    year: '2020',
    status: 'Active',
    technologies: ['WebGL', 'Three.js', 'React/Next.js', 'Node.js', 'SSR', 'WebSockets'],
    images: [
      '/projects/teamlab/1.jpg',
      '/projects/teamlab/2.jpg'
    ],
    website: 'https://www.team-lab.com/'
  },
  {
    id: 'ampersand',
    title: 'Ampersand',
    category: 'arvr',
    descriptionKey: 'project.ampersand.description',
    role: 'Full Stack Developer',
    year: '2019',
    status: 'Launched',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'],
    images: [
      '/projects/ampersand/1.jpg',
      '/projects/ampersand/2.jpg',
      '/projects/ampersand/3.jpg',
      '/projects/ampersand/4.jpg'
    ],
    website: 'https://ampersand.co.jp/'
  },
  {
    id: 'botanistofficial',
    title: 'BOTANIST Official',
    category: 'arvr',
    descriptionKey: 'project.botanistofficial.description',
    role: 'Lead Frontend Developer',
    year: '2022',
    status: 'Active',
    technologies: ['WordPress', 'PHP', 'SCSS', 'JavaScript', 'Webpack', 'CDN'],
    images: [
      '/projects/botanistofficial/1.jpg',
      '/projects/botanistofficial/2.jpg',
      '/projects/botanistofficial/3.jpg',
      '/projects/botanistofficial/4.jpg',
      '/projects/botanistofficial/5.jpg'
    ],
    website: 'https://botanistofficial.com/'
  },

  // Consumer & Lifestyle Apps (Selected)
  {
    id: 'cookpad',
    title: 'Cookpad (Japan)',
    category: 'consumer',
    descriptionKey: 'project.cookpad.description',
    role: 'Full Stack Developer',
    year: '2023',
    status: 'Active',
    technologies: ['React', 'Sass', 'Webpack', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    images: ['/projects/cookpad/1.jpg', '/projects/cookpad/2.jpg', '/projects/cookpad/3.jpg', '/projects/cookpad/4.png'],
    website: 'https://cookpad.com/jp'
  },
  {
    id: 'jalan',
    title: 'Jalan.net',
    category: 'consumer',
    descriptionKey: 'project.jalan.description',
    role: 'Full Stack Developer',
    year: '2022',
    status: 'Launched',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'AWS'],
    images: ['/projects/jalan/1.jpg', '/projects/jalan/2.gif', '/projects/jalan/3.jpg', '/projects/jalan/4.jpg', '/projects/jalan/1.png'],
    website: 'https://www.jalan.net/'
  },
  {
    id: 'muji',
    title: 'MUJI Store (Japan)',
    category: 'consumer',
    descriptionKey: 'project.muji.description',
    role: 'Frontend Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'SCSS', 'TypeScript', 'Node.js', 'MySQL', 'CDN'],
    images: ['/projects/muji/1.png', '/projects/muji/2.png'],
    website: 'https://www.muji.com/jp/ja/store'
  },
  {
    id: 'tripadvisor',
    title: 'TripAdvisor Japan',
    category: 'consumer',
    descriptionKey: 'project.tripadvisor.description',
    role: 'Full Stack Developer',
    year: '2020',
    status: 'Active',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    images: ['/projects/tripadvisor/1.jpg', '/projects/tripadvisor/2.jpg', '/projects/tripadvisor/3.jpg', '/projects/tripadvisor/4.png'],
    website: 'https://www.tripadvisor.jp/'
  },
  {
    id: 'zenn-dev',
    title: 'Zenn.dev',
    category: 'consumer',
    descriptionKey: 'project.zenn-dev.description',
    role: 'Frontend Engineer',
    year: '2022',
    status: 'Active',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Rails API', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    images: ['/projects/zenn.dev/1.jpg', '/projects/zenn.dev/2.png', '/projects/zenn.dev/3.png', '/projects/zenn.dev/4.png', '/projects/zenn.dev/5.png'],
    website: 'https://zenn.dev/'
  },
  {
    id: 'zoff',
    title: 'Zoff',
    category: 'consumer',
    descriptionKey: 'project.zoff.description',
    role: 'Full Stack Developer',
    year: '2021',
    status: 'Launched',
    technologies: ['React', 'Sass', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    images: ['/projects/zoff/1.png', '/projects/zoff/2.png', '/projects/zoff/3.png', '/projects/zoff/4.png'],
    website: 'https://www.zoff.co.jp/shop/default.aspx'
  }
  ,

  // Social & Community Platforms
  {
    id: 'ameba',
    title: 'Ameba',
    category: 'social',
    descriptionKey: 'project.ameba.description',
    role: 'Frontend Engineer',
    year: '2021',
    status: 'Active',
    technologies: ['HTML5', 'CSS/Sass', 'JavaScript', 'TypeScript', 'React/Vue', 'Webpack', 'AMP'],
    images: ['/social/ameba/1.png', '/social/ameba/2.png', '/social/ameba/3.png', '/social/ameba/4.png']
  },
  {
    id: 'buzzfeed-jp',
    title: 'BuzzFeed Japan',
    category: 'social',
    descriptionKey: 'project.buzzfeed.description',
    role: 'Full Stack Developer',
    year: '2020',
    status: 'Active',
    technologies: ['React/Next.js', 'Node.js', 'CMS', 'PostgreSQL', 'Redis', 'Elasticsearch', 'CDN'],
    images: ['/social/buzzfeed/1.jpg', '/social/buzzfeed/2.jpg', '/social/buzzfeed/3.jpg', '/social/buzzfeed/4.png']
  },
  {
    id: 'itmedia',
    title: 'ITmedia',
    category: 'social',
    descriptionKey: 'project.itmedia.description',
    role: 'Full Stack Developer',
    year: '2022',
    status: 'Launched',
    technologies: ['Laravel (PHP)', 'React', 'MySQL', 'Elasticsearch', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
    images: ['/social/itmedia/1.png', '/social/itmedia/2.jpg', '/social/itmedia/3.png', '/social/itmedia/4.jpg']
  },
  {
    id: 'manga',
    title: 'Manga Platform',
    category: 'social',
    descriptionKey: 'project.manga.description',
    role: 'Backend & Mobile',
    year: '2021',
    status: 'Active',
    technologies: ['Node.js', 'CDN', 'Caching', 'Load Balancer', 'iOS', 'Android'],
    images: ['/social/manga/1.jpg', '/social/manga/2.webp', '/social/manga/3.png', '/social/manga/4.jpg']
  },
  {
    id: 'nicovideo',
    title: 'Niconico (nicovideo)',
    category: 'social',
    descriptionKey: 'project.nicovideo.description',
    role: 'Frontend Developer',
    year: '2020',
    status: 'Active',
    technologies: ['JavaScript', 'React', 'CDN', 'Caching'],
    images: ['/social/nicovideo/1.jpeg', '/social/nicovideo/2.jpeg', '/social/nicovideo/3.jpeg', '/social/nicovideo/4.jpg']
  },
  {
    id: 'pixiv',
    title: 'Pixiv',
    category: 'social',
    descriptionKey: 'project.pixiv.description',
    role: 'Frontend Engineer',
    year: '2021',
    status: 'Active',
    technologies: ['TypeScript', 'React', 'Node/Java services', 'MySQL/PostgreSQL', 'Redis', 'Elasticsearch', 'CDN'],
    images: ['/social/Pixiv/1.jpg', '/social/Pixiv/2.jpg', '/social/Pixiv/3.png', '/social/Pixiv/4.png']
  },

  // AI / ML / Creative Tools
  {
    id: 'openai',
    title: 'OpenAI',
    category: 'ai',
    descriptionKey: 'project.openai.description',
    role: 'AI Engineer',
    year: '2023',
    status: 'Active',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    images: ['/projects/OpenAI/1.png', '/projects/OpenAI/2.png', '/projects/OpenAI/3.png'],
    website: 'https://openai.com'
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    category: 'ai',
    descriptionKey: 'project.midjourney.description',
    role: 'AI/3D Developer',
    year: '2022',
    status: 'Active',
    technologies: ['Python', 'PyTorch', 'Three.js', 'WebGL', 'OpenAI'],
    images: ['/projects/Midjourney/1.png', '/projects/Midjourney/2.png', '/projects/Midjourney/3.png'],
    website: 'https://midjourney.com'
  },

  // Media, Entertainment & Content
  {
    id: 'myanimelist',
    title: 'MyAnimeList',
    category: 'media',
    descriptionKey: 'project.myanimelist.description',
    role: 'Frontend Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    images: ['/projects/MyAnimeList/1.jpeg', '/projects/MyAnimeList/2.avif', '/projects/MyAnimeList/3.webp'],
    website: 'https://myanimelist.net'
  },

  // Business & Productivity Tools
  {
    id: 'doximity',
    title: 'Doximity',
    category: 'business',
    descriptionKey: 'project.doximity.description',
    role: 'Full Stack Developer',
    year: '2023',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA Compliance'],
    images: ['/projects/Doximity/1.webp', '/projects/Doximity/2.webp', '/projects/Doximity/3.png'],
    website: 'https://doximity.com'
  }
];

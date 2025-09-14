export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
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
  // Social & Community Platforms
  {
    id: 'are-na',
    title: 'Are.na',
    category: 'social',
    description: 'Collaborative visual research and organization platform for collecting and organizing ideas, images, and knowledge networks.',
    role: 'Frontend Developer',
    year: '2023',
    status: 'Active',
    technologies: ['React', 'Next.js', 'Stitches', 'Radix UI', 'Contentful'],
    images: ['/projects/Are.na_-_Groups/1.png', '/projects/Are.na_-_Groups/2.gif', '/projects/Are.na_-_Groups/3.webp', '/projects/Are.na_-_Groups/4.jpg'],
    metrics: { users: '50K+' },
    website: 'https://www.are.na'
  },
  {
    id: 'asmallworld',
    title: 'Asmallworld',
    category: 'social',
    description: 'Exclusive social networking platform for affluent and influential individuals worldwide.',
    role: 'Full Stack Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    images: ['/projects/Asmallworld/1.jpg', '/projects/Asmallworld/2.jpg', '/projects/Asmallworld/3.jpg'],
    metrics: { users: '500K+' },
    website: 'https://asmallworld.com'
  },
  {
    id: 'bereal',
    title: 'BeReal',
    category: 'social',
    description: 'Authentic social media app encouraging users to share unfiltered moments with friends.',
    role: 'Mobile Developer',
    year: '2022',
    status: 'Launched',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    images: ['/projects/BeReal/1.jpg', '/projects/BeReal/2.webp', '/projects/BeReal/3.jpg'],
    metrics: { users: '20M+', downloads: '50M+' },
    website: 'https://bereal.com'
  },
  {
    id: 'mastodon-ello-diaspora',
    title: 'Mastodon, Ello, Diaspora',
    category: 'social',
    description: 'Decentralized social networking platforms promoting user privacy and community ownership.',
    role: 'Backend Developer',
    year: '2021',
    status: 'Active',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Docker'],
    images: ['/projects/Mastodon  Ello  Diaspora/1.png', '/projects/Mastodon  Ello  Diaspora/2.jpg', '/projects/Mastodon  Ello  Diaspora/3.jpg'],
    metrics: { users: '2M+' },
    website: 'https://mastodon.social'
  },
  {
    id: 'mewe',
    title: 'MeWe',
    category: 'social',
    description: 'Privacy-focused social network with no ads, no tracking, and no manipulation.',
    role: 'Frontend Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'TypeScript', 'GraphQL', 'AWS'],
    images: ['/projects/MeWe/1.jpg', '/projects/MeWe/2.jpg', '/projects/MeWe/3.png'],
    metrics: { users: '20M+' },
    website: 'https://mewe.com'
  },
  {
    id: 'polywork',
    title: 'Polywork',
    category: 'social',
    description: 'Professional networking platform showcasing diverse career achievements and side projects.',
    role: 'Full Stack Developer',
    year: '2021',
    status: 'Acquired',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
    images: ['/projects/Polywork/1.png', '/projects/Polywork/2.webp', '/projects/Polywork/3.jpg'],
    metrics: { users: '100K+' },
    website: 'https://polywork.com'
  },
  {
    id: 'letterboxd',
    title: 'Letterboxd',
    category: 'social',
    description: 'Social network for film lovers to discover, rate, and review movies.',
    role: 'Frontend Developer',
    year: '2020',
    status: 'Active',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    images: ['/projects/Letterboxd/1.png', '/projects/Letterboxd/2.webp', '/projects/Letterboxd/3.webp'],
    metrics: { users: '4M+' },
    website: 'https://letterboxd.com'
  },
  {
    id: 'poparazzi',
    title: 'Poparazzi',
    category: 'social',
    description: 'Social photo app where users can only post photos of their friends, not themselves.',
    role: 'Mobile Developer',
    year: '2021',
    status: 'Launched',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    images: ['/projects/Poparazzi/1.jpg', '/projects/Poparazzi/2.webp', '/projects/Poparazzi/3.png'],
    metrics: { users: '1M+', downloads: '5M+' },
    website: 'https://poparazzi.com'
  },
  {
    id: 'rallypoint',
    title: 'RallyPoint',
    category: 'social',
    description: 'Professional networking platform for military veterans and service members.',
    role: 'Full Stack Developer',
    year: '2020',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    images: ['/projects/RallyPoint/1.png', '/projects/RallyPoint/2.webp', '/projects/RallyPoint/3.jpeg'],
    metrics: { users: '2M+' },
    website: 'https://rallypoint.com'
  },

  // AR / VR / 3D Experiences
  {
    id: 'abc-ar',
    title: 'ABC AR',
    category: 'arvr',
    description: 'Educational AR experience focused on space exploration with interactive 3D models and gamified learning.',
    role: 'AR Developer',
    year: '2018',
    status: 'Launched',
    technologies: ['Unity', 'ARKit', 'ARCore', 'C#'],
    images: ['/projects/ABC_AR/1.jpeg', '/projects/ABC_AR/2.jpeg', '/projects/ABC_AR/3.jpg'],
    metrics: { downloads: '100K+' }
  },
  {
    id: 'jigspace',
    title: 'JigSpace',
    category: 'arvr',
    description: 'AR platform for creating and sharing interactive 3D presentations and educational content.',
    role: 'AR/3D Developer',
    year: '2019',
    status: 'Active',
    technologies: ['Unity', 'ARKit', 'ARCore', 'C#', 'Blender'],
    images: ['/projects/JigSpace/1.png', '/projects/JigSpace/2.jpg', '/projects/JigSpace/3.png'],
    metrics: { users: '500K+' },
    website: 'https://jig.space'
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    category: 'arvr',
    description: 'AI-powered image generation platform with 3D visualization and VR integration capabilities.',
    role: 'AI/3D Developer',
    year: '2022',
    status: 'Active',
    technologies: ['Python', 'PyTorch', 'Three.js', 'WebGL', 'OpenAI'],
    images: ['/projects/Midjourney/1.png', '/projects/Midjourney/2.png', '/projects/Midjourney/3.png'],
    metrics: { users: '15M+' },
    website: 'https://midjourney.com'
  },
  {
    id: 'marvel-ar',
    title: 'Marvel (AR Features)',
    category: 'arvr',
    description: 'Interactive AR experiences for Marvel content including character visualization and immersive storytelling.',
    role: 'AR Developer',
    year: '2021',
    status: 'Active',
    technologies: ['Unity', 'ARKit', 'ARCore', 'C#', '3D Modeling'],
    images: ['/projects/Marvel/1.webp', '/projects/Marvel/2.jpg', '/projects/Marvel/3.jpg'],
    metrics: { users: '5M+' },
    website: 'https://marvel.com'
  },

  // AI / ML / Creative Tools
  {
    id: 'openai',
    title: 'OpenAI',
    category: 'ai',
    description: 'Artificial intelligence research organization developing safe and beneficial AI systems including ChatGPT and DALL-E.',
    role: 'AI Engineer',
    year: '2023',
    status: 'Active',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    images: ['/projects/OpenAI/1.png', '/projects/OpenAI/2.png', '/projects/OpenAI/3.png'],
    metrics: { users: '100M+' },
    website: 'https://openai.com'
  },
  {
    id: 'soundraw',
    title: 'Soundraw',
    category: 'ai',
    description: 'AI-powered music generation platform for content creators and musicians.',
    role: 'AI Engineer & PM',
    year: '2023',
    status: 'Launched',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'Web Audio API'],
    images: ['/projects/Soundraw/1.png', '/projects/Soundraw/2.png', '/projects/Soundraw/3.png'],
    metrics: { users: '2M+', downloads: '5M+' },
    website: 'https://soundraw.io'
  },
  {
    id: 'pixelfed-ui',
    title: 'Pixelfed UI',
    category: 'ai',
    description: 'Decentralized image sharing platform with AI-enhanced features for content moderation and discovery.',
    role: 'Frontend Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React', 'TypeScript', 'Laravel', 'AI/ML APIs'],
    images: ['/projects/Pixelfed-ui/1.png', '/projects/Pixelfed-ui/2.png', '/projects/Pixelfed-ui/3.png', '/projects/Pixelfed-ui/4.jpg', '/projects/Pixelfed-ui/5.png', '/projects/Pixelfed-ui/6.png'],
    metrics: { users: '100K+' },
    website: 'https://pixelfed.org'
  },

  // Consumer & Lifestyle Apps
  {
    id: 'bemyeyes',
    title: 'BeMyEyes',
    category: 'consumer',
    description: 'Accessibility app connecting blind and visually impaired users with volunteers worldwide for real-time visual support.',
    role: 'Android Lead Developer',
    year: '2024',
    status: 'Launched',
    technologies: ['Kotlin', 'TensorFlow', 'WebRTC', 'Firebase', 'OpenAI GPT-4'],
    images: ['/projects/BeMyEyes/1.png', '/projects/BeMyEyes/2.png', '/projects/BeMyEyes/3.png'],
    metrics: { users: '10M+', awards: '3 International Awards' },
    website: 'https://bemyeyes.com'
  },
  {
    id: 'bombas',
    title: 'Bombas',
    category: 'consumer',
    description: 'Comfort-focused sock and apparel brand with social impact mission.',
    role: 'E-commerce Developer',
    year: '2022',
    status: 'Active',
    technologies: ['Shopify', 'React', 'Node.js', 'Stripe'],
    images: ['/projects/Bombas/1.png', '/projects/Bombas/2.png', '/projects/Bombas/3.png'],
    metrics: { users: '1M+' },
    website: 'https://bombas.com'
  },
  {
    id: 'untappd',
    title: 'Untappd',
    category: 'consumer',
    description: 'Social discovery platform for beer enthusiasts with rating and review system.',
    role: 'Frontend Developer',
    year: '2022',
    status: 'Launched',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    images: ['/projects/Untappd/1.jpg', '/projects/Untappd/2.gif', '/projects/Untappd/3.jpg', '/projects/Untappd/4.png', '/projects/Untappd/5.webp', '/projects/Untappd/6.jpg'],
    metrics: { users: '8M+' },
    website: 'https://untappd.com'
  },
  {
    id: 'path',
    title: 'Path',
    category: 'consumer',
    description: 'Intimate social network for sharing life moments with close friends and family.',
    role: 'Mobile Developer',
    year: '2021',
    status: 'Acquired',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    images: ['/projects/Path/1.jpg', '/projects/Path/2.webp', '/projects/Path/3.webp'],
    metrics: { users: '3M+' },
    website: 'https://path.com'
  },
  {
    id: 'small-business-bonfire',
    title: 'Small Business Bonfire',
    category: 'consumer',
    description: 'Platform connecting small business owners with resources, networking, and support.',
    role: 'Full Stack Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    images: ['/projects/Small Business Bonfire/1.webp', '/projects/Small Business Bonfire/2.png', '/projects/Small Business Bonfire/3.png', '/projects/Small Business Bonfire/4.png'],
    metrics: { users: '50K+' },
    website: 'https://smallbusinessbonfire.com'
  },
  {
    id: 'hellomobility',
    title: 'HelloMobility',
    category: 'consumer',
    description: 'Mobility and transportation solutions platform for urban commuters.',
    role: 'Mobile Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
    images: ['/projects/Hellomobility/1.png', '/projects/Hellomobility/2.png', '/projects/Hellomobility/3.png'],
    metrics: { users: '200K+' },
    website: 'https://hellomobility.jp'
  },

  // Media, Entertainment & Content
  {
    id: 'myanimelist',
    title: 'MyAnimeList',
    category: 'media',
    description: 'Comprehensive anime and manga database with social features for tracking and discovering content.',
    role: 'Frontend Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    images: ['/projects/MyAnimeList/1.jpeg', '/projects/MyAnimeList/2.avif', '/projects/MyAnimeList/3.webp'],
    metrics: { users: '15M+' },
    website: 'https://myanimelist.net'
  },
  {
    id: 'marvel-content',
    title: 'Marvel (Content Platform)',
    category: 'media',
    description: 'Digital platform for Marvel comics, movies, and interactive content experiences.',
    role: 'Full Stack Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Content Management'],
    images: ['/projects/Marvel/1.webp', '/projects/Marvel/2.jpg', '/projects/Marvel/3.jpg'],
    metrics: { users: '5M+' }
  },
  {
    id: 'letterboxd-media',
    title: 'Letterboxd (Media Features)',
    category: 'media',
    description: 'Film discovery and social platform with comprehensive movie database and community features.',
    role: 'Frontend Developer',
    year: '2020',
    status: 'Active',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'TMDB API'],
    images: ['/projects/Letterboxd/1.png', '/projects/Letterboxd/2.webp', '/projects/Letterboxd/3.webp'],
    metrics: { users: '4M+' }
  },
  {
    id: 'venturebeat',
    title: 'VentureBeat',
    category: 'media',
    description: 'Technology news and analysis platform covering startups, AI, and emerging technologies.',
    role: 'Frontend Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React', 'Next.js', 'WordPress', 'AWS'],
    images: ['/projects/VentureBeat/1.jpg', '/projects/VentureBeat/2.png', '/projects/VentureBeat/3.webp'],
    metrics: { users: '2M+' },
    website: 'https://venturebeat.com'
  },

  // Business & Productivity Tools
  {
    id: 'doximity',
    title: 'Doximity',
    category: 'business',
    description: 'Professional networking platform for healthcare professionals with secure messaging and collaboration tools.',
    role: 'Full Stack Developer',
    year: '2023',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA Compliance'],
    images: ['/projects/Doximity/1.webp', '/projects/Doximity/2.webp', '/projects/Doximity/3.png'],
    metrics: { users: '2M+' },
    website: 'https://doximity.com'
  },
  {
    id: 'eversystem',
    title: 'Eversystem Inc',
    category: 'business',
    description: 'Enterprise software solutions for business process automation and workflow management.',
    role: 'Full Stack Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    images: ['/projects/Eversystem Inc/1.png', '/projects/Eversystem Inc/2.jpeg', '/projects/Eversystem Inc/3.png'],
    metrics: { users: '100K+' },
    website: 'https://evrsystem.com'
  },
  {
    id: 'polywork-business',
    title: 'Polywork (Business Features)',
    category: 'business',
    description: 'Professional networking platform with business tools for showcasing diverse career achievements.',
    role: 'Full Stack Developer',
    year: '2021',
    status: 'Acquired',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Analytics'],
    images: ['/projects/Polywork/1.png', '/projects/Polywork/2.webp', '/projects/Polywork/3.jpg'],
    metrics: { users: '100K+' }
  },
  {
    id: 'rallypoint-business',
    title: 'RallyPoint (Business Tools)',
    category: 'business',
    description: 'Professional networking and career development platform for military veterans.',
    role: 'Full Stack Developer',
    year: '2020',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Career Tools'],
    images: ['/projects/RallyPoint/1.png', '/projects/RallyPoint/2.webp', '/projects/RallyPoint/3.jpeg'],
    metrics: { users: '2M+' }
  },
  {
    id: 'pair',
    title: 'Pair',
    category: 'business',
    description: 'Collaborative design and prototyping tool for remote teams.',
    role: 'Frontend Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React', 'TypeScript', 'WebRTC', 'Canvas API', 'Real-time Collaboration'],
    images: ['/projects/Pair/1.jpg', '/projects/Pair/2.jpg', '/projects/Pair/3.jpg'],
    metrics: { users: '500K+' },
    website: 'https://pair.com'
  },
  {
    id: 'ravelry',
    title: 'Ravelry',
    category: 'business',
    description: 'Social networking and project management platform for knitters and crocheters.',
    role: 'Full Stack Developer',
    year: '2021',
    status: 'Active',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'AWS'],
    images: ['/projects/Ravelry/1.jpg', '/projects/Ravelry/2.jpg', '/projects/Ravelry/3.jpg'],
    metrics: { users: '8M+' },
    website: 'https://ravelry.com'
  },
  {
    id: 'trust-cafe',
    title: 'Trust Cafe',
    category: 'business',
    description: 'Professional networking platform focused on building trust and authentic business relationships.',
    role: 'Full Stack Developer',
    year: '2022',
    status: 'Active',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    images: ['/projects/trust-cafe_0/1.png', '/projects/trust-cafe_0/2.png', '/projects/trust-cafe_0/3.png', '/projects/trust-cafe_0/4.png', '/projects/trust-cafe_0/5.png', '/projects/trust-cafe_0/6.webp'],
    metrics: { users: '50K+' },
    website: 'https://trust-cafe.com'
  },
  {
    id: 'yummygum',
    title: 'Yummygum',
    category: 'business',
    description: 'Digital agency platform for creative professionals and agencies to showcase their work.',
    role: 'Frontend Developer',
    year: '2021',
    status: 'Active',
    technologies: ['React', 'Next.js', 'Contentful', 'AWS'],
    images: ['/projects/Yummygum/1.webp', '/projects/Yummygum/2.webp', '/projects/Yummygum/3.webp'],
    metrics: { users: '25K+' },
    website: 'https://yummygum.com'
  }
];

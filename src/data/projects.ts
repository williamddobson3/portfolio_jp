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
  // AR-focused portfolio entries
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
  }
];

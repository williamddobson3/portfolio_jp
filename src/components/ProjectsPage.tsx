import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  year: string;
  status: string;
  technologies: string[];
  image: string;
  metrics?: {
    users?: string;
    downloads?: string;
    awards?: string;
  };
}

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', color: 'blue' },
    { id: 'social', name: 'Social & Community', color: 'pink' },
    { id: 'arvr', name: 'AR/VR/3D', color: 'cyan' },
    { id: 'blockchain', name: 'Blockchain & Web3', color: 'blue' },
    { id: 'ai', name: 'AI/ML Tools', color: 'purple' },
    { id: 'consumer', name: 'Consumer Apps', color: 'green' },
    { id: 'media', name: 'Media & Entertainment', color: 'orange' },
    { id: 'business', name: 'Business & Productivity', color: 'gray' },
  ];

  // Sample projects - replace with your actual project data
  const projects: Project[] = [
    {
      id: '1',
      title: 'BeMyEyes',
      category: 'social',
      description: 'Accessibility app connecting blind and visually impaired users with volunteers worldwide.',
      role: 'Android Lead Developer',
      year: '2024',
      status: 'Launched',
      technologies: ['Kotlin', 'TensorFlow', 'WebRTC', 'Firebase'],
      image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { users: '10M+', awards: '3 International Awards' }
    },
    {
      id: '2',
      title: 'Astar Network',
      category: 'blockchain',
      description: 'Multi-chain smart contract platform enabling interoperability between different blockchains.',
      role: 'Full Stack Engineer',
      year: '2023',
      status: 'Active',
      technologies: ['Rust', 'Substrate', 'React', 'Web3.js'],
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { users: '500K+' }
    },
    {
      id: '3',
      title: 'Soundraw AI',
      category: 'ai',
      description: 'AI-powered music generation platform for content creators and musicians.',
      role: 'AI Engineer & PM',
      year: '2023',
      status: 'Launched',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { users: '2M+', downloads: '5M+' }
    },
    {
      id: '4',
      title: 'Untappd',
      category: 'social',
      description: 'Social discovery platform for beer enthusiasts with rating and review system.',
      role: 'Frontend Developer',
      year: '2022',
      status: 'Launched',
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/1267279/pexels-photo-1267279.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { users: '8M+' }
    },
    {
      id: '5',
      title: 'AR Shopping Experience',
      category: 'arvr',
      description: 'Immersive AR application for furniture visualization in home spaces.',
      role: 'AR/Android Developer',
      year: '2022',
      status: 'Beta',
      technologies: ['Unity', 'ARCore', 'Kotlin', 'Cloud Anchors'],
      image: 'https://images.pexels.com/photos/7887804/pexels-photo-7887804.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '6',
      title: 'Polywork Platform',
      category: 'business',
      description: 'Professional networking platform showcasing diverse career achievements.',
      role: 'Full Stack Developer',
      year: '2021',
      status: 'Acquired',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
    // Add more projects here...
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Project Galaxy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my constellation of projects spanning AI, blockchain, mobile, and web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-${category.color}-500/30 text-${category.color}-300 border border-${category.color}-500/50 shadow-lg shadow-${category.color}-500/20`
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-400 font-medium">{project.category.toUpperCase()}</span>
                  <span className="text-sm text-gray-400 flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Users size={14} className="mr-1" />
                  {project.role}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {project.metrics && (
                  <div className="flex justify-between text-sm text-blue-300">
                    {project.metrics.users && <span>{project.metrics.users} users</span>}
                    {project.metrics.downloads && <span>{project.metrics.downloads} downloads</span>}
                    {project.metrics.awards && <span>{project.metrics.awards}</span>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
              >
                ✕
              </button>
              
              <div className="aspect-video overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedProject.status === 'Launched' ? 'bg-green-500/20 text-green-300' :
                    selectedProject.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
                
                <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">My Role</h4>
                    <p className="text-gray-300">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Year</h4>
                    <p className="text-gray-300">{selectedProject.year}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.metrics && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Impact & Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-300">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors">
                    <Github size={18} />
                    <span>View Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
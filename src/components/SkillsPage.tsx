import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  years: number;
  category: string;
  projects: string[];
}

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', color: 'white' },
    { id: 'ai', name: 'AI & Machine Learning', color: 'purple' },
    { id: 'web', name: 'Web Development', color: 'cyan' },
    { id: 'android', name: 'Android Development', color: 'green' },
    { id: 'blockchain', name: 'Blockchain', color: 'blue' },
    { id: 'management', name: 'Management', color: 'yellow' },
  ];

  const skills: Skill[] = [
    // AI & Machine Learning
    { name: 'TensorFlow', level: 5, years: 4, category: 'ai', projects: ['Soundraw', 'BeMyEyes'] },
    { name: 'PyTorch', level: 4, years: 3, category: 'ai', projects: ['AI Research'] },
    { name: 'OpenAI API', level: 5, years: 2, category: 'ai', projects: ['ChatBot', 'Content Gen'] },
    { name: 'LangChain', level: 4, years: 1, category: 'ai', projects: ['RAG System'] },
    { name: 'Computer Vision', level: 4, years: 3, category: 'ai', projects: ['BeMyEyes', 'AR App'] },

    // Web Development
    { name: 'React', level: 5, years: 7, category: 'web', projects: ['Polywork', 'Untappd', 'Portfolio'] },
    { name: 'Next.js', level: 5, years: 5, category: 'web', projects: ['Yummygum', 'Business Apps'] },
    { name: 'TypeScript', level: 5, years: 6, category: 'web', projects: ['All Modern Projects'] },
    { name: 'Node.js', level: 5, years: 8, category: 'web', projects: ['Backend APIs', 'Microservices'] },
    { name: 'GraphQL', level: 4, years: 4, category: 'web', projects: ['Polywork', 'Data APIs'] },
    { name: 'Tailwind CSS', level: 5, years: 3, category: 'web', projects: ['UI Libraries', 'Dashboards'] },

    // Android Development
    { name: 'Kotlin', level: 5, years: 6, category: 'android', projects: ['BeMyEyes', 'AR Shopping'] },
    { name: 'Java', level: 4, years: 10, category: 'android', projects: ['Legacy Apps'] },
    { name: 'Jetpack Compose', level: 4, years: 2, category: 'android', projects: ['Modern Apps'] },
    { name: 'Firebase', level: 5, years: 5, category: 'android', projects: ['Real-time Apps'] },
    { name: 'ARCore', level: 4, years: 2, category: 'android', projects: ['AR Shopping', '3D Apps'] },

    // Blockchain
    { name: 'Solidity', level: 4, years: 3, category: 'blockchain', projects: ['Smart Contracts'] },
    { name: 'Rust', level: 3, years: 2, category: 'blockchain', projects: ['Astar Network'] },
    { name: 'Substrate', level: 3, years: 2, category: 'blockchain', projects: ['Astar Network'] },
    { name: 'Web3.js', level: 4, years: 3, category: 'blockchain', projects: ['DApps', 'Wallets'] },
    { name: 'DeFi Protocols', level: 3, years: 2, category: 'blockchain', projects: ['Trading Bots'] },

    // Management
    { name: 'Agile/Scrum', level: 5, years: 8, category: 'management', projects: ['All Projects'] },
    { name: 'Team Leadership', level: 5, years: 6, category: 'management', projects: ['Multiple Teams'] },
    { name: 'Client Communication', level: 5, years: 10, category: 'management', projects: ['Client Projects'] },
    { name: 'Project Planning', level: 5, years: 8, category: 'management', projects: ['Enterprise Projects'] },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < level
            ? 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-500/30'
            : 'bg-gray-700'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Skills Constellation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My expertise across AI, web development, mobile, blockchain, and team leadership
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-${category.color}-500/30 text-${category.color}-300 border border-${category.color}-500/50 shadow-lg`
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Skill Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span>{skill.years} years</span>
                  <span className="capitalize text-purple-400">{skill.category}</span>
                </div>
              </div>

              {/* Skill Level */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Proficiency</span>
                  <span className="text-sm text-blue-400 font-semibold">
                    {skill.level}/5
                  </span>
                </div>
                <div className="flex space-x-1">
                  {renderStars(skill.level)}
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="text-sm text-gray-400 mb-2">Used in:</div>
                <div className="flex flex-wrap gap-1">
                  {skill.projects.slice(0, 2).map(project => (
                    <span
                      key={project}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
                    >
                      {project}
                    </span>
                  ))}
                  {skill.projects.length > 2 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                      +{skill.projects.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Experience', value: '10+', color: 'blue' },
            { label: 'Technologies Mastered', value: skills.length.toString(), color: 'purple' },
            { label: 'Expert Level Skills', value: skills.filter(s => s.level === 5).length.toString(), color: 'cyan' },
            { label: 'Active Categories', value: '5', color: 'green' }
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
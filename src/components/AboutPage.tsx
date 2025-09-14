import React, { useState } from 'react';
import { MapPin, Calendar, Users, Award, Download } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location: string;
  type: 'work' | 'achievement' | 'milestone';
  highlights: string[];
}

export const AboutPage: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const timeline: TimelineEvent[] = [
    {
      year: '2023-Present',
      title: 'Freelance Engineer & Project Manager',
      description: 'Leading distributed teams to deliver web, AI, and Android projects worldwide.',
      location: 'Japan / Remote',
      type: 'milestone',
      highlights: [
        'Leading distributed team of developers and designers',
        'Built AI-powered automation workflows',
        'Developed Android applications with modern UI/UX',
        'Managed client communications via CrowdWorks and Upwork'
      ]
    },
    {
      year: '2016-Present',
      title: 'International Freelance Engineer',
      description: 'Delivering projects remotely to clients in Malaysia, Singapore & worldwide.',
      location: 'Japan / Remote',
      type: 'work',
      highlights: [
        'Delivered 50+ projects in web, mobile, and AI automation',
        'Specialized in full-stack development and AI solutions',
        'Managed international client communications across time zones',
        'Implemented automation workflows using Zapier, n8n, and OpenAI API'
      ]
    },
    {
      year: '2015-2023',
      title: 'Software Engineer & Project Manager',
      description: 'Full-stack and Android engineer at Rakuten, later promoted to project manager.',
      location: 'Rakuten, Japan',
      type: 'work',
      highlights: [
        'Designed and implemented scalable web applications',
        'Built backend services, REST/GraphQL APIs, and cloud infrastructure',
        'Led cross-functional teams and collaborated with UI/UX designers',
        'Developed AI-based solutions and workflow automation'
      ]
    }
  ];

  const values = [
    {
      title: 'Integrity & Trust',
      description: 'Building lasting relationships through honest communication and reliable delivery.',
      icon: '🤝'
    },
    {
      title: 'Innovation Focus',
      description: 'Always pushing boundaries with cutting-edge AI and mobile technologies.',
      icon: '🚀'
    },
    {
      title: 'Team Leadership',
      description: 'Empowering teams to achieve their best through mentorship and collaboration.',
      icon: '👥'
    },
    {
      title: 'Global Perspective',
      description: 'Experience across Japan and Malaysia brings unique multicultural insights.',
      icon: '🌏'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              My Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With 9+ years of experience spanning corporate engineering at Rakuten and international freelancing, 
            now leading distributed teams to deliver AI, web, and mobile solutions worldwide.
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Currently Available</h2>
              <p className="text-gray-300">
                Leading engineering teams while taking on unique and challenging projects
              </p>
              <div className="flex items-center mt-3 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
                Open for new collaborations
              </div>
            </div>
            <button 
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Satoshi_Kobayashi_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Career Timeline</h2>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-30" />
          
          {timeline.map((event, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeEvent === index ? 'ring-2 ring-blue-500/50 bg-white/10' : ''
                  }`}
                  onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-2xl font-bold ${
                      event.type === 'milestone' ? 'text-blue-400' :
                      event.type === 'achievement' ? 'text-purple-400' :
                      'text-cyan-400'
                    }`}>
                      {event.year}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={14} className="mr-1" />
                      {event.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  {activeEvent === index && (
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="w-2/12 flex justify-center">
                <div className={`w-6 h-6 rounded-full border-4 ${
                  event.type === 'milestone' ? 'bg-blue-500 border-blue-300' :
                  event.type === 'achievement' ? 'bg-purple-500 border-purple-300' :
                  'bg-cyan-500 border-cyan-300'
                } shadow-lg z-10`} />
              </div>
              
              {/* Empty Space */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Values & Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{value.title}</h3>
                <p className="text-gray-300 text-sm text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Experience', value: '9+', icon: Calendar },
            { label: 'Projects Completed', value: '50+', icon: Award },
            { label: 'Team Members Led', value: '50+', icon: Users },
            { label: 'Countries Worked', value: '15+', icon: MapPin }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Future Vision</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              "Continue creating unique and special projects that push the boundaries of technology, 
              while maintaining the trust and integrity that has been the foundation of my career. 
              My goal is to deliver exceptional value to clients worldwide through innovative AI 
              and mobile solutions."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
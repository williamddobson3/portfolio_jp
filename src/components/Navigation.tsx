import React, { useState } from 'react';
import { Home, Folder, Zap, User, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
          <div className="flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === id
                    ? 'bg-blue-500/30 text-blue-300 shadow-lg shadow-blue-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => window.location.hash = id}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/30 backdrop-blur-md border border-white/20 rounded-full p-3 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
          <div className="fixed top-20 right-6 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-48">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
                  currentPage === id
                    ? 'bg-blue-500/30 text-blue-300'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => {
                  window.location.hash = id;
                  setIsOpen(false);
                }}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
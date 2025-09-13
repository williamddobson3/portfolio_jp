import React from 'react';
import { Navigation } from './Navigation';
import { ParticleBackground } from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <ParticleBackground />
      <Navigation currentPage={currentPage} />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};
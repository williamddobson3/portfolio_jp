import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
      aria-label={/* Japanese aria-label */ '言語を切り替える'}
    >
      <Globe size={16} className="text-gray-400 group-hover:text-white transition-colors" />
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {/* Display language names in Japanese only */}
        {language === 'en' ? '英語' : '日本語'}
      </span>
    </button>
  );
};


import React, { useState, useEffect } from 'react';
import { Language, NavContent } from '../types';
import { COLORS } from '../constants';

interface NavigationProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  content: NavContent;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLang, setLang, content, activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: content.about },
    { id: 'teachers', label: content.teachers },
    { id: 'work', label: content.work },
    { id: 'faq', label: content.faq },
    { id: 'contact', label: content.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111111]/80 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div 
            onClick={() => scrollToSection('hero')}
            className="text-3xl font-black cursor-pointer font-syne tracking-tight hover:text-[#E4FF1A] transition-colors"
        >
          ADA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#E4FF1A] ${
                activeSection === item.id ? 'text-[#E4FF1A]' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-3 ml-8 pl-8 border-l border-white/10">
            {Object.values(Language).map((lang) => (
              <button
                key={lang}
                onClick={() => setLang(lang)}
                className={`text-xs font-mono transition-all ${
                  currentLang === lang 
                    ? `text-[#E4FF1A] font-bold` 
                    : 'text-gray-600 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Glowing Breathing Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E4FF1A] shadow-[0_0_10px_#E4FF1A] animate-pulse opacity-80"></div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left text-white hover:text-[#E4FF1A] uppercase tracking-widest font-bold text-sm"
            >
              {item.label}
            </button>
          ))}
          <div className="flex space-x-6 pt-6 border-t border-white/10">
             {Object.values(Language).map((lang) => (
              <button
                key={lang}
                onClick={() => setLang(lang)}
                className={`text-sm font-mono ${currentLang === lang ? 'text-[#E4FF1A]' : 'text-gray-500'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

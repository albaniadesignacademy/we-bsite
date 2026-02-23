import React, { useState, useEffect } from 'react';
import { Language, NavContent } from '../types';

interface NavigationProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  content: NavContent;
  activeSection: string;
  scrollToSection: (id: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLang, setLang, content, activeSection, scrollToSection, theme, toggleTheme }) => {
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

  const getGlowStyle = () => {
    return theme === 'light' 
      ? 'hover:text-black hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.35)]' 
      : 'hover:text-[var(--accent)] hover:drop-shadow-[0_0_15px_var(--accent)]';
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1001] transition-all duration-300 ${
        isScrolled ? 'bg-[var(--bg)]/80 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div 
            onClick={() => scrollToSection('hero')}
            className={`text-3xl font-black cursor-pointer font-syne tracking-tight transition-all duration-300 ${getGlowStyle()}`}
        >
          ADA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeSection === item.id 
                ? (theme === 'light' ? 'text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]' : 'text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent)]') 
                : 'text-[var(--text-muted)]'
              } ${getGlowStyle()}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-[var(--glass-border)]">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--glass)] transition-all group"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" stroke="var(--accent)" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="var(--accent)" fill="var(--accent)" />
                  </svg>
                )}
              </button>

              {/* Language Switcher */}
              <div className="flex items-center space-x-3">
                {Object.values(Language).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLang(lang)}
                    className={`text-xs font-mono transition-all ${
                      currentLang === lang 
                        ? `text-[var(--accent)] font-bold underline underline-offset-4` 
                        : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    } ${getGlowStyle()}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
             <button 
                onClick={toggleTheme}
                className="p-2 transition-transform active:scale-90"
              >
                {theme === 'dark' ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                )}
              </button>
              <button 
                className="text-[var(--text-main)]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
        </div>
      </div>
      
      {/* Glowing Breathing Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse opacity-60"></div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg)] border-b border-[var(--glass-border)] p-6 flex flex-col space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left text-[var(--text-main)] hover:text-[var(--accent)] uppercase tracking-widest font-bold text-sm"
            >
              {item.label}
            </button>
          ))}
          <div className="flex space-x-6 pt-6 border-t border-[var(--glass-border)]">
             {Object.values(Language).map((lang) => (
              <button
                key={lang}
                onClick={() => setLang(lang)}
                className={`text-sm font-mono ${currentLang === lang ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}
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
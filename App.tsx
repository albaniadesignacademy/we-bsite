import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Teachers from './components/Teachers';
import StudentWork from './components/StudentWork';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>(Language.AL);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const content = TRANSLATIONS[currentLang];

  useEffect(() => {
    // Optimized class switching
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen transition-colors duration-400 selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Navigation 
        currentLang={currentLang}
        setLang={setCurrentLang}
        content={content.nav}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Teachers content={content.teachers} theme={theme} />
        <StudentWork content={content.work} />
        <FAQ content={content.faq} title={content.nav.faq} />
        <Contact content={content.contact} />
      </main>

      <footer className="py-12 text-center text-[var(--text-muted)] text-xs tracking-widest border-t border-[var(--glass-border)] uppercase font-mono">
        &copy; 2026 Albanian Design Academy.<br/> Tirana, Albania
      </footer>

      <WhatsAppWidget content={content.whatsapp} theme={theme} />
    </div>
  );
}

export default App;
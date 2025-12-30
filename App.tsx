
import React, { useState } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Teachers from './components/Teachers';
import StudentWork from './components/StudentWork';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>(Language.AL);
  const [activeSection, setActiveSection] = useState('hero');

  const content = TRANSLATIONS[currentLang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#E4FF1A] selection:text-black">
      <Navigation 
        currentLang={currentLang}
        setLang={setCurrentLang}
        content={content.nav}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Teachers content={content.teachers} />
        <StudentWork content={content.work} />
        <FAQ content={content.faq} title={content.nav.faq} />
        <Contact content={content.contact} />
      </main>

      <footer className="py-12 text-center text-gray-700 text-xs tracking-widest border-t border-white/5 uppercase font-mono">
        &copy; 2026 Albanian Design Academy.<br/> Tirana, Albania
      </footer>
    </div>
  );
}

export default App;

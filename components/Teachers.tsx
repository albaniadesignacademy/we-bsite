
import React, { useState } from 'react';
import { TeachersContent } from '../types';
import { COLORS } from '../constants';

interface TeachersProps {
  content: TeachersContent;
  theme: 'dark' | 'light';
}

const Teachers: React.FC<TeachersProps> = ({ content, theme }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleInteraction = (idx: number) => {
    setHoveredIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="teachers" className="py-24 px-6 relative bg-[var(--bg)] overflow-hidden">
        
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="teacher-fabric-wave">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-[var(--text-main)]">
                {content.title}
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">{content.description}</p>
        </div>

        {/* Accordion Layout - Centered for 3 items */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:h-[600px] justify-center">
            {content.profiles.map((teacher, idx) => {
                const isHovered = hoveredIndex === idx;
                
                return (
                    <div 
                        key={idx} 
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleInteraction(idx)}
                        className={`relative rounded-3xl transition-all duration-700 ease-in-out cursor-pointer
                            md:h-full
                            ${isHovered ? 'h-[500px] md:flex-[3] z-20' : 'h-[200px] md:flex-1 z-0'}
                            ${hoveredIndex !== null && !isHovered ? 'opacity-50' : 'opacity-100'}
                        `}
                    >
                        <div 
                            className={`absolute -inset-5 pointer-events-none transition-opacity duration-500 z-[-1]
                                ${isHovered ? 'opacity-100' : 'opacity-0'}
                            `}
                            style={{ filter: 'url(#teacher-fabric-wave)' }}
                        >
                             <div className="absolute inset-0 border-[0.8px] border-[var(--accent)] opacity-[var(--line-opacity)] rounded-[30px] animate-teacher-wobble-1"></div>
                             <div className="absolute inset-0 border-[0.6px] border-[var(--accent)] opacity-[var(--line-opacity)] rounded-[35px] animate-teacher-wobble-2"></div>
                             <div className="absolute inset-0 border-[0.6px] border-[var(--accent)] opacity-[var(--line-opacity)] rounded-[28px] animate-teacher-wobble-3"></div>
                             <div className="absolute inset-0 border-[0.4px] border-[var(--accent)] opacity-[var(--line-opacity)] rounded-[32px] animate-teacher-wobble-4"></div>
                             <div className="absolute inset-0 border-[0.4px] border-[var(--accent)] opacity-[var(--line-opacity)] rounded-[25px] animate-teacher-wobble-5"></div>
                        </div>

                        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[var(--bg)]"
                             style={{
                                border: isHovered ? `1px solid var(--accent)` : '1px solid var(--glass-border)',
                                boxShadow: isHovered ? `0 0 30px var(--accent-glow)` : 'none',
                             }}
                        >
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={teacher.image} 
                                    alt={teacher.name} 
                                    className="w-full h-full object-cover grayscale transition-all duration-700"
                                    style={{ 
                                        filter: isHovered ? 'grayscale(0%) brightness(0.8)' : 'grayscale(100%) brightness(0.4)',
                                        objectPosition: 'top center'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 flex flex-col justify-end h-full">
                                <div className={`transition-all duration-500 ${isHovered ? 'mb-4' : 'mb-0'}`}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-syne leading-none mb-3 drop-shadow-lg">
                                        {teacher.name}
                                    </h3>
                                    {/* Role Readability Capsule - Role color set to white for light mode specifically */}
                                    <span className={`inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] drop-shadow-md ${theme === 'light' ? 'text-white' : 'text-[var(--accent)]'}`}>
                                        {teacher.role}
                                    </span>
                                </div>

                                <div 
                                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                        isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed border-t border-[var(--accent)]/50 pt-4 mt-2">
                                        {teacher.bio}
                                    </p>
                                </div>
                            </div>

                            {!isHovered && (
                                <div className="absolute bottom-6 right-6 z-20 md:top-6 md:bottom-auto">
                                    <span className="text-white text-xl bg-black/20 p-2 rounded-full backdrop-blur-sm">+</span>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
        
        <style>{`
            @keyframes teacher-wobble-1 {
                0%, 100% { transform: scale(1) translate(0,0); border-radius: 30px; }
                33% { transform: scale(1.01) translate(2px, -2px); border-radius: 35px 25px 30px 25px; }
                66% { transform: scale(0.99) translate(-2px, 2px); border-radius: 25px 35px 25px 30px; }
            }
            @keyframes teacher-wobble-2 {
                0%, 100% { transform: scale(1.02) rotate(0.5deg); border-radius: 32px; }
                50% { transform: scale(0.98) rotate(-0.5deg); border-radius: 28px 32px 32px 28px; }
            }
            @keyframes teacher-wobble-3 {
                0%, 100% { transform: scale(1); border-radius: 28px; }
                50% { transform: scale(1.03); border-radius: 35px 28px 30px 32px; }
            }
            @keyframes teacher-wobble-4 {
                0%, 100% { transform: scale(0.99) translate(1px, 1px); border-radius: 32px 28px 28px 32px; }
                50% { transform: scale(1.01) translate(-1px, -1px); border-radius: 28px 32px 32px 28px; }
            }
            @keyframes teacher-wobble-5 {
                0%, 100% { transform: scale(1.01) rotate(-0.5deg); border-radius: 30px; }
                50% { transform: scale(0.99) rotate(0.5deg); border-radius: 25px 30px 30px 25px; }
            }
            
            .animate-teacher-wobble-1 { animation: teacher-wobble-1 8s ease-in-out infinite; }
            .animate-teacher-wobble-2 { animation: teacher-wobble-2 9s ease-in-out infinite reverse; }
            .animate-teacher-wobble-3 { animation: teacher-wobble-3 10s ease-in-out infinite; }
            .animate-teacher-wobble-4 { animation: teacher-wobble-4 11s ease-in-out infinite reverse; }
            .animate-teacher-wobble-5 { animation: teacher-wobble-5 12s ease-in-out infinite; }
        `}</style>

      </div>
    </section>
  );
};

export default Teachers;

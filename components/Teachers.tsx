

import React, { useState } from 'react';
import { TeachersContent } from '../types';
import { COLORS } from '../constants';

interface TeachersProps {
  content: TeachersContent;
}

const Teachers: React.FC<TeachersProps> = ({ content }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleInteraction = (idx: number) => {
    // For mobile click or desktop hover-like interaction
    setHoveredIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="teachers" className="py-24 px-6 relative bg-[#111111] overflow-hidden">
        
      {/* Unique SVG Filter for Teachers to ensure isolation */}
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
            <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                {content.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{content.description}</p>
        </div>

        {/* Accordion Layout */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:h-[600px]">
            {content.profiles.map((teacher, idx) => {
                const isHovered = hoveredIndex === idx;
                
                return (
                    <div 
                        key={idx} 
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleInteraction(idx)}
                        // NOTE: Removed overflow-hidden from here to let borders bleed out. 
                        // Added z-index management to ensure expanded item borders sit on top.
                        className={`relative rounded-3xl transition-all duration-700 ease-in-out cursor-pointer
                            md:h-full
                            ${isHovered ? 'h-[500px] md:flex-[3] z-20' : 'h-[200px] md:flex-1 z-0'}
                            ${hoveredIndex !== null && !isHovered ? 'opacity-50' : 'opacity-100'}
                        `}
                        style={{ 
                            // Only apply shadow/border to the inner card visually, handled below.
                        }}
                    >
                        {/* 
                            CHAOTIC OUTLINE EFFECT (Visible on Expand)
                            - Uses -inset-5 to bleed outside the tile.
                            - Uses the SVG filter for waviness.
                            - Borders follow the rectangular shape (rounded-3xl + varying radii).
                        */}
                        <div 
                            className={`absolute -inset-5 pointer-events-none transition-opacity duration-500 z-[-1]
                                ${isHovered ? 'opacity-100' : 'opacity-0'}
                            `}
                            style={{ filter: 'url(#teacher-fabric-wave)' }}
                        >
                             {/* Line 1 */}
                             <div className="absolute inset-0 border-[2px] border-[#E4FF1A]/90 rounded-[30px] animate-teacher-wobble-1"></div>
                             {/* Line 2 */}
                             <div className="absolute inset-0 border-[1.5px] border-[#E4FF1A]/70 rounded-[35px] animate-teacher-wobble-2"></div>
                             {/* Line 3 */}
                             <div className="absolute inset-0 border-[1.5px] border-[#E4FF1A]/60 rounded-[28px] animate-teacher-wobble-3"></div>
                             {/* Line 4 */}
                             <div className="absolute inset-0 border-[1px] border-[#E4FF1A]/50 rounded-[32px] animate-teacher-wobble-4"></div>
                             {/* Line 5 */}
                             <div className="absolute inset-0 border-[1px] border-[#E4FF1A]/40 rounded-[25px] animate-teacher-wobble-5"></div>
                        </div>

                        {/* 
                            INNER CARD CONTENT CONTAINER
                            This handles the clipping of the image and the actual background/border of the tile.
                        */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#111111]"
                             style={{
                                border: isHovered ? `1px solid ${COLORS.accent}` : '1px solid transparent',
                                boxShadow: isHovered ? `0 0 30px ${COLORS.accent}20` : 'none',
                             }}
                        >
                            {/* Background Image with Overlay */}
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

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 flex flex-col justify-end h-full">
                                
                                {/* Static Info */}
                                <div className={`transition-all duration-500 ${isHovered ? 'mb-4' : 'mb-0'}`}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-syne leading-none mb-2 drop-shadow-lg">
                                        {teacher.name}
                                    </h3>
                                    <p className="text-[#E4FF1A] font-mono text-xs uppercase tracking-widest drop-shadow-md">
                                        {teacher.role}
                                    </p>
                                </div>

                                {/* Expandable Description */}
                                <div 
                                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                        isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed border-t border-[#E4FF1A]/50 pt-4 mt-2">
                                        {teacher.bio}
                                    </p>
                                </div>
                            </div>

                            {/* Indicator Icon */}
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
        
        {/* Keyframes for Teachers 
            We use pixel values for border-radius to keep the rectangular "Tile" shape 
            while allowing the lines to breathe and the SVG filter to do the heavy lifting for "waviness".
        */}
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
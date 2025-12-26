

import React from 'react';
import { StudentWorkContent } from '../types';
import { COLORS } from '../constants';

interface StudentWorkProps {
  content: StudentWorkContent;
}

const StudentWork: React.FC<StudentWorkProps> = ({ content }) => {
  // Quadruple items to ensure seamless loop on wide screens
  // We slide by 25% (width of 1 set) then reset
  const allItems = [...content.items, ...content.items, ...content.items, ...content.items];

  return (
    <section id="work" className="py-24 relative bg-[#111111] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute left-[-20%] top-[-10%] w-[800px] h-[800px] bg-[#E4FF1A]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* SVG Filters for Wavy Borders */}
      {/* 
          UPDATED: 
          - numOctaves="2" (was 4) -> Removes high-frequency noise/pixelation.
          - baseFrequency="0.006" -> Creates smoother, larger waves.
      */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="fabric-wave">
            <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10 px-6 mb-16">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-white">
             <span className="text-[#E4FF1A]">/</span> {content.title}
          </h2>
          <p className="text-gray-300 font-light text-lg max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

      </div>

      {/* Infinite Marquee Showcase */}
      {/* py-20 allows room for the larger, 5-line wavy borders */}
      <div className="relative w-full overflow-hidden group py-20">
         {/* Gradient Masks for edges */}
         <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none"></div>
         <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none"></div>

         {/* Moving Track */}
         <div className="flex w-max animate-scroll hover:pause">
             {allItems.map((item, idx) => (
                 <div 
                    key={idx}
                    className="relative mx-4 group/item cursor-pointer"
                 >
                     {/* 5-Line Wavy Border Effect */}
                     {/* Using the SVG filter 'fabric-wave' to distort. 
                         Added 2 more lines and adjusted border widths for anti-aliasing. 
                         Negative inset increased to -inset-8 to prevent clipping.
                     */}
                     <div 
                        className="absolute -inset-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                        style={{ filter: 'url(#fabric-wave)' }}
                     >
                        {/* Line 1 (Thickest) */}
                        <div className="absolute inset-0 border-[2px] border-[#E4FF1A]/90 rounded-[40px] animate-wobble-1"></div>
                        
                        {/* Line 2 */}
                        <div className="absolute inset-0 border-[1.5px] border-[#E4FF1A]/70 rounded-[45px] animate-wobble-2"></div>
                        
                        {/* Line 3 (New) */}
                        <div className="absolute inset-0 border-[1.5px] border-[#E4FF1A]/60 rounded-[42px] animate-wobble-4"></div>

                        {/* Line 4 (New) */}
                        <div className="absolute inset-0 border-[1px] border-[#E4FF1A]/50 rounded-[38px] animate-wobble-5"></div>

                        {/* Line 5 (Thinnest) */}
                        <div className="absolute inset-0 border-[1px] border-[#E4FF1A]/40 rounded-[35px] animate-wobble-3"></div>
                     </div>

                     {/* Image Card Content */}
                     <div className="w-[300px] md:w-[400px] aspect-[3/4] relative rounded-[20px] overflow-hidden border border-white/5 group-hover/item:border-transparent transition-colors z-10 bg-[#111111]">
                         <img 
                            src={item.coverImage} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 group-hover/item:grayscale-0 grayscale"
                         />
                         
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity"></div>
                         
                         <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                             <div className="flex items-center space-x-2 mb-2 opacity-0 group-hover/item:opacity-100 transition-opacity delay-75">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#E4FF1A] animate-pulse"></div>
                                 <span className="text-[#E4FF1A] text-[10px] uppercase tracking-[0.2em]">{item.caption}</span>
                            </div>
                            <h3 className="text-white text-xl font-bold font-syne">{item.title}</h3>
                         </div>
                     </div>
                 </div>
             ))}
         </div>
      </div>
        
      {/* CSS Animation for Marquee and Wobble */}
      <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
        }
        .animate-scroll {
            animation: scroll 30s linear infinite;
            will-change: transform;
        }
        .hover\\:pause:hover {
            animation-play-state: paused;
        }

        /* 
           Wobble Animations
           Defined 5 distinct wobble patterns to create the interwoven fabric look.
        */
        @keyframes wobble-1 {
            0%, 100% { transform: rotate(0deg) scale(1) translate(0,0); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            33% { transform: rotate(2deg) scale(1.02) translate(5px, -5px); border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
            66% { transform: rotate(-1deg) scale(0.98) translate(-5px, 5px); border-radius: 40% 60% 60% 40% / 40% 60% 60% 40%; }
        }

        @keyframes wobble-2 {
            0%, 100% { transform: rotate(0deg) scale(1.05); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { transform: rotate(-3deg) scale(0.95); border-radius: 40% 60% 60% 40% / 40% 60% 60% 40%; }
        }

        @keyframes wobble-3 {
            0%, 100% { transform: rotate(0deg) scale(1); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
            50% { transform: rotate(3deg) scale(1.1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        @keyframes wobble-4 {
            0%, 100% { transform: rotate(1deg) scale(0.98); border-radius: 50% 50% 40% 60% / 50% 40% 60% 40%; }
            50% { transform: rotate(-2deg) scale(1.03) translate(2px, 2px); border-radius: 60% 40% 50% 50% / 40% 60% 40% 60%; }
        }

        @keyframes wobble-5 {
            0%, 100% { transform: rotate(-1deg) scale(1.02); border-radius: 45% 55% 55% 45% / 55% 45% 45% 55%; }
            50% { transform: rotate(1deg) scale(0.99) translate(-2px, -2px); border-radius: 35% 65% 60% 40% / 50% 50% 60% 40%; }
        }
        
        .animate-wobble-1 { animation: wobble-1 10s ease-in-out infinite; }
        .animate-wobble-2 { animation: wobble-2 12s ease-in-out infinite reverse; }
        .animate-wobble-3 { animation: wobble-3 15s ease-in-out infinite; }
        .animate-wobble-4 { animation: wobble-4 11s ease-in-out infinite reverse; }
        .animate-wobble-5 { animation: wobble-5 13s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default StudentWork;
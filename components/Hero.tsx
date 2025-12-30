
import React, { useState, useEffect, useRef } from 'react';
import { HeroContent } from '../types';
import { COLORS } from '../constants';

interface HeroProps {
  content: HeroContent;
}

const FONTS = [
  'font-serif', 
  'font-sans', 
  'font-mono', 
  'font-playfair', 
  'font-cinzel', 
  'font-abril', 
  'font-bebas', 
  'font-bodoni', 
  'font-dancing', 
  'font-syne',
  'font-montserrat'
];

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [fontIndices, setFontIndices] = useState([0, 0, 0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Optimized: Shuffle slightly slower to save CPU
    const interval = setInterval(() => {
      setFontIndices([
        Math.floor(Math.random() * FONTS.length),
        Math.floor(Math.random() * FONTS.length),
        Math.floor(Math.random() * FONTS.length),
      ]);
    }, 180); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true }); 
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = displayWidth + 'px';
      canvas.style.height = displayHeight + 'px';
      
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      ctx.clearRect(0, 0, w, h);
      
      const scale = Math.min(w, h) / 800; 
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 1.2;
      ctx.globalCompositeOperation = 'lighter'; 
      
      time += 0.006; 
      
      // OPTIMIZATION: Reduced from 28 to 16 lines
      const numLines = 16; 
      const centerY = h * 0.75;
      
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const ni = (i / numLines) * 2 - 1; 

        ctx.globalAlpha = (0.15 + 0.5 * (1 - Math.abs(ni))) * (0.8 + 0.2 * Math.sin(time + i));

        // OPTIMIZATION: Increased step size from 25 to 45 for better performance
        for (let x = -40; x <= w + 40; x += 45) {
            const nx = x / w; 
            const breeze = Math.sin(nx * 3 + time * 0.5 + ni) * 60 * scale;
            const twist = Math.cos(nx * 6 + time * 0.7 + i * 0.5) * 40 * scale;
            const spacingMod = 1 + 0.4 * Math.sin(nx * 8 - time * 0.2);
            const lineOffset = (i - numLines / 2) * (14 * scale * spacingMod);
            const ripple = Math.sin(nx * 15 - time * 1.5) * 4 * scale;

            const y = centerY + lineOffset + breeze + twist + ripple;
            
            if (x === -40) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden bg-[#111111]">
      <div className="z-20 text-center flex flex-col items-center w-full relative">
        <div className="flex space-x-4 md:space-x-12 select-none justify-center w-full mb-8">
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[0]]}`} style={{ textShadow: `0 0 60px ${COLORS.accent}20`, color: '#FFFFFF' }}>A</span>
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[1]]}`} style={{ textShadow: `0 0 80px ${COLORS.accent}40`, color: COLORS.accent }}>D</span>
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[2]]}`} style={{ textShadow: `0 0 60px ${COLORS.accent}20`, color: '#FFFFFF' }}>A</span>
        </div>

        <div className="max-w-4xl px-6 text-center z-10">
            <div className="h-[1px] w-24 bg-[#E4FF1A] mx-auto mb-8 shadow-[0_0_20px_#E4FF1A]"></div>
            <h2 className="text-lg md:text-2xl font-extralight tracking-[0.2em] leading-relaxed text-gray-200 uppercase font-playfair mix-blend-difference">
            {content.slogan}
            </h2>
        </div>
      </div>

      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none mix-blend-screen drop-shadow-[0_0_40px_rgba(228,255,26,0.4)]"
      />
    </section>
  );
};

export default Hero;


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
    const interval = setInterval(() => {
      setFontIndices([
        Math.floor(Math.random() * FONTS.length),
        Math.floor(Math.random() * FONTS.length),
        Math.floor(Math.random() * FONTS.length),
      ]);
    }, 120); 

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
      // Use client dimensions to avoid scrollbar issues/stretching
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      
      ctx.clearRect(0, 0, w, h);
      
      // Responsive Scaling
      const scale = Math.min(w, h) / 800; 
      
      // Styling
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 1.5;
      
      // OPTIMIZATION: Removed ctx.shadowBlur as it causes significant lag.
      // The bloom is handled by CSS drop-shadow and the 'lighter' composite operation.
      ctx.shadowBlur = 0; 
      ctx.globalCompositeOperation = 'lighter'; // Additive blending for glow look
      
      time += 0.008; 
      
      // OPTIMIZATION: Reduced line count slightly
      const numLines = 28; 
      const centerY = h * 0.75;
      
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        
        // Normalized index (-1 to 1) 
        const ni = (i / numLines) * 2 - 1; 

        // Dynamic opacity
        ctx.globalAlpha = (0.2 + 0.6 * (1 - Math.abs(ni))) * (0.8 + 0.2 * Math.sin(time + i));

        // OPTIMIZATION: Increased step size from 15 to 25 to reduce draw calls
        for (let x = -50; x <= w + 50; x += 25) {
            const nx = x / w; 

            // ALGORITHM FOR INTERWOVEN FABRIC
            
            // 1. Base Undulation
            const breeze = Math.sin(nx * 3 + time * 0.5 + ni) * 60 * scale;

            // 2. The Fold/Twist
            const twist = Math.cos(nx * 6 + time * 0.7 + i * 0.5) * 40 * scale;
            
            // 3. Spacing Modulation
            const spacingMod = 1 + 0.6 * Math.sin(nx * 10 - time * 0.2);
            const lineOffset = (i - numLines / 2) * (12 * scale * spacingMod);

            // 4. Fine Detail Noise
            const ripple = Math.sin(nx * 20 - time * 2) * 5 * scale;

            // Combine
            const y = centerY + lineOffset + breeze + twist + ripple;
            
            if (x === -50) ctx.moveTo(x, y);
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
        
        {/* Animated ADA - Increased textShadow bloom */}
        <div className="flex space-x-4 md:space-x-12 select-none justify-center w-full mb-8">
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[0]]}`} style={{ textShadow: `0 0 80px ${COLORS.accent}30`, color: '#FFFFFF' }}>A</span>
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[1]]}`} style={{ textShadow: `0 0 100px ${COLORS.accent}50`, color: COLORS.accent }}>D</span>
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[2]]}`} style={{ textShadow: `0 0 80px ${COLORS.accent}30`, color: '#FFFFFF' }}>A</span>
        </div>

        {/* Slogan */}
        <div className="max-w-4xl px-6 text-center z-10">
            <div className="h-[1px] w-24 bg-[#E4FF1A] mx-auto mb-8 shadow-[0_0_25px_#E4FF1A]"></div>
            <h2 className="text-lg md:text-2xl font-extralight tracking-[0.2em] leading-relaxed text-gray-200 uppercase font-playfair mix-blend-difference">
            {content.slogan}
            </h2>
        </div>
      </div>

      {/* Abstract Animated Canvas - Increased drop-shadow bloom */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none mix-blend-screen drop-shadow-[0_0_60px_rgba(228,255,26,0.6)]"
      />
      
    </section>
  );
};

export default Hero;

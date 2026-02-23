import React, { useState, useEffect, useRef } from 'react';
import { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
}

const FONTS = [
  'font-monoton', 'font-megrim', 'font-dotgothic', 'font-pressstart', 'font-rye', 'font-zilla',
  'font-serif', 'font-sans', 'font-mono', 'font-playfair', 'font-cinzel', 'font-abril',
  'font-bebas', 'font-bodoni', 'font-dancing', 'font-syne', 'font-montserrat', 'font-unifraktur',
  'font-special', 'font-cormorant', 'font-almendra', 'font-marcellus', 'font-italiana',
  'font-tenor', 'font-libre'
];

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [fontIndices, setFontIndices] = useState([0, 1, 2]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const indices: number[] = [];
      while (indices.length < 3) {
        const r = Math.floor(Math.random() * FONTS.length);
        if (indices.indexOf(r) === -1) indices.push(r);
      }
      setFontIndices(indices);
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
      
      const isLightMode = document.body.classList.contains('light-mode');
      // Darkened line color for light mode (pure black) and accent for dark mode
      const accentColor = isLightMode ? '#000000' : '#E4FF1A';
      
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 0; // Performance optimization
      ctx.globalCompositeOperation = isLightMode ? 'source-over' : 'lighter';
      
      time += 0.005; 
      const numLines = 12; 
      const centerY = h * 0.7;
      const scale = Math.min(w, h) / 800;

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const ni = (i / numLines) * 2 - 1; 
        // Increased baseAlpha for light mode to make lines darker/more visible as requested
        const baseAlpha = isLightMode ? 0.18 : 0.25;
        ctx.globalAlpha = (baseAlpha + 0.3 * (1 - Math.abs(ni))) * (0.8 + 0.2 * Math.sin(time + i));

        for (let x = -50; x <= w + 50; x += 60) {
            const nx = x / w; 
            const breeze = Math.sin(nx * 2 + time * 0.4 + ni) * 50 * scale;
            const twist = Math.cos(nx * 4 + time * 0.5 + i * 0.4) * 35 * scale;
            const y = centerY + (i - numLines / 2) * (18 * scale) + breeze + twist;
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
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-start pt-32 md:pt-40 overflow-hidden bg-[var(--bg)]">
      <div className="z-20 text-center flex flex-col items-center w-full relative">
        <div className="flex space-x-4 md:space-x-12 select-none justify-center w-full mb-8">
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[0]]}`} style={{ textShadow: `0 0 50px var(--accent-glow)`, color: 'var(--text-main)' }}>A</span>
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[1]]}`} style={{ textShadow: `0 0 70px var(--accent-glow)`, color: 'var(--accent)' }}>D</span>
          <span className={`text-6xl md:text-[10rem] transition-all duration-75 leading-none ${FONTS[fontIndices[2]]}`} style={{ textShadow: `0 0 50px var(--accent-glow)`, color: 'var(--text-main)' }}>A</span>
        </div>

        <div className="max-w-4xl px-6 text-center z-10">
            <div className="h-[1px] w-24 bg-[var(--accent)] mx-auto mb-8 shadow-[0_0_25px var(--accent-glow)] opacity-80"></div>
            <h2 className="text-lg md:text-2xl font-extralight tracking-[0.2em] leading-relaxed text-[var(--text-muted)] uppercase font-playfair mix-blend-difference">
            {content.slogan}
            </h2>
        </div>
      </div>

      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
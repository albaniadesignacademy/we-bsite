import React, { useState } from 'react';
import { WhatsAppContent } from '../types';

interface WhatsAppWidgetProps {
  content: WhatsAppContent;
  theme: 'dark' | 'light';
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ content, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/355682412137";
  
  const accentHex = theme === 'light' ? '#1A1A1A' : '#E4FF1A';
  const iconColor = theme === 'light' ? '#FFFFFF' : '#000000';
  const glowShadow = theme === 'light' ? '0 0 15px rgba(0,0,0,0.15)' : '0 0 15px rgba(228, 255, 26, 0.4)';

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-row-reverse items-center space-x-4 space-x-reverse">
      
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
            backgroundColor: isOpen ? '#EF4444' : accentHex,
            color: isOpen ? '#FFFFFF' : iconColor,
            boxShadow: isOpen ? 'none' : glowShadow
        }}
        className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 active:scale-90 relative z-50 border border-white/10"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.52 3.65 1.43 5.17L2 22l4.98-1.39C8.42 21.5 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.6 0-3.11-.43-4.43-1.18l-.32-.18-3.29.92.93-3.13-.2-.32C3.93 15.01 3.5 13.56 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.83-6.61c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.15.18-.3.21-.57.08-.27-.13-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.44-.82-1.98-.22-.53-.46-.46-.62-.46-.16 0-.34-.02-.53-.02s-.5.07-.76.35c-.26.28-1 1-1 2.44s1.05 2.82 1.2 3.02c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.58-.64 1.81-1.27.23-.64.23-1.18.16-1.29-.07-.11-.26-.17-.54-.31z" />
          </svg>
        )}
        
        {/* Active notification indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-4 border-[var(--bg)] animate-pulse"></span>
        )}
      </button>

      {/* Persistent Prompt Bubble */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className={`px-5 py-3 rounded-2xl shadow-xl cursor-pointer border border-[var(--accent)]/30 transition-all duration-300 transform hover:scale-105 animate-fade-left glass-panel whitespace-nowrap ${
            theme === 'light' ? 'bg-white/95 text-black' : 'bg-[#111]/90 text-white'
          }`}
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>{content.floatingBtn}</span>
          </p>
        </div>
      )}

      {/* Main Chat Window */}
      <div 
        className={`absolute bottom-20 right-0 w-80 transition-all duration-500 origin-bottom-right transform ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        <div className={`glass-panel p-7 shadow-[0_10px_60px_rgba(0,0,0,0.6)] relative border overflow-hidden rounded-[32px] ${
          theme === 'light' ? 'bg-white/98 border-black/10' : 'bg-[#121212]/98 border-white/10'
        }`}>
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: accentHex }}></div>

          <div className="flex items-center justify-between mb-8">
             <h3 className="font-bold text-lg tracking-tight uppercase font-syne">{content.header}</h3>
             <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>

          <p className="text-sm opacity-80 mb-8 leading-relaxed font-light">
            {content.body}
          </p>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer"
            style={{ 
                backgroundColor: accentHex,
                color: theme === 'light' ? 'white' : 'black'
            }}
            className="block w-full py-4 text-center rounded-2xl font-black text-[11px] tracking-[0.2em] transition-all shadow-xl active:scale-95 hover:opacity-90 uppercase"
          >
            {content.btnLabel}
          </a>

          {/* Enhanced Response Time Note - Increased font size slightly */}
          <div className={`mt-8 p-4 rounded-xl border ${
            theme === 'light' ? 'bg-black/[0.03] border-black/5' : 'bg-white/[0.03] border-white/10'
          }`}>
             <p className="text-[11px] opacity-70 uppercase font-mono tracking-tight leading-normal text-center font-bold">
               {content.footer}
             </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-left {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        .animate-fade-left {
            animation: fade-left 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;
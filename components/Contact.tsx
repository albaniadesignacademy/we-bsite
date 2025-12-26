

import React from 'react';
import { ContactContent } from '../types';
import { COLORS } from '../constants';

interface ContactProps {
  content: ContactContent;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-[#111111] to-black min-h-[80vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E4FF1A]/20 to-transparent"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#E4FF1A]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair mb-6 text-white">
                <span className="text-[#E4FF1A]">/</span> {content.title}
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
                {content.subtitle}
            </p>
        </div>
        
        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Address Card */}
            <div className="glass-panel p-8 md:p-10 flex flex-col items-center text-center group hover:border-[#E4FF1A]/30 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4FF1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] mb-6 group-hover:bg-[#E4FF1A] group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase mb-2">{content.visitLabel}</p>
                    <p className="text-2xl text-white font-syne">{content.address}</p>
                </div>
            </div>

            {/* Email Card */}
            <a href={`mailto:${content.email}`} className="glass-panel p-8 md:p-10 flex flex-col items-center text-center group hover:border-[#E4FF1A]/30 transition-colors duration-500 relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4FF1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] mb-6 group-hover:bg-[#E4FF1A] group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase mb-2">{content.emailLabel}</p>
                    <p className="text-2xl text-white font-syne group-hover:text-[#E4FF1A] transition-colors">{content.email}</p>
                </div>
            </a>

            {/* Phone Card */}
            <a href="https://wa.me/355682412137" target="_blank" rel="noreferrer" className="glass-panel p-8 md:p-10 flex flex-col items-center text-center group hover:border-[#E4FF1A]/30 transition-colors duration-500 relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4FF1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] mb-6 group-hover:bg-[#E4FF1A] group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase mb-2">{content.phoneLabel}</p>
                    <p className="text-2xl text-white font-syne group-hover:text-[#E4FF1A] transition-colors">{content.phone}</p>
                </div>
            </a>

             {/* Instagram Card */}
             <a href="https://instagram.com/albanian_design_academy" target="_blank" rel="noreferrer" className="glass-panel p-8 md:p-10 flex flex-col items-center text-center group hover:border-[#E4FF1A]/30 transition-colors duration-500 relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4FF1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] mb-6 group-hover:bg-[#E4FF1A] group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                       <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={1.5} />
                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="relative z-10">
                    <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase mb-2">{content.followLabel}</p>
                    <p className="text-2xl text-white font-syne group-hover:text-[#E4FF1A] transition-colors">{content.instagram}</p>
                </div>
            </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;

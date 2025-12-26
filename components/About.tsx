
import React from 'react';
import { AboutContent } from '../types';
import { COLORS } from '../constants';

interface AboutProps {
  content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#111111]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Main Title & Description */}
          <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-playfair mb-6 text-white">
                    <span className="text-[#E4FF1A]">/</span> {content.title}
                </h2>
                <p className="text-gray-300 leading-loose text-lg font-light text-justify">
                    {content.description}
                </p>
          </div>

          {/* Structure Card */}
          <div className="space-y-6">
            <div className="glass-panel p-10 relative overflow-hidden group hover:border-[#E4FF1A]/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#E4FF1A" strokeWidth="1">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest text-[#E4FF1A] font-syne">{content.structureTitle}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                    {content.structure}
                </p>
            </div>

            {/* Special Note */}
            <div className="border-l-2 border-[#E4FF1A] pl-6 py-2">
                <p className="text-white italic font-playfair text-lg">
                    "{content.fashionShowNote}"
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

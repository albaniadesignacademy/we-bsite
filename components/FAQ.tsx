
import React, { useState } from 'react';
import { FAQItem } from '../types';
import { COLORS } from '../constants';

interface FAQProps {
  content: FAQItem[];
  title: string;
}

const FAQ: React.FC<FAQProps> = ({ content, title }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-[#111111] relative">
       {/* Decorative Gradient */}
       <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#E4FF1A]/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-playfair mb-16 text-center text-white">
            <span className="border-b-2 pb-2 border-[#E4FF1A]">{title}</span>
        </h2>

        <div className="space-y-6">
          {content.map((item, index) => (
            <div 
                key={index} 
                className="glass-panel transition-all duration-300 hover:bg-white/5"
            >
              <button
                className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-medium tracking-wide font-syne ${openIndex === index ? 'text-[#E4FF1A]' : 'text-white'}`}>
                    {item.question}
                </span>
                <span className={`text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'text-[#E4FF1A] rotate-45' : 'text-gray-500'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-0 text-gray-400 font-light leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

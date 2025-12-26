
import React, { useState, useEffect, useRef } from 'react';
import { ContactContent } from '../types';
import { COLORS } from '../constants';
import { createChatSession, sendMessageToChat } from '../services/geminiService';
import { Chat } from '@google/genai';

interface ContactProps {
  content: ContactContent;
}

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleChatSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const reply = await sendMessageToChat(chatSessionRef.current, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-[#111111] to-black">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-20">
        
        {/* Contact Info (Replaced Form) */}
        <div className="flex flex-col justify-center">
           <h2 className="text-4xl font-playfair mb-12 text-white">
                <span className="text-[#E4FF1A]">/</span> {content.title}
            </h2>
            
            <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] group-hover:bg-[#E4FF1A] group-hover:text-black transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-1">Address</p>
                        <p className="text-xl text-white font-syne">{content.address}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6 group">
                     <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] group-hover:bg-[#E4FF1A] group-hover:text-black transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-1">Email</p>
                        <a href={`mailto:${content.email}`} className="text-xl text-white font-syne hover:text-[#E4FF1A] transition-colors">{content.email}</a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-6 group">
                     <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] group-hover:bg-[#E4FF1A] group-hover:text-black transition-all">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-1">Phone / WhatsApp</p>
                        <a href="https://wa.me/355682412137" target="_blank" rel="noreferrer" className="text-xl text-white font-syne hover:text-[#E4FF1A] transition-colors">{content.phone}</a>
                    </div>
                </div>

                 {/* Instagram */}
                 <div className="flex items-start space-x-6 group">
                     <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#E4FF1A] group-hover:bg-[#E4FF1A] group-hover:text-black transition-all">
                        {/* More recognizable Instagram-like Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={1.5} />
                           <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-1">Instagram</p>
                        <a href="https://instagram.com/albanian_design_academy" target="_blank" rel="noreferrer" className="text-xl text-white font-syne hover:text-[#E4FF1A] transition-colors">{content.instagram}</a>
                    </div>
                </div>

            </div>
        </div>

        {/* Chat Interface */}
        <div className="flex flex-col justify-center items-center">
            <div className="glass-panel w-full max-w-md h-[600px] flex flex-col relative overflow-hidden shadow-2xl shadow-[#E4FF1A]/5 border border-white/10">
                
                {/* Chat Header */}
                <div className="bg-white/5 p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
                    <h3 className="text-[#E4FF1A] font-mono text-sm tracking-widest uppercase">{content.chatTitle}</h3>
                    <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-gray-500 uppercase">Live</span>
                        <div className="w-2 h-2 rounded-full bg-[#E4FF1A] animate-pulse"></div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    {messages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-30">
                            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
                                <span className="font-playfair text-2xl">A</span>
                            </div>
                            <div className="text-sm font-mono tracking-widest">SYSTEM ONLINE</div>
                        </div>
                    )}
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                                msg.role === 'user' 
                                ? 'bg-[#E4FF1A] text-black rounded-2xl rounded-br-sm font-medium' 
                                : 'bg-white/10 text-gray-200 rounded-2xl rounded-bl-sm font-light'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                             <div className="bg-white/5 text-gray-200 rounded-full px-4 py-2 text-xs animate-pulse font-mono">
                                AI TYPING...
                             </div>
                        </div>
                    )}
                    <div ref={chatEndRef}></div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md">
                    <div className="flex space-x-2 bg-white/5 rounded-full p-2 border border-white/10 focus-within:border-[#E4FF1A]/50 transition-colors">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
                            placeholder={content.chatPlaceholder}
                            className="flex-1 bg-transparent text-white text-sm px-4 focus:outline-none placeholder-gray-600"
                        />
                        <button 
                            onClick={handleChatSend}
                            disabled={loading}
                            className="bg-[#E4FF1A] hover:bg-white text-black p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-10 h-10 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

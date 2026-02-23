import React, { useState } from 'react';
import { StudentWorkContent, WorkItem } from '../types';

interface StudentWorkProps {
  content: StudentWorkContent;
}

const StudentWork: React.FC<StudentWorkProps> = ({ content }) => {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);

  const itemsRow1 = [...content.items, ...content.items];
  const itemsRow2 = [...content.items].reverse();
  const fullItemsRow2 = [...itemsRow2, ...itemsRow2];

  return (
    <section id="work" className="py-24 relative bg-[var(--bg)] overflow-hidden">
      <div className="absolute left-[-20%] top-[-10%] w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-[var(--text-main)]">
             <span className="text-[var(--accent)]">/</span> {content.title}
          </h2>
          <p className="text-[var(--accent)] text-[10px] uppercase tracking-[0.4em] font-mono mb-8 opacity-80 animate-pulse">
            {content.expandNote}
          </p>
          <p className="text-[var(--text-muted)] font-light text-lg max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>
      </div>

      <div className={`space-y-4 md:space-y-12 py-10 relative transition-all duration-700 ${selectedImage ? 'scale-[0.85] opacity-20 blur-[3px] pointer-events-none' : 'scale-100 opacity-100'}`}>
         {/* Row 1 */}
         <div className="relative w-full overflow-hidden flex">
            <div className={`flex w-max animate-scroll-left will-change-transform ${selectedImage ? 'pause' : ''}`}>
                {itemsRow1.map((item, idx) => (
                    <GalleryCard 
                        key={`r1-${idx}`}
                        item={item} 
                        id={`r1-${idx}`}
                        hoveredIdx={hoveredIdx} 
                        setHoveredIdx={setHoveredIdx}
                        onClick={() => setSelectedImage(item)}
                    />
                ))}
            </div>
         </div>

         {/* Row 2 */}
         <div className="relative w-full overflow-hidden flex">
            <div className={`flex w-max animate-scroll-right will-change-transform ${selectedImage ? 'pause' : ''}`}>
                {fullItemsRow2.map((item, idx) => (
                    <GalleryCard 
                        key={`r2-${idx}`}
                        item={item} 
                        id={`r2-${idx}`}
                        hoveredIdx={hoveredIdx} 
                        setHoveredIdx={setHoveredIdx}
                        onClick={() => setSelectedImage(item)}
                    />
                ))}
            </div>
         </div>
      </div>

      {/* Enlarged Focus View */}
      {selectedImage && (
        <div 
          className="absolute inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-focus-in pointer-events-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative glass-panel p-2 md:p-3 max-w-2xl w-full bg-[var(--bg)] border-2 border-[var(--accent)] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden rounded-[40px] md:rounded-[60px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/90 text-white flex items-center justify-center hover:bg-[var(--accent)] hover:text-black transition-all z-[110] border border-white/20 shadow-2xl active:scale-90"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="rounded-[35px] md:rounded-[55px] overflow-hidden">
                <img 
                src={selectedImage.coverImage} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-[35px] md:rounded-[55px] shadow-inner"
                />
            </div>
            <div className="p-6 pt-8 text-center">
                <h3 className="text-2xl md:text-3xl font-syne font-bold text-[var(--text-main)] mb-1 tracking-tight">{selectedImage.title}</h3>
                <p className="text-[var(--accent)] font-mono tracking-widest text-xs uppercase font-bold">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
        
      <style>{`
        @keyframes scroll-left {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scroll-right {
            0% { transform: translate3d(-50%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes focus-in {
            from { opacity: 0; transform: scale(0.8) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scroll-left { animation: scroll-left 50s linear infinite; }
        .animate-scroll-right { animation: scroll-right 50s linear infinite; }
        .animate-focus-in { animation: focus-in 0.5s cubic-bezier(0.17, 0.84, 0.44, 1) forwards; }
        .pause { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

const GalleryCard = ({ item, id, hoveredIdx, setHoveredIdx, onClick }: any) => {
    return (
        <div 
            onMouseEnter={() => setHoveredIdx(id)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={onClick}
            className="relative mx-3 md:mx-6 cursor-pointer group/item active:scale-95 transition-transform"
        >
            <div className="w-[140px] md:w-[320px] aspect-[3/4] relative rounded-[30px] md:rounded-[50px] overflow-hidden border border-[var(--glass-border)] transition-all duration-300 z-10 bg-[var(--bg)] shadow-xl group-hover/item:border-[var(--accent)] group-hover/item:shadow-[0_0_30px_var(--accent-glow)]">
                <img 
                    src={item.coverImage} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-30 group-hover/item:opacity-70 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8">
                    <h3 className="text-white text-[10px] md:text-lg font-bold font-syne truncate tracking-tight">{item.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default StudentWork;
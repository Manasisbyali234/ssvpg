import { useState } from "react";
import { galleryImages } from "../data/pgData";
import Lightbox from "./Lightbox";

const tabs = ["All", "Rooms", "Washrooms"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = activeTab === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeTab);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setActiveIndex((i) => (i + 1) % filtered.length);

  return (
    <>
      {/* Refined Filter Tabs */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setActiveIndex(null); }}
            className={`relative px-10 py-4 rounded-full text-xs font-black tracking-[0.3em] uppercase transition-all duration-500 overflow-hidden group ${
              activeTab === tab
                ? "text-white shadow-[0_20px_40px_rgba(26,77,140,0.3)]"
                : "text-slate-400 hover:text-slate-900 bg-slate-50"
            }`}
          >
            {activeTab === tab && (
              <div className="absolute inset-0 bg-slate-900 animate-fade-in" />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            className="break-inside-avoid relative overflow-hidden rounded-[2.5rem] cursor-pointer group bg-slate-100 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
            onClick={() => open(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-[1500ms] group-hover:scale-110"
            />
            
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
              <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <span className="inline-block bg-brand-accent text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  {img.category}
                </span>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  {img.alt}
                </h3>
              </div>
              
              {/* Plus Icon Button */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 shadow-2xl">
                <span className="text-brand-primary text-2xl font-light">+</span>
              </div>
            </div>

            {/* Subtle Border Glow on Hover */}
            <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/10 transition-all duration-500 rounded-[2.5rem] pointer-events-none" />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={filtered}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

import { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Premium Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-white hover:text-brand-accent transition-all duration-300 group z-[110]"
      >
        <div className="relative flex items-center justify-center w-12 h-12">
          <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
          <FaTimes size={24} className="relative" />
        </div>
      </button>

      {/* Navigation - Floating Glass Style */}
      <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-[110]">
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="pointer-events-auto w-16 h-16 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center group transition-all duration-300 transform hover:-translate-x-2 active:scale-90"
        >
          <FaChevronLeft size={20} className="group-hover:text-brand-accent transition-colors" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="pointer-events-auto w-16 h-16 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center group transition-all duration-300 transform hover:translate-x-2 active:scale-90"
        >
          <FaChevronRight size={20} className="group-hover:text-brand-accent transition-colors" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative group max-w-5xl w-full px-10 flex flex-col items-center">
        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] bg-slate-900 border border-white/10">
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="max-h-[75vh] w-auto object-contain animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Elegant Meta Info */}
        <div className="mt-10 text-center animate-fade-in delay-300">
          <div className="inline-flex items-center gap-3 bg-brand-accent text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            {images[index].category}
          </div>
          <h4 className="text-white text-3xl font-bold mb-2 tracking-tight">
            {images[index].alt}
          </h4>
          <p className="text-white/40 font-bold text-xs uppercase tracking-[0.3em]">
            {index + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}

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
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/30 transition"
      >
        <FaTimes size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white bg-white/20 rounded-full p-3 hover:bg-white/30 transition"
      >
        <FaChevronLeft size={20} />
      </button>

      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white bg-white/20 rounded-full p-3 hover:bg-white/30 transition"
      >
        <FaChevronRight size={20} />
      </button>

      <p className="absolute bottom-4 text-white/70 text-sm">
        {index + 1} / {images.length} — {images[index].alt}
      </p>
    </div>
  );
}

import { useState } from "react";
import { galleryImages } from "../data/pgData";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % galleryImages.length);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl cursor-pointer group aspect-square"
            onClick={() => open(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

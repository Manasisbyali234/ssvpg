import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Photo Gallery
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Take a virtual tour of our rooms, common areas, and facilities.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Gallery />
        </div>
      </section>
    </main>
  );
}

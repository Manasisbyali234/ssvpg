import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <main className="pt-20">
      {/* Premium Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-950">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c5a059 1px, transparent 0)' , backgroundSize: '40px 40px' }} />
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px]" />
          <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-10 animate-fade-in">
            <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase">The Collection</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Visual <span className="text-brand-accent italic">Elegance</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-10" />
          
          <p className="text-base sm:text-lg md:text-2xl max-w-xl mx-auto leading-relaxed font-light italic px-4">
            "A curated journey through our premium living spaces, capturing the essence of comfort and style."
          </p>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-10 left-10 animate-bounce duration-[3000ms] hidden lg:block">
          <div className="w-px h-24 bg-gradient-to-b from-brand-accent/50 to-transparent" />
        </div>
      </section>

      {/* Gallery Section with refined spacing */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <Gallery />
        </div>
      </section>
    </main>
  );
}

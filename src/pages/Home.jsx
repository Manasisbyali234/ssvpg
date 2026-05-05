import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaUtensils, FaMapMarkerAlt, FaHeadset, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RoomCard from "../components/RoomCard";
import TestimonialCard from "../components/TestimonialCard";
import MapSection from "../components/MapSection";
import { roomTypes, testimonials } from "../data/pgData";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&h=900&fit=crop",
    title: "Your Home Away\nFrom Home",
    subtitle: "Premium PG for Women in Bengaluru",
  },
  {
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&h=900&fit=crop",
    title: "Comfort &\nSafety First",
    subtitle: "Fully furnished rooms with 24/7 security",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop",
    title: "Delicious\nHome Food",
    subtitle: "Fresh home-cooked meals every day",
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&h=900&fit=crop",
    title: "Prime Location\nIn Bengaluru",
    subtitle: "Close to IT hubs, hospitals & transport",
  },
];

const features = [
  { icon: FaShieldAlt, title: "Safe & Secure", desc: "24/7 CCTV surveillance, secure entry, and women-only premises for your peace of mind." },
  { icon: FaUtensils, title: "Home Food", desc: "Nutritious home-cooked meals prepared fresh daily — just like mom's cooking." },
  { icon: FaMapMarkerAlt, title: "Prime Location", desc: "Located in Sahakar Nagar, close to IT hubs, hospitals, and public transport." },
  { icon: FaHeadset, title: "24/7 Support", desc: "Our staff is always available to assist you with any needs or concerns." },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  return (
    <main>
      {/* Hero Carousel */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: i === current ? 1 : 0,
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/55" />

        {/* Prev / Next */}
        <button onClick={prev} className="absolute left-2 sm:left-4 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-colors">
          <FaChevronLeft size={18} />
        </button>
        <button onClick={next} className="absolute right-2 sm:right-4 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-colors">
          <FaChevronRight size={18} />
        </button>

        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-blue-600/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Women Only · Bengaluru
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {heroSlides[current].title.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-8">{heroSlides[current].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/rooms" className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-blue-700 transition-colors">
              Explore Rooms
            </Link>
            <Link to="/contact" className="bg-white/20 backdrop-blur text-white border border-white/40 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/30 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Why Choose SSV Stays?
          </h2>
          <p className="text-center text-gray-500 mb-12">Everything you need for a comfortable and safe stay</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-blue-50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Rooms
          </h2>
          <p className="text-center text-gray-500 mb-12">Choose the room type that suits you best</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomTypes.map((room) => <RoomCard key={room.id} room={room} />)}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/rooms"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View All Rooms & Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What Our Residents Say
          </h2>
          <p className="text-center text-gray-500 mb-12">Real experiences from our happy residents</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}

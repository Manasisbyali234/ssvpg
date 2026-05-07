import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buildingImg from "../assets/building.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import preview1 from "../assets/preview1.jpg";
import { FaShieldAlt, FaUtensils, FaMapMarkerAlt, FaHeadset, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RoomCard from "../components/RoomCard";
import TestimonialCard from "../components/TestimonialCard";
import MapSection from "../components/MapSection";
import lifestyleIllustration from "../assets/home-lifestyle.png";
import { roomTypes, testimonials } from "../data/pgData";

const heroSlides = [
  {
    image: buildingImg,
    title: "Your Home Away\nFrom Home",
    subtitle: "Premium PG for Women in Bengaluru",
  },
  {
    image: room4,
    title: "Comfort &\nSafety First",
    subtitle: "Fully furnished rooms with 24/7 security",
  },
  {
    image: room5,
    title: "Delicious\nHome Food",
    subtitle: "Fresh home-cooked meals every day",
  },
  {
    image: preview1,
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
    <main className="overflow-x-hidden">
      {/* Hero Carousel */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-out transform ${
              i === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-6 z-20 bg-white/10 hover:bg-brand-accent backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hidden md:block group">
          <FaChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button onClick={next} className="absolute right-6 z-20 bg-white/10 hover:bg-brand-accent backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hidden md:block group">
          <FaChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-accent/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.3em] font-bold px-6 py-2 rounded-full mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Premium Women's Living · Bengaluru
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] transition-all duration-700">
            {heroSlides[current].title.split("\n").map((line, i) => (
              <span key={i} className="block drop-shadow-2xl">{line}</span>
            ))}
          </h1>
          <p className="text-base md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg px-4">
            {heroSlides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/rooms" className="w-full sm:w-auto bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-base hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-2xl transform hover:-translate-y-1">
              EXPLORE SUITES
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white/50 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:-translate-y-1">
              BOOK A VISIT
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 ${
                  i === current ? "w-12 bg-brand-accent" : "w-3 bg-white/40 hover:bg-white/60"
                } h-1 rounded-full`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Elevated Living Experience
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed">
              Experience a blend of luxury, safety, and community. We've redefined PG living with premium amenities and a focus on your well-being.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  <Icon size={28} className="text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vibrant Community Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={lifestyleIllustration} 
                alt="Community Lifestyle" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(26,77,140,0.15)] animate-float" 
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="inline-block bg-brand-secondary text-brand-primary px-6 py-2 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase">
                More Than Just a Room
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                A Vibrant <span className="text-brand-accent italic">Community</span> of Women
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                At SSV Stays, you're not just renting a space; you're joining a supportive network of ambitious women. Our common areas and community focus create the perfect environment to make lifelong friends and professional connections.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-2xl font-bold text-brand-primary mb-1">500+</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Happy Residents</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-2xl font-bold text-brand-primary mb-1">24/7</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Expert Care</p>
                </div>
              </div>
            </div>
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

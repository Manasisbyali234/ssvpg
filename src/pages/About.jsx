import { FaShieldAlt, FaHeart, FaLeaf, FaUsers } from "react-icons/fa";
import HouseRules from "../components/HouseRules";
import MapSection from "../components/MapSection";
import buildingImg from "../assets/building.jpg";
import aboutIllustration from "../assets/about-illustration.png";

const differentiators = [
  { icon: FaShieldAlt, title: "Safety First", desc: "CCTV, secure entry, and women-only policy ensures maximum safety for all residents." },
  { icon: FaHeart, title: "Feels Like Home", desc: "Home-cooked food, warm staff, and a caring community make you feel truly at home." },
  { icon: FaLeaf, title: "Clean & Hygienic", desc: "Daily housekeeping, purified water, and well-maintained facilities for a healthy lifestyle." },
  { icon: FaUsers, title: "Great Community", desc: "Live with like-minded working women and students in a supportive environment." },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-brand-secondary/50 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-primary blur-3xl" />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-8 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed text-slate-600">
            Founded with a vision to create the safest and most comfortable living space for women in Bengaluru.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-secondary rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={buildingImg}
                  alt="SSV Stays Building"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs bg-brand-secondary px-6 py-2 rounded-full">
                Established 2018
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Where Safety Meets <br />
                <span className="text-brand-accent italic">Sophistication</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  SSV Stays – Blossom PG for Women was founded with a single mission: to provide a safe, comfortable, and affordable home for women relocating to Bengaluru for work or studies.
                </p>
                <p>
                  Located in the heart of Sahakar Nagar, we understand the challenges women face when moving to a new city. That's why we've created a space that feels like home — with nutritious food, clean rooms, and a caring community.
                </p>
              </div>
            </div>
          </div>

          {/* New Illustration Section */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Designed for Your Lifestyle</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                We believe that living away from home shouldn't mean compromising on quality of life. Our spaces are thoughtfully curated to inspire creativity, provide relaxation, and foster a sense of belonging.
              </p>
              <div className="p-8 bg-brand-secondary/30 rounded-3xl border border-brand-accent/10">
                 <p className="font-medium text-slate-900 italic">
                  "Our residents are our family. We take pride in maintaining the highest standards of safety, hygiene, and hospitality."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src={aboutIllustration} 
                alt="Lifestyle Illustration" 
                className="w-full max-w-md h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
            <p className="text-slate-500 text-lg italic">"A standard of excellence in every detail"</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 text-center group">
                <div className="w-20 h-20 bg-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:rotate-12 transition-all duration-500">
                  <Icon className="text-brand-primary group-hover:text-white" size={30} />
                </div>
                <h3 className="font-bold text-slate-900 mb-4 text-xl">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HouseRules />
      <MapSection />
    </main>
  );
}

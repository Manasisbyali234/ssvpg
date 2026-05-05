import { FaShieldAlt, FaHeart, FaLeaf, FaUsers } from "react-icons/fa";
import HouseRules from "../components/HouseRules";
import MapSection from "../components/MapSection";

const differentiators = [
  { icon: FaShieldAlt, title: "Safety First", desc: "CCTV, secure entry, and women-only policy ensures maximum safety for all residents." },
  { icon: FaHeart, title: "Feels Like Home", desc: "Home-cooked food, warm staff, and a caring community make you feel truly at home." },
  { icon: FaLeaf, title: "Clean & Hygienic", desc: "Daily housekeeping, purified water, and well-maintained facilities for a healthy lifestyle." },
  { icon: FaUsers, title: "Great Community", desc: "Live with like-minded working women and students in a supportive environment." },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          About SSV Stays
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          A safe, comfortable, and welcoming home for women in Bengaluru.
        </p>
      </section>

      {/* About Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
                alt="SSV Stays Building"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SSV Stays – Blossom PG for Women was founded with a single mission: to provide a safe, comfortable, and affordable home for women relocating to Bengaluru for work or studies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Located in the heart of Sahakar Nagar, we understand the challenges women face when moving to a new city. That's why we've created a space that feels like home — with nutritious food, clean rooms, and a caring community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our residents are our family. We take pride in maintaining the highest standards of safety, hygiene, and hospitality so that every woman who stays with us can focus on her goals without worry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Why We're Different
          </h2>
          <p className="text-center text-gray-500 mb-12">What sets SSV Stays apart from the rest</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={22} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
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

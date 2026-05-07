import RoomCard from "../components/RoomCard";
import AmenityCard from "../components/AmenityCard";
import { roomTypes, amenities } from "../data/pgData";

export default function Rooms() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-brand-secondary/50 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-primary blur-3xl" />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Luxury Suites
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-8 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed text-slate-600">
            Thoughtfully designed spaces that blend comfort, privacy, and community.
          </p>
        </div>
      </section>

      {/* Room Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {roomTypes.map((room) => <RoomCard key={room.id} room={room} />)}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Premium Amenities
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-slate-500 text-lg italic">"Everything you need for an effortless lifestyle"</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {amenities.map((a) => <AmenityCard key={a.label} amenity={a} />)}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/10" />
        <div className="relative z-10 px-6">
          <h3 className="text-xl sm:text-2xl md:text-5xl font-bold mb-6">
            Inclusive Living. No Hidden Costs.
          </h3>
          <p className="text-slate-400 text-base md:text-xl mb-12 max-w-2xl mx-auto">All prices include nutritious home-cooked food, high-speed WiFi, and daily housekeeping.</p>
          <a
            href="tel:+919391406506"
            className="inline-block bg-brand-accent text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent/90 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
          >
            BOOK YOUR SUITE
          </a>
        </div>
      </section>
    </main>
  );
}

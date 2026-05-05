import RoomCard from "../components/RoomCard";
import AmenityCard from "../components/AmenityCard";
import { roomTypes, amenities } from "../data/pgData";

export default function Rooms() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Our Rooms
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Comfortable, clean, and fully furnished rooms designed for working women and students.
        </p>
      </section>

      {/* Room Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => <RoomCard key={room.id} room={room} />)}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            All Amenities
          </h2>
          <p className="text-center text-gray-500 mb-12">Everything included in your stay</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {amenities.map((a) => <AmenityCard key={a.label} amenity={a} />)}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          All prices include food, WiFi & housekeeping
        </h3>
        <p className="text-blue-100 mb-6">No hidden charges. Transparent pricing for a stress-free stay.</p>
        <a
          href="tel:+919391406506"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Call to Book: 093914 06506
        </a>
      </section>
    </main>
  );
}

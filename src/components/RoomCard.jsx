import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300">
      <img src={room.image} alt={room.type} className="w-full h-52 object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {room.type}
          </h3>
          <span className="bg-blue-50 text-blue-600 font-bold text-sm px-3 py-1 rounded-full">
            ₹{room.price.toLocaleString()}/mo
          </span>
        </div>
        <ul className="space-y-1.5 mb-5">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheck className="text-blue-400 shrink-0" size={11} /> {f}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="block text-center bg-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

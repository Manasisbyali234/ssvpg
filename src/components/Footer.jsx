import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaHeart } from "react-icons/fa";
import { pgInfo } from "../data/pgData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            SSV Stays
          </h3>
          <p className="text-sm text-gray-400 mb-4">Blossom PG for Women — A safe, comfortable home away from home in Bengaluru.</p>
          <a
            href={pgInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={16} /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["/", "/rooms", "/gallery", "/about", "/contact"].map((path, i) => (
              <li key={path}>
                <Link to={path} className="hover:text-blue-400 transition-colors">
                  {["Home", "Rooms", "Gallery", "About", "Contact"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0" />
              <span>{pgInfo.address}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhone className="text-blue-400 shrink-0" />
              <a href={`tel:${pgInfo.phoneLink}`} className="hover:text-blue-400 transition-colors">
                {pgInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {pgInfo.name}. Made with <FaHeart className="inline text-blue-500" /> for women.
      </div>
    </footer>
  );
}

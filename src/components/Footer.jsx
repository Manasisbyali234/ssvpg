import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaHeart } from "react-icons/fa";
import { pgInfo } from "../data/pgData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            SSV STAYS
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            Providing premium, safe, and comfortable living spaces for women in Bengaluru. Your home away from home.
          </p>
          <div className="flex gap-4">
            <a href={pgInfo.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/rooms", label: "Our Rooms" },
              { path: "/gallery", label: "Gallery" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact Us" }
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-brand-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Room Types</h4>
          <ul className="space-y-4 text-sm font-medium">
            {["Single Occupancy", "Double Sharing", "Triple Sharing", "Four Sharing"].map((type) => (
              <li key={type} className="hover:text-brand-accent transition-colors cursor-pointer">
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-brand-accent mt-1 shrink-0" />
              <span className="leading-relaxed">{pgInfo.address}</span>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhone className="text-brand-accent shrink-0" />
              <a href={`tel:${pgInfo.phoneLink}`} className="hover:text-brand-accent transition-colors font-semibold text-white">
                {pgInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {pgInfo.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <FaHeart className="text-rose-500" /> for Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}

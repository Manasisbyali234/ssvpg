import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { pgInfo } from "../data/pgData";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm ${
    scrolled ? "py-2 shadow-md" : "py-4"
  }`;

  const linkClass = ({ isActive }) =>
    `relative text-sm font-bold transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent after:transition-all after:duration-300 ${
      isActive ? "text-brand-primary after:w-full" : "text-slate-700 hover:text-brand-primary hover:after:w-full"
    }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold text-brand-primary transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            SSV STAYS
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300">
            Blossom PG for Women
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={`tel:${pgInfo.phoneLink}`}
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-primary/90 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 active:scale-95"
          >
            <FaPhone size={12} /> BOOK NOW
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <a
            href={`tel:${pgInfo.phoneLink}`}
            className="text-brand-primary"
          >
            <FaPhone size={18} />
          </a>
          <button onClick={() => setOpen(!open)} className="p-1 text-slate-800">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-0 h-screen md:hidden bg-white z-[60] transition-all duration-500 ease-in-out transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-slate-900 p-2">
            <FaTimes size={28} />
          </button>
        </div>
        <div className="px-10 py-8 flex flex-col gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${isActive ? "text-brand-primary" : "text-slate-400"}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-8 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Connect</p>
            <a
              href={`tel:${pgInfo.phoneLink}`}
              className="bg-brand-primary text-white text-center py-5 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3"
              onClick={() => setOpen(false)}
            >
              <FaPhone size={18} /> CALL US NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

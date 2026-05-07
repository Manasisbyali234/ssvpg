import { useState } from "react";

const initialState = { name: "", phone: "", email: "", roomType: "", moveIn: "", message: "" };

const inputClass = "w-full border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:border-brand-primary transition-all duration-300 bg-slate-50 focus:bg-white text-sm";

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [toast, setToast] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setForm(initialState);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <div className="relative group">
      {/* Decorative background element */}
      <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      {toast && (
        <div className="fixed top-24 right-6 z-[60] bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 animate-fade-in-down border border-white/10 backdrop-blur-md">
          <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-slate-900 shadow-lg">
            <span className="text-sm font-black">✓</span>
          </div>
          <div>
            <p className="text-sm">Enquiry Sent!</p>
            <p className="text-[10px] text-slate-400 font-medium">We'll contact you shortly.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative bg-white rounded-[2rem] shadow-2xl p-6 md:p-12 space-y-6 md:space-y-8 border border-slate-100">
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
            <input 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="Priya Sharma" 
              required 
              className={inputClass} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
            <input 
              name="phone" 
              value={form.phone} 
              onChange={handleChange} 
              placeholder="+91 98765 43210" 
              required 
              type="tel" 
              className={inputClass} 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
          <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="priya@example.com" 
            type="email" 
            className={inputClass} 
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Interested In</label>
            <div className="relative">
              <select 
                name="roomType" 
                value={form.roomType} 
                onChange={handleChange} 
                required 
                className={inputClass + " appearance-none cursor-pointer pr-10"}
              >
                <option value="">Select suite type</option>
                <option value="single">Single Luxury</option>
                <option value="double">Premium Double</option>
                <option value="triple">Triple Sharing</option>
                <option value="four">Four Sharing</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Preferred Move-in</label>
            <input 
              name="moveIn" 
              value={form.moveIn} 
              onChange={handleChange} 
              type="date" 
              required 
              className={inputClass + " cursor-pointer"} 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ask about specific amenities, rules, or availability..."
            rows={4}
            className={inputClass + " resize-none"}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.2em] hover:bg-brand-primary transition-all duration-300 shadow-xl hover:shadow-brand-primary/20 transform active:scale-95 flex items-center justify-center gap-3"
        >
          SUBMIT ENQUIRY
          <span className="text-lg">→</span>
        </button>
      </form>
    </div>
  );
}

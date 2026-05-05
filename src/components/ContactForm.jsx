import { useState } from "react";

const initialState = { name: "", phone: "", email: "", roomType: "", moveIn: "", message: "" };

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

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition";

  return (
    <div className="relative">
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-semibold animate-bounce">
          ✅ Enquiry sent! We'll contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Send an Enquiry
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className={inputClass} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required type="tel" className={inputClass} />
        </div>

        <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" className={inputClass} />

        <div className="grid sm:grid-cols-2 gap-4">
          <select name="roomType" value={form.roomType} onChange={handleChange} required className={inputClass}>
            <option value="">Select Room Type</option>
            <option value="single">Single Occupancy</option>
            <option value="double">Double Sharing</option>
            <option value="triple">Triple Sharing</option>
          </select>
          <input name="moveIn" value={form.moveIn} onChange={handleChange} type="date" required className={inputClass} />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Any specific requirements or questions..."
          rows={4}
          className={inputClass + " resize-none"}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}

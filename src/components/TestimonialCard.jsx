import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 group">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} size={14} className={i < t.rating ? "text-brand-accent" : "text-slate-200"} />
        ))}
      </div>
      
      <p className="text-slate-600 leading-relaxed mb-8 italic font-medium text-lg">
        "{t.review}"
      </p>

      <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
        <div className="relative">
          <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-secondary group-hover:border-brand-accent transition-colors duration-500" />
          <div className="absolute -bottom-1 -right-1 bg-brand-accent text-white p-1 rounded-full border-2 border-white">
            <FaStar size={8} />
          </div>
        </div>
        <div>
          <p className="font-bold text-slate-900">{t.name}</p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Verified Resident</p>
        </div>
      </div>
    </div>
  );
}

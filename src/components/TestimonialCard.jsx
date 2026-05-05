import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4">
        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} size={12} className={i < t.rating ? "text-amber-400" : "text-gray-200"} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed italic">"{t.review}"</p>
    </div>
  );
}

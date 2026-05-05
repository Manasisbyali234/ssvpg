import { FaCheckCircle } from "react-icons/fa";
import { houseRules } from "../data/pgData";

export default function HouseRules() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          House Rules
        </h2>
        <p className="text-center text-gray-500 mb-10">To ensure a safe and comfortable environment for all residents</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {houseRules.map((rule, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              <FaCheckCircle className="text-blue-400 mt-0.5 shrink-0" size={16} />
              <p className="text-sm text-gray-700">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

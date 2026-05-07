import {
  FaWifi, FaUtensils, FaSnowflake, FaTshirt, FaVideo,
  FaTint, FaBolt, FaBroom, FaBath, FaBan, FaLock, FaHeadset,
} from "react-icons/fa";

const iconMap = {
  wifi: FaWifi,
  food: FaUtensils,
  ac: FaSnowflake,
  laundry: FaTshirt,
  cctv: FaVideo,
  water: FaTint,
  power: FaBolt,
  housekeeping: FaBroom,
  washroom: FaBath,
  visitor: FaBan,
  secure: FaLock,
  support: FaHeadset,
};

export default function AmenityCard({ amenity }) {
  const Icon = iconMap[amenity.icon] || FaWifi;
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-accent/20 transition-all duration-500 group">
      <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-500">
        <Icon className="text-brand-primary group-hover:text-white transition-colors duration-500" size={24} />
      </div>
      <span className="text-sm font-bold text-slate-700 group-hover:text-brand-primary transition-colors duration-500">{amenity.label}</span>
    </div>
  );
}

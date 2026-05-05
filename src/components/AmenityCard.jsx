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
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
        <Icon className="text-blue-600" size={20} />
      </div>
      <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
    </div>
  );
}

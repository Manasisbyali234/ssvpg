import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.type} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
          <span className="text-brand-primary font-bold text-sm">
            ₹{room.price.toLocaleString()}
            <span className="text-[10px] text-slate-500 font-medium ml-1">/ MONTH</span>
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
          {room.type}
        </h3>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {room.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
              <div className="w-5 h-5 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
                <FaCheck className="text-brand-primary" size={8} />
              </div>
              {f}
            </li>
          ))}
        </ul>
        
        <Link
          to="/contact"
          className="w-full text-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-brand-primary transition-all duration-300 transform active:scale-95 shadow-lg"
        >
          SECURE THIS ROOM
        </Link>
      </div>
    </div>
  );
}

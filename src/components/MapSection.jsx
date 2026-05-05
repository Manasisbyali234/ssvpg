import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { pgInfo } from "../data/pgData";

export default function MapSection() {
  const mapSrc = `https://maps.google.com/maps?q=${pgInfo.lat},${pgInfo.lng}&z=16&output=embed`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Find Us Here
        </h2>
        <p className="text-center text-gray-500 mb-10">Conveniently located in Sahakar Nagar, Bengaluru</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden shadow-md h-80">
            <iframe
              title="SSV Stays Location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-rose-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Address</p>
                <p className="text-gray-600 text-sm">{pgInfo.address}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                <FaPhone className="text-rose-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Phone</p>
                <a href={`tel:${pgInfo.phoneLink}`} className="text-rose-500 font-medium hover:underline">
                  {pgInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                <FaClock className="text-rose-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Visiting Hours</p>
                <p className="text-gray-600 text-sm">{pgInfo.timing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

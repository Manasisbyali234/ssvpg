import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { pgInfo } from "../data/pgData";

const mapSrc = `https://maps.google.com/maps?q=${pgInfo.lat},${pgInfo.lng}&z=16&output=embed`;

const infoCards = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Address",
    content: pgInfo.address,
    link: null,
  },
  {
    icon: FaPhone,
    title: "Phone Number",
    content: pgInfo.phone,
    link: `tel:${pgInfo.phoneLink}`,
  },
  {
    icon: FaClock,
    title: "Visiting Hours",
    content: pgInfo.timing,
    link: null,
  },
];

export default function Contact() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Get In Touch
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message or give us a call.
        </p>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4">
            {infoCards.map(({ icon: Icon, title, content, link }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-blue-50 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-blue-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                {link ? (
                  <a href={link} className="text-sm text-blue-600 hover:underline font-medium">{content}</a>
                ) : (
                  <p className="text-sm text-gray-600">{content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <ContactForm />
          <div className="space-y-4">
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
            <a
              href={pgInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-600 transition-colors shadow-md"
            >
              <FaWhatsapp size={22} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

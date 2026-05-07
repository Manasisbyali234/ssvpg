import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { pgInfo } from "../data/pgData";
import contactIllustration from "../assets/about-illustration.png";

const mapSrc = `https://maps.google.com/maps?q=${pgInfo.lat},${pgInfo.lng}&z=16&output=embed`;

const infoCards = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Address",
    content: pgInfo.address,
    link: null,
    gradient: "from-rose-400 to-pink-600",
    bg: "from-rose-50 to-pink-50",
  },
  {
    icon: FaPhone,
    title: "Phone Number",
    content: pgInfo.phone,
    link: `tel:${pgInfo.phoneLink}`,
    gradient: "from-brand-primary to-blue-600",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    icon: FaClock,
    title: "Visiting Hours",
    content: pgInfo.timing,
    link: null,
    gradient: "from-amber-400 to-orange-500",
    bg: "from-amber-50 to-orange-50",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    content: pgInfo.email,
    link: `mailto:${pgInfo.email}`,
    gradient: "from-emerald-400 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
  },
];

export default function Contact() {
  return (
    <main className="pt-20">
      {/* Hero Section - More Impactful */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#c5a059 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold">Always Here For You</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Let's Start a <br />
            <span className="text-brand-accent italic">Conversation</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light text-slate-400">
            Whether you have a question about our suites or want to book a tour, our team is ready to welcome you home.
          </p>
        </div>
      </section>

      {/* Info Cards Section - Floating Design */}
      <section className="relative z-20 -mt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map(({ icon: Icon, title, content, link, gradient, bg }) => (
              <div
                key={title}
                className="group relative bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${bg} opacity-50 rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700`} />
                
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className="text-white" size={24} />
                </div>
                
                <div className="relative">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{title}</h3>
                  {link ? (
                    <a href={link} className="text-slate-900 font-bold text-lg hover:text-brand-primary transition-colors leading-tight block">
                      {content}
                    </a>
                  ) : (
                    <p className="text-slate-800 font-bold text-lg leading-tight">{content}</p>
                  )}
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-brand-primary font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section - Integrated Form & Map */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        {/* Background Text Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-slate-100 select-none pointer-events-none whitespace-nowrap z-0 uppercase">
          Contact Us
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-12 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Reserve Your Suite
                  </h2>
                  <div className="w-20 h-1.5 bg-brand-accent mx-auto md:mx-0 rounded-full mb-6" />
                  <p className="text-slate-500 text-base md:text-lg font-medium">
                    Fill out the form below and our concierge team will get back to you with the best available options.
                  </p>
                </div>
                <img src={contactIllustration} alt="Contact Support" className="w-32 h-32 md:w-48 md:h-48 object-contain animate-float" />
              </div>
              <ContactForm />
            </div>

            {/* Map & Social Column */}
            <div className="lg:col-span-5 space-y-8 lg:pt-24">
              {/* Elegant Map Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-white rounded-[3rem] shadow-2xl transition-transform group-hover:scale-[1.02] duration-500" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm h-[450px] border border-slate-100">
                  <iframe
                    title="SSV Stays Location"
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out"
                  />
                  
                  {/* Map Overlay Button */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${pgInfo.lat},${pgInfo.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md text-slate-900 py-3 rounded-2xl font-bold text-sm shadow-xl hover:bg-white transition-all"
                    >
                      <FaMapMarkerAlt className="text-brand-accent" />
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced WhatsApp CTA */}
              <a
                href={pgInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-white p-6 rounded-[2rem] border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                    <FaWhatsapp size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Instant Support</h4>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Available 24/7</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <span className="text-xl">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

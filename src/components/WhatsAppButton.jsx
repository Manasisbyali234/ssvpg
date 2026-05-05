import { FaWhatsapp } from "react-icons/fa";
import { pgInfo } from "../data/pgData";

export default function WhatsAppButton() {
  return (
    <a
      href={pgInfo.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

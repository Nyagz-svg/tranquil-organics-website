import { MessageCircle } from "lucide-react";
import { createRoutineWhatsAppLink } from "../data/business.js";

export default function FloatingWhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={createRoutineWhatsAppLink("I need help choosing")}
      target="_blank"
      rel="noreferrer"
      aria-label="Need help choosing? Chat with us on WhatsApp"
    >
      <MessageCircle size={19} />
      <span>Chat with us</span>
    </a>
  );
}

import { MessageCircle } from "lucide-react";
import { businessInfo } from "../data/business.js";

export default function FloatingWhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={businessInfo.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={19} />
      <span>Order on WhatsApp</span>
    </a>
  );
}

import { MessageCircle } from "lucide-react";
import { businessInfo } from "../data/business.js";

export default function BulkOrderSection() {
  return (
    <section className="bulk-section section-shell">
      <div>
        <p className="eyebrow">Wholesale and repeat orders</p>
        <h2>Bulk Orders and Salon Supply</h2>
        <p>
          Need Tranquil Roots products for your salon, retail shelf, or regular
          customer orders? Contact us on WhatsApp for bulk pricing and supply options.
        </p>
      </div>
      <a
        className="button whatsapp"
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} />
        Request Bulk Pricing on WhatsApp
      </a>
    </section>
  );
}

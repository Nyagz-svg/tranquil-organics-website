import { useState } from "react";
import { AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import BulkOrderSection from "../components/BulkOrderSection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import {
  DeliveryInfoPanel,
  PaymentMethodsPanel,
  ReturnsPolicyPanel,
} from "../components/InfoPanels.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { businessInfo, createWhatsAppLink } from "../data/business.js";
import { faqItems } from "../data/siteContent.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageMeta
        title="Contact and FAQ | Tranquil Organics"
        description="Contact Tranquil Organics by form, WhatsApp, Instagram, or email, and read FAQs about natural haircare orders, delivery, payments, and returns."
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Contact and FAQ</p>
          <h1>Ask about products, orders, delivery, and your haircare routine.</h1>
        </div>
      </section>

      <section className="section-shell section-pad contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <div className="form-grid">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone number
              <input type="tel" name="phone" />
            </label>
            <label className="full">
              Message
              <textarea name="message" rows="5" required />
            </label>
          </div>
          <button type="submit" className="button primary">
            Send Message
          </button>
          {sent && <p className="success-message">Thank you. Your message is ready for review.</p>}
        </form>

        <aside className="contact-panel">
          <h2>Order and contact details</h2>
          <a
            className="button whatsapp"
            href={createWhatsAppLink("Hello Tranquil Organics, I would like to place an order.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Order
          </a>
          <div className="contact-list">
            <p>
              <Phone size={17} /> WhatsApp: {businessInfo.whatsappDisplay}
            </p>
            <p>
              <AtSign size={17} /> Instagram: {businessInfo.instagramHandle}
            </p>
            <p>
              <Mail size={17} /> Email: {businessInfo.email}
            </p>
            <p>
              <MapPin size={17} /> {businessInfo.deliveryLocation}
            </p>
          </div>
        </aside>
      </section>

      <section id="delivery" className="section-shell info-grid section-pad">
        <DeliveryInfoPanel />
        <PaymentMethodsPanel />
        <div id="returns">
          <ReturnsPolicyPanel />
        </div>
      </section>

      <BulkOrderSection />

      <section id="faq" className="section-shell section-pad faq-section">
        <div className="section-heading centered">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions before you order.</h2>
        </div>
        <FAQAccordion faqs={faqItems} />
      </section>
    </>
  );
}

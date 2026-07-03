import { Link } from "react-router-dom";
import { AtSign, Mail, MessageCircle } from "lucide-react";
import { businessInfo } from "../data/business.js";
import LoyaltySignup from "./LoyaltySignup.jsx";

const shopLinks = [
  { label: "Shop All", to: "/shop" },
  { label: "Best Sellers", to: "/#best-sellers" },
  { label: "Hair Butter", to: "/shop?category=Hair%20Butter" },
  { label: "Hair Oil", to: "/shop?category=Hair%20Oil" },
  { label: "Conditioning Bar", to: "/shop?category=Conditioning%20Bar" },
  { label: "Routine Pack", to: "/product/complete-haircare-routine-pack" },
];

const learnLinks = [
  { label: "Build Your Routine", to: "/routine" },
  { label: "Ingredient Glossary", to: "/ingredients" },
  { label: "Haircare Tips", to: "/tips" },
  { label: "About Us", to: "/about" },
  { label: "Reviews", to: "/reviews" },
];

const careLinks = [
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/contact#faq" },
  { label: "Shipping Policy", to: "/shipping" },
  { label: "Returns Policy", to: "/returns" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "WhatsApp Support", to: businessInfo.whatsappUrl, external: true },
];

function FooterLinks({ links }) {
  return (
    <div className="footer-links">
      {links.map((link) =>
        link.external ? (
          <a key={link.label} href={link.to} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ) : (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand-lockup light">
            <span className="brand-mark">TO</span>
            <span>
              <strong>{businessInfo.name}</strong>
              <small>{businessInfo.productLine}</small>
            </span>
          </Link>
          <p>{businessInfo.tagline}</p>
        </div>

        <div>
          <h2>Shop</h2>
          <FooterLinks links={shopLinks} />
        </div>

        <div>
          <h2>Learn</h2>
          <FooterLinks links={learnLinks} />
        </div>

        <div>
          <h2>Customer Care</h2>
          <FooterLinks links={careLinks} />
        </div>

        <div>
          <h2>Connect</h2>
          <div className="footer-contact">
            <p>
              <MessageCircle size={16} /> WhatsApp: {businessInfo.whatsappDisplay}
            </p>
            <p>
              <AtSign size={16} /> Instagram: {businessInfo.instagramHandle}
            </p>
            <p>
              <Mail size={16} /> Email: {businessInfo.email}
            </p>
          </div>
        </div>
      </div>

      <div className="section-shell footer-service-grid">
        <article>
          <h2>Delivery Information</h2>
          <p>{businessInfo.deliveryInfo}</p>
        </article>
        <article>
          <h2>Payment Methods</h2>
          <p>{businessInfo.paymentMethods.join(" / ")}</p>
        </article>
      </div>

      <div className="section-shell footer-loyalty">
        <LoyaltySignup compact />
      </div>

      <div className="footer-bottom section-shell">
        <span>Copyright 2026 Tranquil Organics. All rights reserved.</span>
        <span>Natural haircare, organic hair butter, Ayurvedic hair oil, conditioning bar.</span>
      </div>
    </footer>
  );
}

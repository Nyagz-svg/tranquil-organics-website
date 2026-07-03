import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { announcementMessages } from "../data/siteContent.js";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Haircare Routine", to: "/routine" },
  { label: "Ingredients", to: "/ingredients" },
  { label: "Haircare Tips", to: "/tips" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % announcementMessages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <span>{announcementMessages[messageIndex]}</span>
        <span>Tranquil Roots by Tranquil Organics</span>
      </div>

      <nav className="navbar section-shell" aria-label="Primary navigation">
        <Link to="/" className="brand-lockup" aria-label="Tranquil Organics home">
          <span className="brand-mark">TO</span>
          <span>
            <strong>Tranquil Organics</strong>
            <small>Tranquil Roots</small>
          </span>
        </Link>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link to="/cart" className="cart-link" aria-label={`Cart with ${cartCount} items`}>
          <ShoppingBag size={20} />
          <span>Cart</span>
          <strong>{cartCount}</strong>
        </Link>
      </nav>
    </header>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { DeliveryInfoPanel, PaymentMethodsPanel } from "../components/InfoPanels.jsx";
import PageMeta from "../components/PageMeta.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { useCart } from "../context/CartContext.jsx";
import { businessInfo, createWhatsAppLink } from "../data/business.js";
import { formatPrice } from "../data/products.js";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  location: "",
  notes: "",
  paymentMethod: businessInfo.checkoutPaymentMethods[0],
};

export default function Checkout() {
  const [form, setForm] = useState(initialForm);
  const [placed, setPlaced] = useState(false);
  const { cartItems, total } = useCart();

  const whatsappMessage = useMemo(() => {
    const orderLines = cartItems.map(
      (item) => `- ${item.name}: quantity ${item.quantity}, line total ${formatPrice(item.lineTotal)}`,
    );

    return [
      "Hello Tranquil Organics, I would like to place this order.",
      `Customer name: ${form.name || "Not provided"}`,
      `Phone number: ${form.phone || "Not provided"}`,
      `Delivery location: ${form.location || "Not provided"}`,
      "Ordered items:",
      ...orderLines,
      `Total price: ${formatPrice(total)}`,
      form.notes ? `Order notes: ${form.notes}` : "Order notes: None",
    ].join("\n");
  }, [cartItems, form.location, form.name, form.notes, form.phone, total]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPlaced(true);
  }

  return (
    <>
      <PageMeta
        title="Checkout | Tranquil Organics"
        description="Complete a front-end checkout prototype for Tranquil Organics natural haircare orders with WhatsApp order support."
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Checkout</p>
          <h1>Complete your order details.</h1>
        </div>
      </section>

      <section className="section-shell trust-strip-wrap">
        <TrustBadges />
      </section>

      <section className="section-shell section-pad checkout-layout">
        {cartItems.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={36} />
            <h2>Your cart is empty</h2>
            <p>Add products before starting checkout.</p>
            <Link to="/shop" className="button primary">
              Shop Products
            </Link>
          </div>
        ) : (
          <>
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Customer details</h2>
              <div className="form-grid">
                <label>
                  Customer name
                  <input name="name" value={form.name} onChange={updateField} required />
                </label>
                <label>
                  Phone number
                  <input name="phone" type="tel" value={form.phone} onChange={updateField} required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" value={form.email} onChange={updateField} />
                </label>
                <label>
                  Delivery location
                  <input name="location" value={form.location} onChange={updateField} required />
                </label>
                <label className="full">
                  Payment method
                  <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={updateField}
                  >
                    {businessInfo.checkoutPaymentMethods.map((method) => (
                      <option key={method}>{method}</option>
                    ))}
                  </select>
                </label>
                <label className="full">
                  Order notes
                  <textarea name="notes" rows="4" value={form.notes} onChange={updateField} />
                </label>
              </div>
              <button type="submit" className="button primary">
                Place Order
              </button>
              {placed && (
                <p className="success-message">
                  Order details saved in this checkout prototype. Use WhatsApp to send the order for confirmation.
                </p>
              )}
            </form>

            <aside className="order-summary checkout-summary">
              <h2>Order Summary</h2>
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <span>
                      {item.quantity} x {item.name}
                    </span>
                    <strong>{formatPrice(item.lineTotal)}</strong>
                  </div>
                ))}
              </div>
              <div>
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <a
                href={createWhatsAppLink(whatsappMessage)}
                className="button whatsapp wide"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp Order
              </a>
              <p className="summary-note">WhatsApp: {businessInfo.whatsappDisplay}</p>
            </aside>
          </>
        )}
      </section>

      <section className="section-shell info-grid checkout-info-grid">
        <DeliveryInfoPanel />
        <PaymentMethodsPanel checkout />
      </section>
    </>
  );
}

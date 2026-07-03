import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { MAX_PRODUCT_QUANTITY, useCart } from "../context/CartContext.jsx";
import { absoluteUrl } from "../data/seo.js";
import { formatPrice } from "../data/products.js";

export default function Cart() {
  const {
    cartItems,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    subtotal,
    total,
  } =
    useCart();

  function handleClearCart() {
    if (window.confirm("Clear all items from your cart?")) {
      clearCart();
    }
  }

  return (
    <>
      <PageMeta
        title="Cart | Tranquil Organics"
        description="Review your Tranquil Organics cart, update quantities, remove products, and continue to checkout."
        canonical={absoluteUrl("/cart")}
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Cart</p>
          <h1>Your Tranquil Roots selections.</h1>
        </div>
      </section>

      <section className="section-shell trust-strip-wrap">
        <TrustBadges />
      </section>

      <section className="section-shell section-pad cart-layout">
        {cartItems.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={36} />
            <h2>Your cart is empty</h2>
            <p>Add haircare essentials from the shop to begin your order.</p>
            <Link to="/shop" className="button primary">
              Shop Products
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-copy">
                    <p className="eyebrow">{item.category}</p>
                    <h2>{item.name}</h2>
                    {item.stockLabel && <span className="stock-label">{item.stockLabel}</span>}
                    <span>{formatPrice(item.price)}</span>
                  </div>
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <Minus size={16} />
                    </button>
                    <strong>{item.quantity}</strong>
                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <strong>{formatPrice(item.lineTotal)}</strong>
                  <button
                    type="button"
                    className="icon-button remove-button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </article>
              ))}
              <button type="button" className="button secondary clear-cart-button" onClick={handleClearCart}>
                <Trash2 size={18} />
                Clear Cart
              </button>
            </div>

            <aside className="order-summary">
              <h2>Order Summary</h2>
              <p className="summary-note">Maximum quantity: {MAX_PRODUCT_QUANTITY} per product.</p>
              <div>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <div>
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <Link to="/checkout" className="button primary wide">
                Checkout
              </Link>
            </aside>
          </>
        )}
      </section>
    </>
  );
}

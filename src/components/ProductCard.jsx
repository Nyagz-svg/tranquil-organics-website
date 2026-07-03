import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/products.js";

export function Rating({ value, count }) {
  return (
    <div className="rating" aria-label={`${value} out of 5 stars`}>
      <span>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={15}
            fill={index + 1 <= Math.round(value) ? "currentColor" : "none"}
          />
        ))}
      </span>
      <small>
        {value} {count ? `(${count})` : ""}
      </small>
    </div>
  );
}

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        {product.bundleImages ? (
          <div className="bundle-image-stack" aria-label={`${product.name} product set`}>
            {product.bundleImages.map((image) => (
              <img key={image} src={image} alt="" />
            ))}
          </div>
        ) : (
          <img src={product.image} alt={`${product.name} product`} />
        )}
      </Link>
      <div className="product-card-body">
        <div>
          <div className="product-meta-row">
            <p className="eyebrow">{product.category}</p>
            {product.stockLabel && <span className="stock-label">{product.stockLabel}</span>}
          </div>
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <h3>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          {product.bundleLabel && <p className="bundle-label">{product.bundleLabel}</p>}
          <p>{product.shortDescription}</p>
        </div>
        <Rating value={product.rating} count={product.reviewCount} />
        {product.trustNote && <p className="product-trust-note">{product.trustNote}</p>}
        <div className="product-card-actions">
          <div className="price-stack">
            {product.originalPrice && <span>{formatPrice(product.originalPrice)}</span>}
            <strong>{formatPrice(product.price)}</strong>
          </div>
          <button type="button" className="button icon-text small" onClick={handleAddToCart}>
            <ShoppingBag size={17} />
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

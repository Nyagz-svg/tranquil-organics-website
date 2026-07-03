import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, MessageCircle, ShoppingBag } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import ProductCard, { Rating } from "../components/ProductCard.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { useCart } from "../context/CartContext.jsx";
import { createWhatsAppLink } from "../data/business.js";
import { formatPrice, products } from "../data/products.js";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="section-shell section-pad empty-state page-safe-top">
        <PageMeta
          title="Product Not Found | Tranquil Organics"
          description="The requested Tranquil Organics product could not be found."
        />
        <h1>Product not found</h1>
        <p>The product you are looking for is not available.</p>
        <Link to="/shop" className="button primary">
          Return to Shop
        </Link>
      </section>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id);

  return (
    <>
      <PageMeta
        title={`${product.name} | Tranquil Roots`}
        description={`${product.description} Shop ${product.name} from Tranquil Organics.`}
      />

      <section className="section-shell product-detail section-pad page-safe-top">
        <div className="product-detail-image">
          {product.bundleImages ? (
            <div className="bundle-image-stack detail-stack" aria-label={`${product.name} product set`}>
              {product.bundleImages.map((image) => (
                <img key={image} src={image} alt="" />
              ))}
            </div>
          ) : (
            <img src={product.image} alt={`${product.name} product`} />
          )}
        </div>

        <div className="product-detail-copy">
          <p className="eyebrow">
            {product.brand} - {product.category}
          </p>
          <h1>{product.name}</h1>
          <div className="detail-label-row">
            {product.stockLabel && <span className="stock-label">{product.stockLabel}</span>}
            {product.badge && <span className="product-badge">{product.badge}</span>}
            {product.bundleLabel && <span className="save-label">{product.bundleLabel}</span>}
          </div>
          <Rating value={product.rating} count={product.reviewCount} />
          <div className="detail-price">
            {product.originalPrice && <span>{formatPrice(product.originalPrice)}</span>}
            <strong>{formatPrice(product.price)}</strong>
          </div>
          {product.size && <p className="product-size">Size: {product.size}</p>}
          <p>{product.description}</p>

          <div className="detail-actions">
            <button
              type="button"
              className="button primary wide"
              onClick={() => addToCart(product.id)}
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>
            <a
              className="button whatsapp wide"
              href={createWhatsAppLink(`Hello Tranquil Organics, I would like to order ${product.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>

          <TrustBadges compact />

          {product.includes && (
            <div className="detail-panel">
              <h2>Includes</h2>
              <ul className="check-list">
                {product.includes.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="detail-panel">
            <h2>Benefits</h2>
            <ul className="check-list">
              {product.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={17} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-panel">
            <h2>Ingredients</h2>
            <p>{product.ingredients}</p>
          </div>

          <div className="detail-panel">
            <h2>How to Use</h2>
            <p>{product.howToUse}</p>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Related Products</p>
            <h2>Complete your Tranquil Roots routine.</h2>
          </div>
          <Link to="/shop" className="text-link">
            Shop all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid compact-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}

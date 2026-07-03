import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, MessageCircle, Minus, Plus, ShoppingBag } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import ProductCard, { Rating } from "../components/ProductCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { MAX_PRODUCT_QUANTITY, useCart } from "../context/CartContext.jsx";
import { businessInfo, createProductWhatsAppLink, createWhatsAppLink } from "../data/business.js";
import { absoluteUrl, productJsonLd } from "../data/seo.js";
import { customerReviews } from "../data/siteContent.js";
import { formatPrice, products } from "../data/products.js";

function ProductDetailsContent({ product }) {
  const matchingReviews = customerReviews.filter(
    (review) => review.productUsed === product.name,
  );

  const faqs = [
    {
      title: `Who is ${product.name} for?`,
      text: product.whoItIsFor,
    },
    {
      title: "Can I order through WhatsApp?",
      text: `Yes. Use the WhatsApp button or message ${businessInfo.whatsappDisplay} to confirm your order.`,
    },
    {
      title: "When will full ingredients be available?",
      text: "Full ingredient list to be updated after confirmation from the brand.",
    },
  ];

  return [
    {
      title: "Best for",
      content: product.bestFor,
    },
    {
      title: "What it does",
      content: product.whatItDoes,
      open: true,
    },
    {
      title: "Why it works",
      content: product.whyItWorks,
    },
    {
      title: "Who it is for",
      content: product.whoItIsFor,
    },
    {
      title: "Texture or feel",
      content: product.textureFeel,
    },
    {
      title: "Routine step",
      content: product.routineStep,
    },
    {
      title: "Hair concern",
      content: product.hairConcern,
    },
    {
      title: "Key ingredients",
      content: product.keyIngredients,
    },
    {
      title: "How to use",
      content: product.howToUse,
    },
    {
      title: "Full ingredients",
      content: "Full ingredient list to be updated after confirmation from the brand.",
    },
    {
      title: "Shipping and returns",
      content: `${businessInfo.deliveryInfo} ${businessInfo.returnsPolicy}`,
    },
    {
      title: "FAQs",
      content: (
        <div className="detail-mini-list">
          {faqs.map((faq) => (
            <article key={faq.title}>
              <h3>{faq.title}</h3>
              <p>{faq.text}</p>
            </article>
          ))}
        </div>
      ),
    },
    {
      title: "Reviews",
      content:
        matchingReviews.length > 0 ? (
          <div className="product-review-grid">
            {matchingReviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        ) : (
          "Review placeholders will be updated as customer feedback is confirmed."
        ),
    },
  ];
}

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="section-shell section-pad empty-state page-safe-top">
        <PageMeta
          title="Product Not Found | Tranquil Organics"
          description="The requested Tranquil Organics product could not be found."
          canonical={absoluteUrl("/shop")}
        />
        <h1>Product not found</h1>
        <p>The product you are looking for is not available.</p>
        <Link to="/shop" className="button primary">
          Return to Shop
        </Link>
      </section>
    );
  }

  const galleryImages = product.bundleImages ?? [product.image];
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const detailSections = ProductDetailsContent({ product });
  const badges = product.badges ?? (product.badge ? [product.badge] : []);

  function increaseQuantity() {
    setQuantity((current) => Math.min(MAX_PRODUCT_QUANTITY, current + 1));
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function handleAddToCart() {
    addToCart(product.id, quantity);
  }

  return (
    <>
      <PageMeta
        title={`${product.name} | Tranquil Roots Natural Haircare`}
        description={`${product.benefitStatement} Buy ${product.name} from Tranquil Organics.`}
        canonical={absoluteUrl(`/product/${product.id}`)}
        jsonLd={[productJsonLd(product)]}
      />

      <section className="section-shell product-detail section-pad page-safe-top">
        <div className="product-gallery" aria-label={`${product.name} image gallery`}>
          <div className="product-gallery-main">
            {product.bundleImages ? (
              <div className="bundle-image-stack detail-stack" aria-label={`${product.name} product set`}>
                {galleryImages.map((image) => (
                  <img key={image} src={image} alt="" />
                ))}
              </div>
            ) : (
              <img src={product.image} alt={`${product.name} product`} />
            )}
          </div>
          <div className="product-gallery-thumbs">
            {galleryImages.map((image) => (
              <img key={image} src={image} alt={`${product.name} thumbnail`} />
            ))}
          </div>
        </div>

        <div className="product-detail-copy">
          <p className="eyebrow">{product.brand}</p>
          <h1>{product.name}</h1>
          <div className="detail-label-row">
            <span className="stock-label">{product.stockLabel}</span>
            {badges.map((badge) => (
              <span className="product-badge" key={badge}>{badge}</span>
            ))}
            {product.bundleLabel && <span className="save-label">{product.bundleLabel}</span>}
          </div>
          <Rating value={product.rating} count={product.reviewCount} />
          <div className="detail-price">
            {product.originalPrice && <span>{formatPrice(product.originalPrice)}</span>}
            <strong>{formatPrice(product.price)}</strong>
          </div>
          {product.size && <p className="product-size">Size: {product.size}</p>}
          <p className="product-benefit-statement">{product.benefitStatement}</p>

          <div className="product-story-grid">
            <article>
              <span>Best for</span>
              <p>{product.bestFor}</p>
            </article>
            <article>
              <span>Texture</span>
              <p>{product.textureFeel}</p>
            </article>
            <article>
              <span>Routine step</span>
              <p>{product.routineStep}</p>
            </article>
          </div>

          <div className="quantity-purchase-row">
            <div>
              <span className="quantity-label">Quantity</span>
              <div className="quantity-control detail-quantity" aria-label={`Quantity for ${product.name}`}>
                <button
                  type="button"
                  aria-label={`Decrease ${product.name} quantity`}
                  onClick={decreaseQuantity}
                >
                  <Minus size={16} />
                </button>
                <strong>{quantity}</strong>
                <button
                  type="button"
                  aria-label={`Increase ${product.name} quantity`}
                  onClick={increaseQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <p>Maximum quantity: {MAX_PRODUCT_QUANTITY} per product.</p>
          </div>

          <div className="detail-actions">
            <button
              type="button"
              className="button primary wide"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>
            <a
              className="button whatsapp wide"
              href={createWhatsAppLink(`Hello Tranquil Organics, I would like to order ${quantity} x ${product.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
            <a
              className="button secondary wide"
              href={createProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Ask about this product
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
        </div>
      </section>

      <section className="section-shell product-detail-sections">
        {detailSections.map((section) => (
          <details className="product-accordion" key={section.title} open={section.open}>
            <summary>{section.title}</summary>
            {typeof section.content === "string" ? <p>{section.content}</p> : section.content}
          </details>
        ))}
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

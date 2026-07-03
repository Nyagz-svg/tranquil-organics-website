import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { createRoutineWhatsAppLink } from "../data/business.js";
import { formatPrice, getProductsByIds } from "../data/products.js";
import { routineOptions, routineRecommendations } from "../data/siteContent.js";

export default function RoutineBuilder() {
  const [selectedNeed, setSelectedNeed] = useState(routineOptions[0]);
  const [addedProductId, setAddedProductId] = useState("");
  const { addToCart } = useCart();
  const recommendation = routineRecommendations[selectedNeed];
  const recommendedProducts = getProductsByIds(recommendation.productIds);

  function handleAddToCart(productId) {
    addToCart(productId);
    setAddedProductId(productId);
    window.setTimeout(() => setAddedProductId(""), 1200);
  }

  return (
    <div className="routine-builder">
      <div className="routine-builder-copy">
        <p className="eyebrow">Build Your Routine</p>
        <h2>Choose your main hair concern and get a simple Tranquil Roots routine recommendation.</h2>
        <p>
          Select the need that sounds most like your hair right now. We will suggest
          a product path you can shop or ask about on WhatsApp.
        </p>
      </div>

      <div className="routine-options" aria-label="Choose your main hair concern">
        {routineOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={selectedNeed === option ? "routine-option active" : "routine-option"}
            onClick={() => setSelectedNeed(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="routine-result" aria-live="polite">
        <div className="routine-result-heading">
          <div>
            <p className="eyebrow">Recommended for {selectedNeed}</p>
            <h3>Your Tranquil Roots product path</h3>
            <p>{recommendation.message}</p>
          </div>
          <a
            className="button secondary"
            href={createRoutineWhatsAppLink(selectedNeed)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Ask about this routine on WhatsApp
          </a>
        </div>

        <div className="routine-recommendation-grid">
          {recommendedProducts.map((product) => (
            <article className="routine-recommendation-card" key={product.id}>
              <Link to={`/product/${product.id}`} className="routine-product-image">
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
              <div>
                <p className="eyebrow">{product.brand}</p>
                <h4>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h4>
                <p>{recommendation.message}</p>
                <strong>{formatPrice(product.price)}</strong>
              </div>
              <div className="routine-card-actions">
                <button
                  type="button"
                  className="button primary small"
                  onClick={() => handleAddToCart(product.id)}
                >
                  <ShoppingBag size={16} />
                  {addedProductId === product.id ? "Added" : "Add to Cart"}
                </button>
                <a
                  className="button secondary small"
                  href={createRoutineWhatsAppLink(selectedNeed)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} />
                  Ask on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <Link to="/product/complete-haircare-routine-pack" className="button primary routine-cta">
          Shop the Full Routine <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

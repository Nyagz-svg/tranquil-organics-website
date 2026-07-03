import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { createRoutineWhatsAppLink } from "../data/business.js";
import { formatPrice, getProductById } from "../data/products.js";

export default function StarterRoutineSection() {
  const starterPack = getProductById("complete-haircare-routine-pack");

  if (!starterPack) {
    return null;
  }

  return (
    <section className="starter-routine-section section-shell">
      <div className="starter-routine-copy">
        <p className="eyebrow">New to Tranquil Roots?</p>
        <h2>Start with the Complete Haircare Routine Pack.</h2>
        <p>
          Start with the Complete Haircare Routine Pack for a simple wash day,
          scalp care, and moisture sealing routine.
        </p>
        <div className="starter-badges">
          {starterPack.badges?.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <div className="starter-price">
          {starterPack.originalPrice && <span>{formatPrice(starterPack.originalPrice)}</span>}
          <strong>{formatPrice(starterPack.price)}</strong>
        </div>
        <div className="starter-actions">
          <Link to={`/product/${starterPack.id}`} className="button primary">
            Shop the Starter Routine <ArrowRight size={18} />
          </Link>
          <a
            className="button secondary"
            href={createRoutineWhatsAppLink("Full Routine")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Ask for a routine recommendation
          </a>
        </div>
      </div>

      <Link to={`/product/${starterPack.id}`} className="starter-routine-visual">
        <div className="bundle-image-stack detail-stack" aria-label={`${starterPack.name} product set`}>
          {starterPack.bundleImages.map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </div>
      </Link>
    </section>
  );
}

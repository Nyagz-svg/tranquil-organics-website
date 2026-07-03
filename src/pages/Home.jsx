import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import BulkOrderSection from "../components/BulkOrderSection.jsx";
import { DeliveryInfoPanel } from "../components/InfoPanels.jsx";
import LoyaltySignup from "../components/LoyaltySignup.jsx";
import PageMeta from "../components/PageMeta.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import RoutineBuilder from "../components/RoutineBuilder.jsx";
import ShopByConcern from "../components/ShopByConcern.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { getProductsByIds, products } from "../data/products.js";
import { customerReviews } from "../data/siteContent.js";

const benefits = [
  {
    title: "Natural Care",
    text: "Thoughtfully selected natural-inspired ingredients for gentle everyday beauty rituals.",
    icon: Leaf,
  },
  {
    title: "Scalp Nourishment",
    text: "Formulas created to support a comfortable, nourished scalp routine.",
    icon: Droplets,
  },
  {
    title: "Moisture and Shine",
    text: "Rich textures that help hair feel softer, smoother, and more manageable.",
    icon: Sparkles,
  },
  {
    title: "Everyday Confidence",
    text: "Premium care that fits wash day, protective styles, and daily self-care.",
    icon: Heart,
  },
];

const bestSellers = getProductsByIds([
  "organic-hair-growth-butter",
  "ayurvedic-hair-oil",
  "complete-haircare-routine-pack",
]);

const newArrivals = getProductsByIds([
  "conditioning-bar",
  "complete-haircare-routine-pack",
]);

export default function Home() {
  return (
    <>
      <PageMeta
        title="Tranquil Organics | Natural Haircare for Growth, Glow and Confidence"
        description="Shop premium natural haircare from Tranquil Organics and Tranquil Roots, including organic hair growth butter, Ayurvedic hair oil, conditioning bars, and routine packs."
      />

      <section className="hero-section">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tranquil Roots by Tranquil Organics</p>
            <h1>
              Natural Haircare for <span>Growth, Glow</span> and Confidence
            </h1>
            <p>
              Premium natural-inspired haircare products designed to nourish your scalp,
              soften your hair, and support a healthy routine from wash day to styling.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="button primary">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/routine" className="button ghost">
                Build My Routine
              </Link>
            </div>
            <div className="hero-proof">
              <span>
                <Leaf size={18} /> Natural-inspired care
              </span>
              <span>
                <ShieldCheck size={18} /> Premium packaging
              </span>
              <span>
                <Sparkles size={18} /> Kenya delivery
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Tranquil Roots product range">
            <img className="hero-product hero-butter" src={products[0].image} alt={products[0].name} />
            <img className="hero-product hero-oil" src={products[1].image} alt={products[1].name} />
            <img className="hero-product hero-bar" src={products[2].image} alt={products[2].name} />
          </div>
        </div>
      </section>

      <section className="section-shell trust-strip-wrap">
        <TrustBadges />
      </section>

      <section id="best-sellers" className="section-shell section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Best Sellers</p>
            <h2>Customer favourites for a complete Tranquil Roots routine.</h2>
          </div>
          <Link to="/shop" className="text-link">
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="benefits-band">
        <div className="section-shell section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">Shop by Concern</p>
            <h2>Start with the hair need you want to support.</h2>
          </div>
          <ShopByConcern />
        </div>
      </section>

      <section className="section-shell section-pad">
        <RoutineBuilder />
      </section>

      <section className="section-shell section-pad new-arrivals-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">New Arrivals</p>
            <h2>Fresh additions to support your natural haircare routine.</h2>
          </div>
          <Link to="/shop?category=Routine%20Pack" className="text-link">
            Shop new arrivals <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid compact-grid">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="benefits-band">
        <div className="section-shell section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">Why Choose Tranquil Organics</p>
            <h2>Natural beauty care with a premium everyday feel.</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article className="benefit-card" key={benefit.title}>
                  <Icon size={24} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell split-section section-pad">
        <div>
          <p className="eyebrow">Delivery</p>
          <h2>Kenya delivery with fees confirmed before dispatch.</h2>
          <p>
            Order online or through WhatsApp, then confirm delivery details before your
            Tranquil Roots products are dispatched.
          </p>
          <Link to="/contact#delivery" className="button secondary">
            View Delivery Details <ArrowRight size={18} />
          </Link>
        </div>
        <DeliveryInfoPanel />
      </section>

      <section className="reviews-band">
        <div className="section-shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Customer Reviews</p>
              <h2>Results that feel soft, calm, and consistent.</h2>
            </div>
            <Link to="/reviews" className="text-link light">
              Read more <ArrowRight size={16} />
            </Link>
          </div>
          <div className="review-grid">
            {customerReviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <LoyaltySignup />
      </section>

      <BulkOrderSection />
    </>
  );
}

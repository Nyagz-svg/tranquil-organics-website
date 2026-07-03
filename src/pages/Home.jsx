import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Headphones, Leaf, MessageCircle, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { DeliveryInfoPanel, PaymentMethodsPanel, ReturnsPolicyPanel } from "../components/InfoPanels.jsx";
import PageMeta from "../components/PageMeta.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import RoutineBuilder from "../components/RoutineBuilder.jsx";
import ShopByConcern from "../components/ShopByConcern.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { businessInfo } from "../data/business.js";
import { formatPrice, getProductsByIds, products } from "../data/products.js";
import { absoluteUrl, organizationJsonLd, productJsonLd, productListJsonLd, websiteJsonLd } from "../data/seo.js";
import { customerReviews, faqItems } from "../data/siteContent.js";

const bestSellers = getProductsByIds([
  "organic-hair-growth-butter",
  "ayurvedic-hair-oil",
  "conditioning-bar",
  "complete-haircare-routine-pack",
]);

const reasons = [
  {
    title: "Natural-inspired care",
    text: "Plant-powered haircare language with ingredient transparency while final lists are confirmed.",
    icon: Leaf,
  },
  {
    title: "Real product photography",
    text: "Product images are shown clearly so customers can inspect the butter, oil, bar, and full routine pack.",
    icon: PackageCheck,
  },
  {
    title: "Kenya delivery",
    text: "Delivery is confirmed before dispatch, with same-day or next-day options depending on location.",
    icon: Truck,
  },
  {
    title: "Support when you need it",
    text: "Customers can ask routine, delivery, bulk order, and checkout questions through WhatsApp.",
    icon: Headphones,
  },
];

const ingredientCards = [
  {
    title: "Ingredient transparency",
    text: "Full ingredient lists will be updated after confirmation from the brand.",
    icon: ShieldCheck,
  },
  {
    title: "Scalp nourishment",
    text: "Ingredient details to be updated after brand confirmation.",
    icon: Droplets,
  },
  {
    title: "Softness and shine",
    text: "Ingredient details to be updated after brand confirmation.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Tranquil Organics | Natural Haircare for Stronger, Healthier, Glowing Hair"
        description="Shop Tranquil Roots plant-powered hair oils, butters, and conditioning treatments for scalp nourishment, dryness support, softer strands, and natural haircare routines."
        canonical={absoluteUrl("/")}
        jsonLd={[
          organizationJsonLd(),
          websiteJsonLd(),
          productListJsonLd(),
          ...products.map((product) => productJsonLd(product)),
        ]}
      />

      <section className="hero-section">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tranquil Roots by Tranquil Organics</p>
            <h1>Natural Haircare for Stronger, Healthier, Glowing Hair</h1>
            <p>
              Plant-powered hair oils, butters, and conditioning treatments designed
              to nourish your scalp, reduce dryness, soften strands, and support your
              natural haircare routine.
            </p>
            <div className="hero-actions">
              <Link to="/#best-sellers" className="button primary">
                Shop Best Sellers <ArrowRight size={18} />
              </Link>
              <Link to="/routine" className="button ghost">
                Build Your Hair Routine
              </Link>
            </div>
            <div className="hero-proof">
              <span>
                <Leaf size={18} /> Natural-inspired care
              </span>
              <span>
                <ShieldCheck size={18} /> In Stock products
              </span>
              <span>
                <Sparkles size={18} /> WhatsApp support
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

      <section id="best-sellers" className="section-shell section-pad product-first-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Best-Selling Products</p>
            <h2>Shop the core Tranquil Roots routine.</h2>
          </div>
          <Link to="/shop" className="text-link">
            Shop all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid four-grid">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="benefits-band">
        <div className="section-shell section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">Shop by Hair Concern</p>
            <h2>Start with the hair need you want to support.</h2>
          </div>
          <ShopByConcern />
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">Why Tranquil Organics</p>
          <h2>Designed to help customers buy with more confidence.</h2>
        </div>
        <div className="benefit-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="benefit-card" key={reason.title}>
                <Icon size={24} />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ingredient-band">
        <div className="section-shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Key Ingredient Benefits</p>
              <h2>Clear ingredient guidance without unsupported claims.</h2>
            </div>
            <Link to="/ingredients" className="text-link light">
              View glossary <ArrowRight size={16} />
            </Link>
          </div>
          <div className="ingredient-benefit-grid">
            {ingredientCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title}>
                  <Icon size={22} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <RoutineBuilder />
      </section>

      <section className="reviews-band">
        <div className="section-shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Customer Reviews</p>
              <h2>Verified customer-style feedback for Tranquil Roots products.</h2>
            </div>
            <Link to="/reviews" className="text-link light">
              Read reviews <ArrowRight size={16} />
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
        <div className="section-heading centered">
          <p className="eyebrow">Delivery, Payment and Trust</p>
          <h2>Store details customers check before ordering.</h2>
        </div>
        <TrustBadges />
        <div className="info-grid trust-info-grid">
          <DeliveryInfoPanel />
          <PaymentMethodsPanel />
          <ReturnsPolicyPanel />
        </div>
      </section>

      <section className="benefits-band">
        <div className="section-shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FAQ Preview</p>
              <h2>Quick answers before checkout.</h2>
            </div>
            <Link to="/contact#faq" className="text-link">
              View all FAQs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="faq-preview-grid">
            {faqItems.slice(0, 4).map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">Ready to order?</p>
          <h2>Start with best sellers or send your order through WhatsApp.</h2>
          <p>
            Prices start at {formatPrice(500)}. Delivery is available within Kenya,
            and details are confirmed before dispatch.
          </p>
        </div>
        <div className="final-cta-actions">
          <Link to="/shop" className="button primary">
            Shop Best Sellers <ArrowRight size={18} />
          </Link>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="button whatsapp"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

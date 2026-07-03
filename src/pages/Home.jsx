import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Droplets,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DeliveryInfoPanel, PaymentMethodsPanel, ReturnsPolicyPanel } from "../components/InfoPanels.jsx";
import MoistureRoutineSection from "../components/MoistureRoutineSection.jsx";
import PageMeta from "../components/PageMeta.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import RoutineBuilder from "../components/RoutineBuilder.jsx";
import ShopByConcern from "../components/ShopByConcern.jsx";
import StarterRoutineSection from "../components/StarterRoutineSection.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { businessInfo, createRoutineWhatsAppLink } from "../data/business.js";
import { getProductsByIds, products } from "../data/products.js";
import { absoluteUrl, organizationJsonLd, productJsonLd, productListJsonLd, websiteJsonLd } from "../data/seo.js";
import { customerReviews, faqItems, heroTrustStripItems, visualStoryCards } from "../data/siteContent.js";

const bestSellers = getProductsByIds([
  "organic-hair-growth-butter",
  "complete-haircare-routine-pack",
  "ayurvedic-hair-oil",
  "conditioning-bar",
]);

const ingredientCards = [
  {
    title: "Ingredient transparency",
    text: "Full ingredient lists will be updated after confirmation from the brand.",
    icon: ShieldCheck,
  },
  {
    title: "Scalp nourishment",
    text: "Build a calm weekly massage routine with clear usage guidance.",
    icon: Droplets,
  },
  {
    title: "Softness and shine",
    text: "Choose products that support softer strands and natural-looking shine.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Tranquil Organics | Premium Natural Haircare Routine"
        description="Shop Tranquil Roots by Tranquil Organics for plant-powered haircare made for dry strands, scalp comfort, protective styles, and easier wash days."
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
            <p className="eyebrow">TRANQUIL ROOTS BY TRANQUIL ORGANICS</p>
            <h1>Soft, nourished natural hair starts with a simple routine.</h1>
            <p>
              Plant-powered haircare made for dry strands, scalp comfort,
              protective styles, and easier wash days.
            </p>
            <div className="hero-actions">
              <Link to="/#best-sellers" className="button primary">
                Shop Best Sellers <ArrowRight size={18} />
              </Link>
              <Link to="/routine" className="button secondary">
                Build Your Routine
              </Link>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-whatsapp-link"
              >
                <MessageCircle size={17} />
                Ask for a Routine Recommendation on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Tranquil Roots product range">
            <img className="hero-product hero-butter" src={products[0].image} alt={products[0].name} />
            <img className="hero-product hero-oil" src={products[1].image} alt={products[1].name} />
            <img className="hero-product hero-bar" src={products[2].image} alt={products[2].name} />
          </div>
        </div>
      </section>

      <section className="hero-trust-strip" aria-label="Why customers order Tranquil Roots">
        <div className="section-shell hero-trust-grid">
          {heroTrustStripItems.map((item) => (
            <span key={item}>
              <Leaf size={17} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="best-sellers" className="section-shell section-pad product-first-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Best-Selling Products</p>
            <h2>Shop the core Tranquil Roots collection.</h2>
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

      <StarterRoutineSection />

      <section className="routine-builder-band">
        <div className="section-shell section-pad">
          <RoutineBuilder />
        </div>
      </section>

      <section className="concern-section">
        <div className="section-shell section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">Shop by Hair Concern</p>
            <h2>Start with the hair need you want to support.</h2>
          </div>
          <ShopByConcern />
        </div>
      </section>

      <MoistureRoutineSection />

      <section className="ingredient-band">
        <div className="section-shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ingredient Benefits</p>
              <h2>Plant-powered care with clear, careful product guidance.</h2>
            </div>
            <Link to="/ingredients" className="text-link">
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

      <section className="reviews-band">
        <div className="section-shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Customer Proof</p>
              <h2>Realistic review placeholders for Tranquil Roots routines.</h2>
            </div>
            <Link to="/reviews" className="button secondary">
              Read More Reviews <ArrowRight size={16} />
            </Link>
          </div>
          <div className="review-grid">
            {customerReviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="visual-story-section">
        <div className="section-shell section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">A Routine You Can See and Feel</p>
            <h2>Premium visuals to add as the brand photography grows.</h2>
          </div>
          <div className="visual-story-grid">
            {visualStoryCards.map((card) => (
              <article key={card.title}>
                <Camera size={22} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
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

      <section className="faq-preview-band">
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
          <p className="eyebrow">Ready to build your routine?</p>
          <h2>Ready to build your natural haircare routine?</h2>
          <p>
            Start with the Tranquil Roots collection and choose the products that
            match your hair needs.
          </p>
        </div>
        <div className="final-cta-actions">
          <Link to="/#best-sellers" className="button primary">
            Shop Best Sellers <ArrowRight size={18} />
          </Link>
          <a
            href={createRoutineWhatsAppLink("I need help choosing")}
            target="_blank"
            rel="noreferrer"
            className="button whatsapp"
          >
            <MessageCircle size={18} />
            Ask for Help on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

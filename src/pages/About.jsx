import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";

export default function About() {
  return (
    <>
      <PageMeta
        title="About Tranquil Organics | Natural Beauty and Haircare"
        description="Learn the Tranquil Organics brand story and the Tranquil Roots product line for natural hair nourishment, wellness, and everyday self-care."
      />

      <section className="page-hero">
        <div className="section-shell narrow">
          <p className="eyebrow">About Tranquil Organics</p>
          <h1>Premium natural care created for growth, glow, and confidence.</h1>
          <p>
            Tranquil Organics is a natural beauty and haircare business focused on
            quality, confidence, wellness, and gentle care.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad story-grid">
        <div>
          <p className="eyebrow">Our Brand Story</p>
          <h2>Beauty care should feel nourishing, calm, and trustworthy.</h2>
          <p>
            Tranquil Organics was created for people who want their haircare and
            self-care routines to feel intentional. The brand blends a premium beauty
            experience with natural inspiration, giving customers products that feel
            gentle, elegant, and practical enough for everyday use.
          </p>
          <p>
            Our Tranquil Roots product line is made for customers who want natural
            solutions for hair nourishment, scalp care, and consistent self-care. From
            wash day to protective styling, each product is designed to support hair
            that feels softer, cared for, and confident.
          </p>
          <Link to="/shop" className="button primary">
            Explore Products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="values-panel">
          <article>
            <Leaf size={22} />
            <h3>Natural Focus</h3>
            <p>Ingredient-led care inspired by botanical beauty traditions.</p>
          </article>
          <article>
            <ShieldCheck size={22} />
            <h3>Quality First</h3>
            <p>A premium customer experience from product feel to packaging.</p>
          </article>
          <article>
            <Sparkles size={22} />
            <h3>Everyday Wellness</h3>
            <p>Gentle routines that support confidence and consistent self-care.</p>
          </article>
        </div>
      </section>
    </>
  );
}

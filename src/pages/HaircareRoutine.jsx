import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Moon, Repeat, Sun, ThermometerSun } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import RoutineBuilder from "../components/RoutineBuilder.jsx";
import TrustBadges from "../components/TrustBadges.jsx";

const routineSteps = [
  {
    title: "Cleanse and condition",
    text: "Cleanse and condition using the Conditioning Bar.",
  },
  {
    title: "Nourish the scalp",
    text: "Apply Ayurvedic Hair Oil to the scalp and massage gently.",
  },
  {
    title: "Seal in moisture",
    text: "Apply Organic Hair Growth Butter to seal in moisture.",
  },
  {
    title: "Stay consistent",
    text: "Repeat consistently for healthier-looking hair.",
  },
];

const tips = [
  { text: "Keep hair moisturised", icon: CheckCircle },
  { text: "Massage the scalp regularly", icon: Repeat },
  { text: "Protect hair at night", icon: Moon },
  { text: "Avoid excessive heat", icon: ThermometerSun },
  { text: "Be consistent with the routine", icon: Sun },
];

export default function HaircareRoutine() {
  return (
    <>
      <PageMeta
        title="Haircare Routine | Tranquil Organics"
        description="Build a natural haircare routine with Tranquil Roots Conditioning Bar, Ayurvedic Hair Oil, and Organic Hair Growth Butter."
      />

      <section className="page-hero">
        <div className="section-shell narrow">
          <p className="eyebrow">Haircare Routine</p>
          <h1>A simple Tranquil Roots routine for soft, nourished hair.</h1>
          <p>
            Pair the Conditioning Bar, Ayurvedic Hair Oil, and Organic Hair Growth Butter
            in a calm routine that supports moisture, scalp care, and everyday confidence.
          </p>
        </div>
      </section>

      <section className="section-shell trust-strip-wrap">
        <TrustBadges />
      </section>

      <section className="section-shell section-pad">
        <RoutineBuilder />
      </section>

      <section className="section-shell section-pad routine-grid">
        {routineSteps.map((step, index) => (
          <article className="routine-step" key={step.title}>
            <span>Step {index + 1}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="tips-band">
        <div className="section-shell section-pad split-section">
          <div>
            <p className="eyebrow">Healthy Hair Tips</p>
            <h2>Small habits make the routine feel easier.</h2>
            <p>
              Natural haircare works best when moisture, scalp care, protection, and
              consistency stay together.
            </p>
            <Link to="/shop" className="button primary">
              Shop the Routine <ArrowRight size={18} />
            </Link>
          </div>
          <div className="tip-list">
            {tips.map((tip) => {
              const Icon = tip.icon;
              return (
                <span key={tip.text}>
                  <Icon size={18} />
                  {tip.text}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

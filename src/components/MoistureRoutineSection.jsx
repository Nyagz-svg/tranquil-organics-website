import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { recommendedRoutine } from "../data/siteContent.js";
import { getProductById } from "../data/products.js";

export default function MoistureRoutineSection() {
  return (
    <section className="moisture-routine-section">
      <div className="section-shell section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Your 3-Step Moisture Routine</p>
            <h2>Simple steps for softer-feeling hair, scalp care, and moisture sealing.</h2>
          </div>
          <Link to="/product/complete-haircare-routine-pack" className="button primary">
            Shop the Complete Routine Pack <ArrowRight size={18} />
          </Link>
        </div>

        <div className="moisture-step-grid">
          {recommendedRoutine.map((step) => {
            const product = getProductById(step.productId);

            return (
              <article className="moisture-step-card" key={step.step}>
                <span>{step.step}</span>
                <CheckCircle size={22} />
                <h3>{step.title}</h3>
                {product && <strong>{product.name}</strong>}
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

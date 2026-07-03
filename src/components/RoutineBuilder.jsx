import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { recommendedRoutine, routineOptions } from "../data/siteContent.js";

export default function RoutineBuilder() {
  const [selectedNeed, setSelectedNeed] = useState(routineOptions[0]);

  return (
    <div className="routine-builder">
      <div className="routine-builder-copy">
        <p className="eyebrow">Build Your Hair Routine</p>
        <h2>Choose your main hair need and discover the Tranquil Roots products that fit your routine.</h2>
      </div>

      <div className="routine-options" aria-label="Choose your main hair need">
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
        <div>
          <p className="eyebrow">Recommended for {selectedNeed}</p>
          <h3>Your Tranquil Roots routine</h3>
        </div>
        <div className="routine-result-grid">
          {recommendedRoutine.map((item) => (
            <article key={item.step}>
              <CheckCircle size={18} />
              <span>{item.step}</span>
              <strong>{item.product}</strong>
            </article>
          ))}
        </div>
        <Link to="/shop?concern=Dry%20Hair" className="text-link">
          Shop routine products <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

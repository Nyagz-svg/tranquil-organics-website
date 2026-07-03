import PageMeta from "../components/PageMeta.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { absoluteUrl } from "../data/seo.js";
import { customerReviews } from "../data/siteContent.js";

export default function Reviews() {
  return (
    <>
      <PageMeta
        title="Reviews and Results | Tranquil Organics"
        description="Read customer reviews and results placeholders for Tranquil Roots natural haircare products from Tranquil Organics."
        canonical={absoluteUrl("/reviews")}
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Reviews and Results</p>
          <h1>Customer stories for softer routines and confident care.</h1>
        </div>
      </section>

      <section className="section-shell trust-strip-wrap">
        <TrustBadges />
      </section>

      <section className="section-shell section-pad">
        <div className="review-grid">
          {customerReviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>

      <section className="results-section">
        <div className="section-shell section-pad">
          <div className="section-heading centered">
            <p className="eyebrow">Before and After</p>
            <h2>Customer results coming soon.</h2>
            <p>Real customer photos will be added with customer permission.</p>
          </div>
          <div className="results-grid">
            {[1, 2, 3].map((item) => (
              <article className="result-card" key={item}>
                <div className="result-placeholder">
                  <span>Before</span>
                  <span>After</span>
                </div>
                <h3>Customer result #{item}</h3>
                <p>Customer results coming soon.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

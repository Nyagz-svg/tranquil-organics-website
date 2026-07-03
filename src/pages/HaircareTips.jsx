import { useState } from "react";
import { X } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import { tipArticles } from "../data/siteContent.js";

export default function HaircareTips() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <>
      <PageMeta
        title="Haircare Tips | Tranquil Organics"
        description="Read natural haircare tips for moisture, hair oil, wash day, and protective styles from Tranquil Organics."
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Haircare Tips</p>
          <h1>Simple routine notes for softer, easier natural haircare.</h1>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="article-grid">
          {tipArticles.map((article) => (
            <article className="article-card" key={article.title}>
              <p className="eyebrow">Routine Guide</p>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <button
                type="button"
                className="button secondary"
                onClick={() => setActiveArticle(article)}
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>

      {activeArticle && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActiveArticle(null)}
        >
          <article
            className="article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="icon-button modal-close"
              aria-label="Close article"
              onClick={() => setActiveArticle(null)}
            >
              <X size={18} />
            </button>
            <p className="eyebrow">Article placeholder</p>
            <h2 id="article-modal-title">{activeArticle.title}</h2>
            <p>{activeArticle.summary}</p>
            <p>
              Full article guidance will be added as Tranquil Organics expands the
              haircare education section.
            </p>
          </article>
        </div>
      )}
    </>
  );
}

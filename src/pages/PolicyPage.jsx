import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { businessInfo, policyContent } from "../data/business.js";
import { absoluteUrl, organizationJsonLd, websiteJsonLd } from "../data/seo.js";

export default function PolicyPage({ type }) {
  const policy = policyContent[type];

  return (
    <>
      <PageMeta
        title={`${policy.title} | Tranquil Organics`}
        description={policy.description}
        canonical={absoluteUrl(policy.route)}
        jsonLd={[organizationJsonLd(), websiteJsonLd()]}
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Customer Care</p>
          <h1>{policy.title}</h1>
        </div>
      </section>

      <section className="section-shell section-pad policy-layout">
        <article className="policy-card">
          <h2>{policy.title}</h2>
          <p>{policy.description}</p>
          <p>
            For order-specific help, contact Tranquil Organics on WhatsApp at{" "}
            <a href={businessInfo.whatsappUrl} target="_blank" rel="noreferrer">
              {businessInfo.whatsappDisplay}
            </a>
            .
          </p>
        </article>

        <aside className="policy-links">
          <h2>Customer Care Links</h2>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Returns Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact#faq">FAQ</Link>
        </aside>
      </section>
    </>
  );
}

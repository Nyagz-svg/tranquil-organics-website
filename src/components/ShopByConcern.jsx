import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { concerns } from "../data/siteContent.js";

export default function ShopByConcern({ activeConcern = "All", onSelect }) {
  const isInteractive = typeof onSelect === "function";

  return (
    <div className="concern-grid">
      {concerns.map((concern) => {
        const isActive = activeConcern === concern.title;
        const content = (
          <>
            <span>{concern.title}</span>
            <p>{concern.text}</p>
            <em>
              Recommended: {concern.productIds.length}{" "}
              {concern.productIds.length === 1 ? "product" : "products"}
            </em>
            <small>
              {isInteractive ? "Filter products" : "Shop concern"} <ArrowRight size={14} />
            </small>
          </>
        );

        if (isInteractive) {
          return (
            <button
              key={concern.title}
              type="button"
              className={isActive ? "concern-card active" : "concern-card"}
              onClick={() => onSelect(isActive ? "All" : concern.title)}
            >
              {content}
            </button>
          );
        }

        return (
          <Link
            key={concern.title}
            className="concern-card"
            to={`/shop?concern=${encodeURIComponent(concern.title)}`}
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}

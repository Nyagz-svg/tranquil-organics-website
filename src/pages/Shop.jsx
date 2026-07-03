import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ShopByConcern from "../components/ShopByConcern.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import { categories, products } from "../data/products.js";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");
  const [activeConcern, setActiveConcern] = useState(searchParams.get("concern") || "All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "All");
    setActiveConcern(searchParams.get("concern") || "All");
  }, [searchParams]);

  function updateFilters(nextCategory, nextConcern) {
    const params = new URLSearchParams();

    if (nextCategory !== "All") {
      params.set("category", nextCategory);
    }

    if (nextConcern !== "All") {
      params.set("concern", nextConcern);
    }

    setSearchParams(params);
  }

  function handleCategory(category) {
    setActiveCategory(category);
    updateFilters(category, activeConcern);
  }

  function handleConcern(concern) {
    setActiveConcern(concern);
    updateFilters(activeCategory, concern);
  }

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesConcern =
        activeConcern === "All" || product.concerns?.includes(activeConcern);
      const searchableText = [
        product.name,
        product.category,
        product.description,
        product.brand,
        product.concerns?.join(" "),
        product.includes?.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch = !term || searchableText.includes(term);

      return matchesCategory && matchesConcern && matchesSearch;
    });
  }, [activeCategory, activeConcern, searchTerm]);

  return (
    <>
      <PageMeta
        title="Shop Natural Haircare | Tranquil Organics"
        description="Browse Tranquil Roots organic hair growth butter, Ayurvedic hair oil, conditioning bar, and routine pack products from Tranquil Organics."
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Shop Tranquil Roots</p>
          <h1>Natural haircare essentials for moisture, shine, and routine care.</h1>
        </div>
      </section>

      <section className="section-shell trust-strip-wrap">
        <TrustBadges />
      </section>

      <section className="section-shell section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Shop by Concern</p>
            <h2>Choose a need, then browse the products that fit.</h2>
          </div>
          {activeConcern !== "All" && (
            <button
              type="button"
              className="filter-chip active"
              onClick={() => handleConcern("All")}
            >
              Clear concern
            </button>
          )}
        </div>
        <ShopByConcern activeConcern={activeConcern} onSelect={handleConcern} />
      </section>

      <section className="section-shell section-pad shop-products-section">
        <div className="shop-toolbar">
          <div className="search-box">
            <Search size={18} />
            <label className="sr-only" htmlFor="product-search">
              Search products
            </label>
            <input
              id="product-search"
              type="search"
              placeholder="Search products"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="filter-group" aria-label="Product category filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "filter-chip active" : "filter-chip"}
                onClick={() => handleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No products found</h2>
            <p>Try a different search term, product category, or hair concern.</p>
          </div>
        )}
      </section>
    </>
  );
}

import PageMeta from "../components/PageMeta.jsx";

const glossaryItems = [
  {
    title: "Castor Oil",
    text: "Ingredient details to be updated.",
  },
  {
    title: "Ayurvedic Botanicals",
    text: "Ingredient details to be updated.",
  },
  {
    title: "Natural Butters",
    text: "Ingredient details to be updated.",
  },
  {
    title: "Conditioning Agents",
    text: "Ingredient details to be updated.",
  },
];

export default function IngredientGlossary() {
  return (
    <>
      <PageMeta
        title="Ingredient Glossary | Tranquil Organics"
        description="Ingredient glossary placeholders for Tranquil Roots products. Full ingredient lists will be updated after brand confirmation."
      />

      <section className="page-hero compact">
        <div className="section-shell">
          <p className="eyebrow">Ingredient Glossary</p>
          <h1>Natural-inspired ingredients, awaiting final brand confirmation.</h1>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="notice-panel">
          <h2>Ingredient Notice</h2>
          <p>Full ingredient lists will be updated after confirmation from the brand.</p>
        </div>

        <div className="glossary-grid">
          {glossaryItems.map((item) => (
            <article className="glossary-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

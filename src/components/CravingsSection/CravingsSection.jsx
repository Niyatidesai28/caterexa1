import "./CravingsSection.css";

const cravingCards = [
  {
    image: "/craving-breakfast.jpg",
    eyebrow: "POWER BREAKFAST",
    title: "Breakfast",
    description: "Artisan pastries, hot beverages & power bowls",
  },
  {
    image: "/craving-sandwiches.jpg",
    eyebrow: "BYTE BITES",
    title: "Sandwiches",
    description: "Elevated wraps, grilled subs & deli favorites",
  },
  {
    image: "/craving-healthy.jpg",
    eyebrow: "WELLNESS FIRST",
    title: "Healthy",
    description: "Nutrient-dense meals for sustained focus",
  },
  {
    image: "/craving-italian.jpg",
    eyebrow: "ITALIAN AMORE",
    title: "Italian",
    description: "Hand-crafted pasta & wood-fired pizzas",
  },
  {
    image: "/craving-asian.jpg",
    eyebrow: "PAN-ASIAN",
    title: "Asian",
    description: "Modern takes on eastern culinary traditions",
  },
  {
    image: "/craving-individual.jpg",
    eyebrow: "DIL SE DESI",
    title: "Individual",
    description: "Regional indian food, home cooking, tiffins & dabbas",
  },
];

export default function CravingsSection() {
  return (
    <section className="cravings-section">
      <div className="cravings-inner">
        <div className="cravings-heading">
          <h2>
            Curated for <span>every craving</span>
          </h2>

          <p className="cravings-subtitle">2,400+ restaurants. Every cuisine.</p>

          <p className="cravings-description">
            From morning coffee runs to lavish client dinners, we've got every
            occasion covered.
          </p>
        </div>

        <div className="cravings-grid">
          {cravingCards.map((card) => (
            <article className="craving-card" key={card.title}>
              <div className="craving-image">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="craving-content">
                <p className="craving-eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p className="craving-text">{card.description}</p>
                <a href="#">Explore →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
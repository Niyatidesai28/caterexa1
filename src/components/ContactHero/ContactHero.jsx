import "./ContactHero.css";

const popularTopics = [
  "Late Deliveries",
  "Billing Inquiry",
  "Dietary Restrictions",
];

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-inner">
        <h1>How can we help?</h1>

        <div className="contact-search-wrap">
          <span className="contact-search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search for articles, guides, or order issues..."
            aria-label="Search help articles"
          />
        </div>

        <div className="contact-popular">
          <span>Popular:</span>

          <div className="contact-tags">
            {popularTopics.map((topic) => (
              <button type="button" key={topic}>
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
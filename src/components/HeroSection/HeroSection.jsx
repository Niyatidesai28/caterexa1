import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-kicker">
          <span className="hero-line"></span>
          <p>THE CORPORATE MEAL STANDARD</p>
        </div>

        <h1>
          <span>Good food fuels</span>
          <span>great work.</span>
        </h1>

        <p className="hero-description">
          Caterexa bridges the gap between artisan local kitchens and corporate
          logistics. We handle the complex demands of office feeding so you can
          focus on building culture. Caterexa bridges the gap between artisan
          local kitchens and corporate logistics. We handle the complex demands
          of office feeding so you can focus on building culture.
        </p>

        <div className="hero-buttons">
          <button className="hero-primary-btn">Start your plan</button>
          <button className="hero-secondary-btn">See how it works</button>
        </div>
      </div>
    </section>
  );
}
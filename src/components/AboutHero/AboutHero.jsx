import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-inner">
        <div className="about-hero-title">
          <span className="about-title-black">ABOUT</span>
          <span className="about-title-purple">CATEREXA</span>
        </div>

        <div className="about-hero-tagline">
          <p>One platform.</p>
          <p>Every meal.</p>
          <p>Every city.</p>
          <p>Finally automated.</p>
        </div>

        <div className="about-image-wrap">
          <img
            src="/about-main.jpg"
            alt="Corporate catering meeting"
            className="about-main-image"
          />

          <div className="about-small-card">
            <img
              src="/about-card.jpg"
              alt="Catered food table"
              className="about-small-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
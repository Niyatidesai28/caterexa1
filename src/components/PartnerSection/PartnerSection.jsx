import "./PartnerSection.css";

const partnerImages = [
  "/partner-food-1.jpg",
  "/partner-food-2.jpg",
  "/partner-food-3.jpg",
  "/partner-food-4.jpg",
];

export default function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="partner-inner">
        <p className="partner-eyebrow">
          For restaurants, cloud kitchens, food businesses and providers
        </p>

        <h2>
          <span>Bigger orders.</span>
          <span>Less hustle.</span>
        </h2>

        <p className="partner-description">
          The corporate market is lucrative, reliable and often, the biggest
          untapped revenue opportunity. Caterexa puts you right in front of it
          bringing you high-volume, repeat clients without the marketing spend or
          billing headaches.
        </p>

        <div className="partner-images">
          {partnerImages.map((image, index) => (
            <div className="partner-image-card" key={image}>
              <img src={image} alt={`Partner food ${index + 1}`} />
            </div>
          ))}
        </div>

        <a href="#" className="partner-button">
          Become a Partner
        </a>
      </div>
    </section>
  );
}
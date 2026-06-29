import "./TrustedBySection.css";

const logos = ["HOOK", "LUNARO", "HOOK", "LUNARO", "HOOK", "LUNARO"];

export default function TrustedBySection() {
  return (
    <section className="trusted-section">
      <div className="trusted-inner">
        <h2>TRUSTED BY</h2>
      </div>

      <div className="trusted-logo-strip">
        <div className="trusted-logo-row">
          {logos.map((logo, index) => (
            <span key={`${logo}-${index}`}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
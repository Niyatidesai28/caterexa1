import "./Footer.css";

const footerColumns = [
  {
    title: "PRODUCT",
    links: ["Recurring Plans", "Event Catering", "Gift Cards"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Careers", "Blog"],
  },
  {
    title: "SUPPORT",
    links: ["Help Center", "Contact Sales", "Partner Login"],
  },
  {
    title: "LEGAL",
    links: ["Privacy Policy", "Terms of Service", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>Caterexa</h2>

          <p>
            Elevating the corporate culinary experience through curation and
            seamless logistics.
          </p>

          <span>© 2024 Caterexa. Premium B2B Catering Editorial.</span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>

              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
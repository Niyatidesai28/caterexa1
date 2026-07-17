import { useEffect, useState } from "react";
import "./Navbar.css";
import EarlySignupModal from "../EarlySignupModal/EarlySignupModal";

const navLinks = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "meal-solutions", label: "Meal Solutions", href: "/meal-solutions" },
  { id: "partner", label: "Caterers", href: "/#partner" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const path = window.location.pathname;

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [hasTriggeredPopup, setHasTriggeredPopup] = useState(false);
  const [activeSection, setActiveSection] = useState(
    path === "/" ? window.location.hash.replace("#", "") || "home" : path.slice(1)
  );

  // Opens signup modal after first user interaction
  useEffect(() => {
    if (hasTriggeredPopup) return;

    const openPopup = () => {
      setIsSignupOpen(true);
      setHasTriggeredPopup(true);
    };

    const timer = setTimeout(() => {
      window.addEventListener("scroll", openPopup, { passive: true, once: true });
      window.addEventListener("mousemove", openPopup, { once: true });
      window.addEventListener("touchstart", openPopup, { passive: true, once: true });
      window.addEventListener("keydown", openPopup, { once: true });
    }, 1800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", openPopup);
      window.removeEventListener("mousemove", openPopup);
      window.removeEventListener("touchstart", openPopup);
      window.removeEventListener("keydown", openPopup);
    };
  }, [hasTriggeredPopup]);

  // Highlights navbar item based on scroll position
  useEffect(() => {
    if (path !== "/") {
      setActiveSection(path.slice(1));
      return;
    }

    const sections = document.querySelectorAll("[data-nav-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-120px 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [path]);

  const openSignup = () => {
    setIsSignupOpen(true);
    setHasTriggeredPopup(true);
  };

  return (
    <>
      <header className="top-navbar">
        <div className="navbar-inner">
          <a href="/#home" className="navbar-logo">
            Caterexa
          </a>

          <nav className="navbar-menu">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => setActiveSection(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <button type="button" className="start-btn" onClick={openSignup}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      <EarlySignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </>
  );
}
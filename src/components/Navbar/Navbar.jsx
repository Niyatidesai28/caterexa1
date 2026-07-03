import { useEffect, useState } from "react";
import "./Navbar.css";
import EarlySignupModal from "../EarlySignupModal/EarlySignupModal";

export default function Navbar() {
  const path = window.location.pathname;
  const hash = window.location.hash;

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [hasTriggeredPopup, setHasTriggeredPopup] = useState(false);

  useEffect(() => {
    if (hasTriggeredPopup) return;

    let listenersAdded = false;

    const openPopupOnFirstInteraction = () => {
      setIsSignupOpen(true);
      setHasTriggeredPopup(true);
    };

    const addInteractionListeners = () => {
      if (listenersAdded) return;
      listenersAdded = true;

      window.addEventListener("scroll", openPopupOnFirstInteraction, {
        passive: true,
        once: true,
      });

      window.addEventListener("mousemove", openPopupOnFirstInteraction, {
        once: true,
      });

      window.addEventListener("touchstart", openPopupOnFirstInteraction, {
        passive: true,
        once: true,
      });

      window.addEventListener("keydown", openPopupOnFirstInteraction, {
        once: true,
      });
    };

    const delayTimer = setTimeout(addInteractionListeners, 1800);

    return () => {
      clearTimeout(delayTimer);

      window.removeEventListener("scroll", openPopupOnFirstInteraction);
      window.removeEventListener("mousemove", openPopupOnFirstInteraction);
      window.removeEventListener("touchstart", openPopupOnFirstInteraction);
      window.removeEventListener("keydown", openPopupOnFirstInteraction);
    };
  }, [hasTriggeredPopup]);

  const openSignup = () => {
    setIsSignupOpen(true);
    setHasTriggeredPopup(true);
  };

  return (
    <>
      <header className="top-navbar">
        <div className="navbar-inner">
          <a href="/" className="navbar-logo">
            Caterexa
          </a>

          <nav className="navbar-menu">
            <a
              href="/"
              className={`nav-link ${
                path === "/" && hash === "" ? "active" : ""
              }`}
            >
              Home
            </a>

            <a
              href="/#meal-solutions"
              className={`nav-link ${
                path === "/" && hash === "#meal-solutions" ? "active" : ""
              }`}
            >
              Meal Solutions
            </a>

            <a href="/#partner" className="nav-link">
              Caterers
            </a>

            <a
              href="/about"
              className={`nav-link ${path === "/about" ? "active" : ""}`}
            >
              About Us
            </a>

            <a
              href="/contact"
              className={`nav-link ${path === "/contact" ? "active" : ""}`}
            >
              Contact
            </a>
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
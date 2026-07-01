import { useEffect, useState } from "react";
import "./Navbar.css";
import EarlySignupModal from "../EarlySignupModal/EarlySignupModal";

export default function Navbar() {
  const path = window.location.pathname;

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

  return (
    <>
      <header className="top-navbar">
        <div className="navbar-inner">
          <a href="/" className="navbar-logo">
            <span>Caterexa</span>
          </a>

          <nav className="navbar-menu">
            <a href="/" className={`nav-link ${path === "/" ? "active" : ""}`}>
              Business Meal Solutions
            </a>

            <a href="/#partner" className="nav-link">
              For Food Provider
            </a>

            <a
              href="/about"
              className={`nav-link ${path === "/about" ? "active" : ""}`}
            >
              About
            </a>
          </nav>

          <div className="navbar-actions">
            <button type="button" className="signin-btn">
              Sign In
            </button>

            <button
              type="button"
              className="start-btn"
              onClick={() => {
                setIsSignupOpen(true);
                setHasTriggeredPopup(true);
              }}
            >
              Start Ordering
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
import { ArrowRight } from "lucide-react";
import "./CorporateMealHero.css";

/**
 * First hero section of the Meal Solutions page.
 * Content and images are centralized for easy future updates.
 */
const HERO_CONTENT = {
  eyebrow: "The corporate meal standard",
  titleStart: "Good food",
  titleHighlight: "fuels great work.",
  description:
    "Caterexa connects your business to the best local restaurants, cloud kitchens, catering services, gourmet specialty brands and many more options, available in one dashboard. No more endless group chats. Just better meals with great service, sorted.",
  primaryAction: {
    label: "Start your plan",
    href: "/contact",
  },
  secondaryAction: {
    label: "See how it works",
    href: "#meal-solutions",
  },
  mainImage: "/corporate-meal-hero.jpg",
  floatingImage: "/corporate-meal-card.jpg",
  floatingLabel: "Starting from ₹99 / meal",
};

export default function CorporateMealHero() {
  const {
    eyebrow,
    titleStart,
    titleHighlight,
    description,
    primaryAction,
    secondaryAction,
    mainImage,
    floatingImage,
    floatingLabel,
  } = HERO_CONTENT;

  return (
    <section className="corporate-meal-hero" aria-labelledby="corporate-hero-title">
      <div className="corporate-meal-hero__container">
        {/* Left text content */}
        <div className="corporate-meal-hero__content">
          <p className="corporate-meal-hero__eyebrow">
            <span aria-hidden="true" />
            {eyebrow}
          </p>

          <h1
            id="corporate-hero-title"
            className="corporate-meal-hero__title"
          >
            {titleStart}
            <br />
            <span>{titleHighlight}</span>
          </h1>

          <p className="corporate-meal-hero__description">
            {description}
          </p>

          <div className="corporate-meal-hero__actions">
            <a
              className="corporate-meal-hero__button corporate-meal-hero__button--primary"
              href={primaryAction.href}
            >
              {primaryAction.label}
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>

            <a
              className="corporate-meal-hero__button corporate-meal-hero__button--secondary"
              href={secondaryAction.href}
            >
              {secondaryAction.label}
            </a>
          </div>
        </div>

        {/* Right image composition */}
        <div className="corporate-meal-hero__visual">
          <img
            className="corporate-meal-hero__main-image"
            src={mainImage}
            alt="Professional enjoying a Caterexa meal while working"
          />

          <article className="corporate-meal-hero__floating-card">
            <img
              src={floatingImage}
              alt="Fresh Caterexa meal"
              loading="lazy"
            />

            <p>{floatingLabel}</p>
          </article>

          <p className="corporate-meal-hero__caption">
            Built for everyday office meals, board meetings and team events.
          </p>
        </div>
      </div>
    </section>
  );
}
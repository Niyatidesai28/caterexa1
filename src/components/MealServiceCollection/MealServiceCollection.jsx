import PropTypes from "prop-types";
import { ChefHat, ArrowRight } from "lucide-react";
import "./MealServiceCollection.css";

/**
 * Service data is kept separate from the JSX.
 * To add another service, add one object to this array.
 */
const DEFAULT_SERVICES = [
  {
    id: "buffet-catering",
    title: "Buffet Catering",
    description:
      "A complete buffet experience with thoughtfully prepared dishes for every occasion.",
    image: "/buffet-catering.png",
    href: "/meal-solutions/buffet-catering",
  },
  {
    id: "live-counters",
    title: "Live Counters",
    description:
      "Interactive food stations serving fresh chaats, pasta, dosas, desserts and more.",
    image: "/live-counter.png",
    href: "/meal-solutions/live-counters",
  },
  {
    id: "party-catering",
    title: "Party Catering",
    description:
      "Flexible catering packages designed for celebrations, gatherings and private events.",
    image: "/party-catering.png",
    href: "/meal-solutions/party-catering",
  },
  {
    id: "bulk-food-delivery",
    title: "Bulk Food Delivery",
    description:
      "Freshly prepared meals delivered in bulk for offices, institutions and large groups.",
    image: "/bulk-food-delivery.png",
    href: "/meal-solutions/bulk-food-delivery",
  },
];

/**
 * Reusable card component.
 * Receives one service object and renders its image and content.
 */
function ServiceCard({ service }) {
  const { title, description, image, href } = service;

  return (
    <article className="meal-service-card">
      <a
        className="meal-service-card__image-link"
        href={href}
        aria-label={`Explore ${title}`}
      >
        <img
          className="meal-service-card__image"
          src={image}
          alt={title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = "/image-placeholder.png";
          }}
        />
      </a>

      <div className="meal-service-card__content">
        <span className="meal-service-card__icon" aria-hidden="true">
          <ChefHat size={23} strokeWidth={1.8} />
        </span>

        <h3 className="meal-service-card__title">{title}</h3>

        <p className="meal-service-card__description">{description}</p>

        <a className="meal-service-card__link" href={href}>
          See details
          <ArrowRight size={14} strokeWidth={1.8} />
        </a>
      </div>
    </article>
  );
}

const serviceShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

ServiceCard.propTypes = {
  service: serviceShape.isRequired,
};

/**
 * Main section component.
 * A custom services array can be passed later from an API or CMS.
 */
export default function MealServiceCollection({
  services = DEFAULT_SERVICES,
}) {
  return (
    <section
      className="meal-service-collection"
      aria-labelledby="meal-service-heading"
    >
      <div className="meal-service-collection__container">
        <header className="meal-service-collection__header">
          <p className="meal-service-collection__eyebrow">
            More ways to eat well
          </p>

          <h2
            id="meal-service-heading"
            className="meal-service-collection__heading"
          >
            Catering for <span>every occasion</span>
          </h2>

          <p className="meal-service-collection__intro">
            From grand celebrations to large-scale delivery, Caterexa brings
            the right menu and experience to every table.
          </p>
        </header>

        <div className="meal-service-collection__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

MealServiceCollection.propTypes = {
  services: PropTypes.arrayOf(serviceShape),
};
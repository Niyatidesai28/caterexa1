import { CalendarDays, Users, Package } from "lucide-react";
import "./MealSolutions.css";

const cards = [
  {
    image: "/meal-daily.jpg",
    icon: CalendarDays,
    title: "Daily Office Meals",
    description:
      "Recurring lunch plans on autopilot. Custom schedules, headcount tracking, and rotating menus for every workday.",
  },
  {
    image: "/meal-events.jpg",
    icon: Users,
    title: "Events & All-Hands",
    description:
      "Board meetings, product launches, offsites, and team gatherings with curated menus and reliable delivery.",
  },
  {
    image: "/meal-box.jpg",
    icon: Package,
    title: "Individual Box Lunches",
    description:
      "Send one link. Everyone picks their own meal. Dietary preferences and restrictions are handled automatically.",
  },
];

export default function MealSolutions() {
  return (
    <section className="meal-section">
      <div className="meal-inner">
        <div className="meal-heading">
          <h2>
            Not just a <span>catering solution.</span>
          </h2>

          <p className="meal-subtitle">A tailored meal program.</p>

          <p className="meal-description">
            whether you're feeding 10 or 10,000, daily office lunches, all-hands
            events, or client dinners, Caterexa has a plan perfectly curated for
            you.
          </p>
        </div>

        <div className="meal-cards">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="meal-card" key={card.title}>
                <div className="meal-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="meal-card-body">
                  <div className="meal-card-title">
                    <Icon className="meal-card-icon" strokeWidth={2.2} />
                    <h3>{card.title}</h3>
                  </div>

                  <p>{card.description}</p>

                  <a href="#">See details →</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
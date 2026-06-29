import "./ProcessSection.css";

const steps = [
  {
    image: "/process-setup.png",
    title: "Tell us your setup",
    description:
      "Team size, office locations, schedules, dietary preferences, and meal budgets we tailor the program around your workflow.",
    button: "View support system",
  },
  {
    image: "/process-curate.png",
    title: "We curate the right options",
    description:
      "Top restaurants, cloud kitchens, and catering partners are shortlisted based on your team’s tastes, budget, and operational needs.",
    button: "View support system",
  },
  {
    image: "/process-handle.png",
    title: "We handle everything else",
    description:
      "From delivery coordination and real-time support to tracking and consolidated invoicing — Caterexa manages the entire experience.",
    button: "View support system",
  },
  {
    image: "/process-orders.png",
    title: "Your team orders effortlessly",
    description:
      "Share one ordering link and let everyone choose their own meals while preferences and restrictions are handled automatically.",
    button: "View support system",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-inner">
        <div className="process-heading">
          <h2>
            The <span>process</span>
          </h2>
          <p>
            From planning to delivery, every meal program stays simple,
            seamless, and fully managed.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <div className="process-illustration">
                <img src={step.image} alt={step.title} />
              </div>

              <div className="process-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>

                <button type="button">
                  {step.button}
                  <span>→</span>
                </button>
              </div>

              {index === 0 && <span className="process-arrow arrow-right">→</span>}
              {index === 1 && <span className="process-arrow arrow-down">↓</span>}
              {index === 2 && <span className="process-arrow arrow-left">←</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
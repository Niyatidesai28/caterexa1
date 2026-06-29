import "./TestimonialsSection.css";

const testimonials = [
  {
    quote:
      "Caterexa turned our lunch chaos into something people actually look forward to. The individual ordering feature alone saved our office manager 6 hours a week.",
    name: "Sarah Chen",
  },
  {
    quote:
      "Managing ₹80L in monthly catering spend was a nightmare. Caterexa's centralized billing and multi-city dashboard changed everything. Finance stopped asking questions",
    name: "Hetan Patel",
  },
  {
    quote:
      "We have a team with every dietary restriction imaginable. For the first time, nobody had to eat the sad salad. Every order is exactly what each person wanted.",
    name: "Neha Sharma",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <h2>Don't take our word for it.</h2>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <span className="quote quote-start">“</span>

              <p className="testimonial-text">{item.quote}</p>

              <span className="quote quote-end">”</span>

              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
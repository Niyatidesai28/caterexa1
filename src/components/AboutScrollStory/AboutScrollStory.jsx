import { useEffect, useRef, useState } from "react";
import "./AboutScrollStory.css";

const storySteps = [
  {
    image: "/story-algorithms.jpg",
    title: "We live in a world run by algorithms.",
    body: [
      "Your cab is booked before you leave the building. Your next binge-watch is queued before the credits roll. Your flights, your groceries, your taxes, all automated.",
      "And yet, every day at 12:30 PM, someone in your office is still typing “guys what should we order?” into a group chat.",
    ],
  },
  {
    image: "/story-problem.jpg",
    title: "We noticed that.",
    body: [
      "For all the productivity tools, the smart calendars and the AI assistants, corporate lunch remained stubbornly, almost comically, manual.",
      "One person calling three restaurants. Someone’s dietary restriction forgotten. An invoice that took six emails to sort. A decision that ate more time than the meal itself.",
    ],
    italic:
      "Food, something so fundamental to how teams feel and function, was the one thing nobody had properly fixed.",
  },
  {
    image: "/story-built.jpg",
    title: "So we built Caterexa.",
    body: [
      "Not just another ordering platform. A meal infrastructure for modern companies, one that connects you to the best local restaurants, cloud kitchens and tiffin services.",
      "Your team picks their own meals. Your finance team gets one clean invoice. Your office manager gets their afternoons back. The gap was obvious. We just decided to close it.",
    ],
  },
  {
    image: "/story-automated.jpg",
    title: "One platform. Every meal. Every city. Finally automated.",
    body: [
      "Caterexa brings daily meals, event catering, team lunches and recurring office food programs into one simple system.",
    ],
  },
];

export default function AboutScrollStory() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const scrollableHeight = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableHeight);
      const progress = scrollableHeight > 0 ? scrolled / scrollableHeight : 0;

      const nextIndex = Math.min(
        storySteps.length - 1,
        Math.floor(progress * storySteps.length)
      );

      setActiveIndex(nextIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeStep = storySteps[activeIndex];

  return (
    <section className="about-scroll-story" ref={sectionRef}>
      <div className="about-scroll-sticky">
        <div className="about-scroll-inner">
          <div className="about-scroll-left">
            <div className="about-story-image-card">
              <img src={activeStep.image} alt={activeStep.title} />

              <div className="about-story-badge">
                <span>“</span>
              </div>

              <p>OUR VISION</p>
            </div>

            <div className="about-story-dots">
              {storySteps.map((_, index) => (
                <span
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                />
              ))}
            </div>
          </div>

          <div className="about-scroll-right">
            <div className="about-timeline-line" />

            <span
              className="about-timeline-active-dot"
              style={{ top: `${activeIndex * 28}%` }}
            />

            <article className="about-story-step active" key={activeStep.title}>
              <h2>{activeStep.title}</h2>

              {activeStep.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {activeStep.italic && <em>{activeStep.italic}</em>}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
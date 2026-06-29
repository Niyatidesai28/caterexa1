import { Utensils, Clock3, Building2, ShieldCheck } from "lucide-react";
import "./StatsStrip.css";

const stats = [
  {
    icon: Utensils,
    value: "2,400+",
    label: "food partners",
  },
  {
    icon: Clock3,
    value: "98%",
    label: "on-time delivery",
  },
  {
    icon: Building2,
    value: "5 Cities",
    label: "nationwide coverage",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "dedicated support",
  },
];

export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="stats-inner">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={item.label}>
              <Icon className="stat-icon" strokeWidth={2.8} />
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
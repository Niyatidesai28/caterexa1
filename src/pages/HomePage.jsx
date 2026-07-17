import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import StatsStrip from "../components/StatsStrip/StatsStrip";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import TrustedBySection from "../components/TrustedBySection/TrustedBySection";
import PartnerSection from "../components/PartnerSection/PartnerSection";
import Footer from "../components/Footer/Footer";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="homepage">
      <Navbar />

      {/* Home nav target */}
      <div id="home" data-nav-section>
        <HeroSection />
      </div>

      <StatsStrip />

      {/* Removed MealSolutions and CravingsSection from Home */}
      <ProcessSection />
      <TestimonialsSection />
      <TrustedBySection />

      {/* Caterers nav target */}
      <div id="partner" data-nav-section>
        <PartnerSection />
      </div>

      {/* Contact nav target until Contact page is built */}
      <div id="contact" data-nav-section>
        <Footer />
      </div>
    </main>
  );
}
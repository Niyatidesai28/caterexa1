import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import StatsStrip from "../components/StatsStrip/StatsStrip";
import MealSolutions from "../components/MealSolutions/MealSolutions";
import CravingsSection from "../components/CravingsSection/CravingsSection";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import TrustedBySection from "../components/TrustedBySection/TrustedBySection";
import PartnerSection from "../components/PartnerSection/PartnerSection";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <main className="homepage">
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <MealSolutions />
      <CravingsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TrustedBySection />
      <PartnerSection />
      <Footer />
    </main>
  );
}
import Navbar from "../components/Navbar/Navbar";
import CorporateMealHero from "../components/CorporateMealHero/CorporateMealHero";
import MealSolutions from "../components/MealSolutions/MealSolutions";
import MealServiceCollection from "../components/MealServiceCollection/MealServiceCollection";
import CravingsSection from "../components/CravingsSection/CravingsSection";
import Footer from "../components/Footer/Footer";
import "./MealSolutionsPage.css";

export default function MealSolutionsPage() {
  return (
    <main className="meal-solutions-page">
      <Navbar />

      {/* First section: corporate meal hero */}
      <CorporateMealHero />

      {/* Existing meal solution cards */}
      <section id="meal-solutions" data-nav-section>
        <MealSolutions />
      </section>

      {/* Catering service collection */}
      <section id="service-collection" data-nav-section>
        <MealServiceCollection />
      </section>

      {/* Cuisine / craving cards */}
      <section id="cravings" data-nav-section>
        <CravingsSection />
      </section>

      <footer id="contact" data-nav-section>
        <Footer />
      </footer>
    </main>
  );
}
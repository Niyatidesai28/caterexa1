import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MealSolutionsPage from "./pages/MealSolutionsPage";

function App() {
  const path = window.location.pathname;

  if (path === "/about") return <AboutPage />;
  if (path === "/meal-solutions") return <MealSolutionsPage />;

  // Until ContactPage is built, show HomePage for everything else
  return <HomePage />;
}

export default App;
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  const path = window.location.pathname;

  if (path === "/about") {
    return <AboutPage />;
  }

  return <HomePage />;
}

export default App;
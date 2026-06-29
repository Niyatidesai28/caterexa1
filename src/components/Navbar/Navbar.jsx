import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="top-navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span>Caterexa</span>
        </div>

        <nav className="navbar-menu">
          <a href="#" className="nav-link active">
            Business Meal Solutions
          </a>

          <a href="#" className="nav-link">
            For Food Provider
          </a>

          <a href="#" className="nav-link">
            About
          </a>
        </nav>

        <div className="navbar-actions">
          <button className="signin-btn">Sign In</button>
          <button className="start-btn">Start Ordering</button>
        </div>
      </div>
    </header>
  );
}
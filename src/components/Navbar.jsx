import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          🛍 &nbsp; <h1>James' Online Store</h1>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
          </ul>
          <div className="cart-icon">
            <Link to="/cart" className="cart-link">
              <span className="cart-symbol">🛒</span>
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

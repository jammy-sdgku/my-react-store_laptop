import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="welcome-message">
          <h2>Incredible products at unbeatable prices!</h2>
        </div>
      </div>
    </header>
  );
}
export default Header;

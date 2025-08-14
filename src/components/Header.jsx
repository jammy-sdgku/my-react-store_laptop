import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="welcome-message">
          <h2>Welcome to Our Amazing Store!</h2>
          <p>Discover incredible products at unbeatable prices</p>
        </div>
        <div className="header-actions">
          {/*<div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>
          */}
          <br></br>
        </div>
      </div>
    </header>
  );
}
export default Header;

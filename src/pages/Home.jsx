import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="hero-section">
      <h1>Welcome to James' Online Store</h1>
      <p className="hero-subtitle">
        Discover amazing products at incredible prices. Your satisfaction is our
        top priority!
      </p>
      <div className="hero-actions">
        {/* <button className="btn btn-primary" Link to="./catalog">
          Shop Now
        </button> */}

        <Link className="btn btn-primary" to="/catalog">
          Shop Now
        </Link>

        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
}

export default Home;

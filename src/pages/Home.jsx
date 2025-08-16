import "./Home.css";

function Home() {
  return (
    <div className="hero-section">
      <h1>Welcome to James' Online Store</h1>
      <p className="hero-subtitle">
        Discover amazing products at incredible prices. Your satisfaction is our
        top priority!
      </p>
      <div className="hero-actions">
        <button className="btn btn-primary">Shop Now</button>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
}

export default Home;

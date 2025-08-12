import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import QuantityPicker from './components/QuantityPicker';
import Catalog from "./pages/Catalog";
import Home from "./components/Home";
import About from "./components/About";
//import DataServiceTest from './components/DataServiceTest';
//import DataService from './services/DataService';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <br></br>
      <Home />
      {/*<QuantityPicker></QuantityPicker>*/}

      <main className="main-content">
        {/*<Catalog loaded here>*/}
        <Catalog />

        <div className="hero-section">
          <h1>Welcome to James' Online Store</h1>
          <p className="hero-subtitle">
            Discover amazing products at incredible prices. Your satisfaction is
            our top priority!
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe with us</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy, no questions asked</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>Carefully curated selection of premium items</p>
            </div>
          </div>
        </div>
      </main>
      <About />
      <Footer />
    </div>
  );
}

export default App;

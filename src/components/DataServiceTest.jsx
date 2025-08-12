import { useState, useEffect } from "react";
import DataService from "../services/DataService";
import QuantityPicker from "./QuantityPicker";

function DataServiceTest() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Test multiple DataService methods
        const [productsData, categoriesData] = await Promise.all([
          DataService.getProducts(),
          Promise.resolve(DataService.getCategories()),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
        setStats(DataService.getProductStats());
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  if (loading) {
    return <div>Loading data service test...</div>;
  }
  return (
    <div style={{ padding: "2rem", background: "#f5f5f5", margin: "1rem" }}>
      <h2>DataService Test Results</h2>
      <div style={{ marginBottom: "2rem" }}>
        <h3>Statistics</h3>
        <p>Total Products: {stats?.totalProducts}</p>
        <p>In Stock: {stats?.inStockProducts}</p>
        <p>Average Price: ${stats?.averagePrice?.toFixed(2)}</p>
        <p>Average Rating: {stats?.averageRating?.toFixed(1)} ⭐</p>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <h3>Categories ({categories.length})</h3>
        {categories.map((category) => (
          <span
            key={category.name}
            style={{
              margin: "0.5rem",
              padding: "0.5rem",
              background: "white",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            {category.icon} {category.name} ({category.count})
          </span>
        ))}
      </div>
      <div>
        <h3>Products ({products.length})</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <p>productId={product.id}</p>
              {<QuantityPicker></QuantityPicker>}
              <p>
                ⭐ {product.rating} ({product.reviews} reviews)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DataServiceTest;

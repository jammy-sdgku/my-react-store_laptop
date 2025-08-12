import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import DataService from "../services/DataService";
import "./Catalog.css";
function Catalog() {
  // State for products and loading
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // State for filtering and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  // State for categories
  const [categories, setCategories] = useState([]);

  // Load initial data when component mounts
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [productsData, categoriesData] = await Promise.all([
          DataService.getProducts(),
          Promise.resolve(DataService.getCategories()),
        ]);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to load products. Please try again.");
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  // Filter and sort products when criteria change
  useEffect(() => {
    let filtered = [...products];
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    // Apply stock filter
    if (showOnlyInStock) {
      filtered = filtered.filter((product) => product.inStock);
    }
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy, showOnlyInStock]);

  // Handle view details (demo function)
  const handleViewDetails = (product) => {
    console.log("View details for:", product);
    alert(`Viewing details for: ${product.title}`);
  };
  return (
    <div className="catalog">
      <div className="catalog__container">
        {/* Header Section */}
        <div className="catalog__header">
          <h1>Product Catalog</h1>
          <p>
            Discover our amazing collection of {filteredProducts.length}{" "}
            products.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="catalog__filters">
          <div className="filter-row">
            {/* Search */}
            <div className="filter-group">
              <label htmlFor="search">Search Products:</label>
              <input
                id="search"
                type="text"
                placeholder="Search by name, description, or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="filter-input"
              />
            </div>
            {/* Category Filter */}
            <div className="filter-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.icon} {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
            {/* Sort Options */}
            <div className="filter-group">
              <label htmlFor="sort">Sort By:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
              </select>
            </div>
            {/* Stock Filter */}
            <div className="filter-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={showOnlyInStock}
                  onChange={(e) => setShowOnlyInStock(e.target.checked)}
                />
                Show only in stock
              </label>
            </div>
          </div>
        </div>
        {/* Results Summary */}
        <div className="catalog__results-summary">
          <p>
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
        {/* Product List */}
        <ProductList
          products={filteredProducts}
          loading={loading}
          error={error}
          showDescription={true}
          showFeatures={true}
          /*onAddToCart=*/
          onViewDetails={handleViewDetails}
        />
      </div>
    </div>
  );
}
export default Catalog;

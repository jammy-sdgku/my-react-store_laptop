import Product from "./Product";
function ProductList({
  products = [],
  loading = false,
  error = null,
  showDescription = true,
  showFeatures = false,
  onAddToCart,
  onViewDetails,
}) {
  // Handle loading state
  if (loading) {
    return (
      <div className="product-list product-list--loading">
        <div className="loading-message">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }
  // Handle error state
  if (error) {
    return (
      <div className="product-list product-list--error">
        <div className="error-message">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  // Handle empty state
  if (!products || products.length === 0) {
    return (
      <div className="product-list product-list--empty">
        <div className="empty-message">
          <h3>No products found</h3>
          <p>Try adjusting your search or browse our categories.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            showDescription={showDescription}
            showFeatures={showFeatures}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductList;

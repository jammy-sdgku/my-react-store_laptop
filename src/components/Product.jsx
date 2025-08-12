import { useState } from "react";
import QuantityPicker from "../components/QuantityPicker";
import "./Product.css";

function Product({
  product,
  showDescription = true,
  showFeatures = false,
  compact = false,
  onAddToCart,
  onViewDetails,
}) {
  // Local state for component interactions
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // Destructure product data for easier access
  const {
    id,
    title,
    price,
    originalPrice,
    image,
    description,
    category,
    inStock,
    rating,
    reviews,
    features,
    brand,
  } = product;
  // Calculate discount percentage
  const discountPercentage =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;
  // Handle image loading states
  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);
  // Handle add to cart action

  const handleAddToCart = (product) => {
    if (onAddToCart && inStock) {
      onAddToCart(product);
    }
    console.log(`Added to cart: ${title} (Quantity:
  ${quantity})`);
    alert(`Added ${quantity} x ${title} to cart!`);
  };

  // Handle view details action
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product);
    }
  };
  return (
    <div
      className={`product ${compact ? "product--compact" : ""} ${
        !inStock ? "product--out-of-stock" : ""
      }`}
    >
      {/* Product Image Section */}
      <div className="product__image-container">
        {!imageLoaded && !imageError && (
          <div className="product__image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        {imageError ? (
          <div className="product__image-error">
            <span>📷</span>
            <p>Image not available</p>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="product__image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="product__discount-badge">-{discountPercentage}%</div>
        )}
        {/* Stock Status Badge */}
        {!inStock && <div className="product__stock-badge">Out of Stock</div>}
        {/* Category Badge */}
        <div className="product__category-badge">{category}</div>
      </div>
      {/* Product Information Section */}
      <div className="product__info">
        {/* Brand */}
        <div className="product__brand">{brand}</div>
        {/* Title */}
        <h3 className="product__title" title={title}>
          {title}
        </h3>
        {/* Description */}
        {showDescription && !compact && (
          <p className="product__description">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
        )}
        {/* Features */}
        {showFeatures && features && features.length > 0 && (
          <div className="product__features">
            {features.slice(0, 3).map((feature, index) => (
              <span key={index} className="product__feature-tag">
                {feature}
              </span>
            ))}
          </div>
        )}
        {/* Rating */}
        <div className="product__rating">
          <div className="product__stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${
                  index < Math.floor(rating) ? "star--filled" : ""
                }`}
              >
                ⭐
              </span>
            ))}
          </div>
          <span className="product__rating-text">
            {rating} ({reviews} reviews)
          </span>
        </div>
        {/* Price Section */}
        <div className="product__price-section">
          {originalPrice && originalPrice > price && (
            <span className="product__original-price">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="product__current-price">${price.toFixed(2)}</span>
        </div>
        <QuantityPicker
          initialQuantity={1}
          minQuantity={1}
          maxQuantity={10}
          onChange={setQuantity}
        />
        {/* Action Buttons */}
        <div className="product__actions">
          <button
            className={`btn btn-primary product__add-to-cart ${
              !inStock ? "btn--disabled" : ""
            }`}
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            {inStock ? "Add to Cart" : "Out of Stock"}
          </button>
          {onViewDetails && (
            <button
              className="btn btn-secondary product__view-details"
              onClick={handleViewDetails}
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Product;

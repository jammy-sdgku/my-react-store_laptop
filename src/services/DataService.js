import { PRODUCTS_DATA } from "../data/products.js";
import { CATEGORIES, CATEGORY_ICONS } from "../constants/categories.js";
class DataService {
  constructor() {
    this.products = PRODUCTS_DATA;
    this.categories = this.extractCategories();
  }
  // Simulate async data fetching (like a real API)
  async getProducts(delay = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.products]);
      }, delay);
    });
  }
  // Get products by category
  async getProductsByCategory(category, delay = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category === CATEGORIES.ALL) {
          resolve([...this.products]);
        } else {
          const filtered = this.products.filter(
            (product) => product.category === category
          );
          resolve(filtered);
        }
      }, delay);
    });
  }
  // Get single product by ID
  async getProductById(id, delay = 300) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = this.products.find((p) => p.id === parseInt(id));
        if (product) {
          resolve({ ...product });
        } else {
          reject(new Error(`Product with ID ${id} not found`));
        }
      }, delay);
    });
  }
  // Search products by title or description
  async searchProducts(query, delay = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const searchTerm = query.toLowerCase();
        const results = this.products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
        resolve(results);
      }, delay);
    });
  }
  // Get products with sorting
  async getSortedProducts(sortBy = "name-asc", delay = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sorted = [...this.products].sort((a, b) => {
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
        resolve(sorted);
      }, delay);
    });
  }
  // Extract unique categories from products
  extractCategories() {
    const uniqueCategories = [
      ...new Set(this.products.map((product) => product.category)),
    ];
    return [CATEGORIES.ALL, ...uniqueCategories].map((category) => ({
      name: category,
      icon: CATEGORY_ICONS[category] || "📦",
      count:
        category === CATEGORIES.ALL
          ? this.products.length
          : this.products.filter((p) => p.category === category).length,
    }));
  }
  // Get all categories
  getCategories() {
    return [...this.categories];
  }
  // Get featured products (highest rated)
  async getFeaturedProducts(limit = 4, delay = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const featured = [...this.products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, limit);
        resolve(featured);
      }, delay);
    });
  }
  // Get products on sale
  async getSaleProducts(delay = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const onSale = this.products.filter(
          (product) =>
            product.originalPrice && product.originalPrice > product.price
        );
        resolve(onSale);
      }, delay);
    });
  }
  // Check product availability
  isProductInStock(productId) {
    const product = this.products.find((p) => p.id === productId);
    return product ? product.inStock : false;
  }
  // Get product statistics
  getProductStats() {
    return {
      totalProducts: this.products.length,
      inStockProducts: this.products.filter((p) => p.inStock).length,
      outOfStockProducts: this.products.filter((p) => !p.inStock).length,
      averagePrice:
        this.products.reduce((sum, p) => sum + p.price, 0) /
        this.products.length,
      averageRating:
        this.products.reduce((sum, p) => sum + p.rating, 0) /
        this.products.length,
      categoryCounts: this.categories.reduce((acc, cat) => {
        acc[cat.name] = cat.count;
        return acc;
      }, {}),
    };
  }
}
// Export a singleton instance
export default new DataService();

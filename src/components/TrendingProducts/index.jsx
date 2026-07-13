import "./style.css";
import ProductCard from "./ProductCard";
import products from "./products";
const categories = [
  "All",
  "Fashion",
  "Electronics",
  "Beauty",
  "Furniture",
  "Grocery",
];

const TrendingProducts = () => {
  return (
    <section className="trendingProducts py-10">
      <div className="container">
        {/* Heading */}
        <div className="sectionHeader">
          <div>
            <h2>Trending Products</h2>
            <p>Discover our most popular products this week.</p>
          </div>
          <button className="viewAllBtn">
            View All
          </button>
        </div>

        {/* Categories */}
        <div className="categoryTabs">
          {categories.map((item, index) => (
            <button
              key={index}
              className={index === 0 ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="productsGrid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
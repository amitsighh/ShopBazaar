import "./style.css";
import featuredProducts from "./products";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const FeaturedProducts = () => {
  const featuredPick = featuredProducts[0];
  const products = featuredProducts.slice(1, 5);

  return (
    <section className="featuredProductsSection">
      <div className="container">

        <div className="featuredHeader">
          <div>
            <h2>Featured Products</h2>
            <p>Handpicked favorites you'll love.</p>
          </div>

          <button className="featuredViewAll">
            View All Products →
          </button>
        </div>

        <div className="featuredLayout">

          <div className="featuredMainCard">
            <span className="featuredBadge">
              Featured Pick
            </span>

            <div className="featuredMainImage">
              <img
                src={featuredPick.image}
                alt={featuredPick.name}
              />
            </div>

            <div className="featuredMainContent">
              <span className="featuredCategory">
                {featuredPick.category}
              </span>

              <h3>{featuredPick.name}</h3>

              <div className="featuredRating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span>
                  {featuredPick.rating} ({featuredPick.review} Reviews)
                </span>
              </div>

              <div className="featuredPrice">
                <span className="featuredNewPrice">
                  ₹{featuredPick.price}
                </span>

                <span className="featuredOldPrice">
                  ₹{featuredPick.oldPrice}
                </span>
              </div>

              <button className="featuredShopBtn">
                <FiShoppingCart />
                Shop Now
              </button>
            </div>
          </div>

          <div className="featuredProductsGrid">

            {products.map((product) => (
              <div
                className="featuredSmallCard"
                key={product.id}
              >
                <span className="featuredDiscount">
                  -{product.discount}%
                </span>

                <div className="featuredSmallImage">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="featuredSmallContent">
                  <span className="featuredCategory">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="featuredRating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <span>
                      ({product.review})
                    </span>
                  </div>

                  <div className="featuredPrice">
                    <span className="featuredNewPrice">
                      ₹{product.price}
                    </span>

                    <span className="featuredOldPrice">
                      ₹{product.oldPrice}
                    </span>
                  </div>

                  <button className="featuredCartBtn">
                    <FiShoppingCart />
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
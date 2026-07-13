import "./ProductCard.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegHeart,
} from "react-icons/fa";

import { IoEyeOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPatchCheckFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <span className="discountBadge">
        -{product.discount}%
      </span>

      {product.bestSeller && (
        <span className="bestSeller">
          Best Seller
        </span>
      )}

      {/* Action Buttons */}

      <button className="wishlistBtn">
        <FaRegHeart />
      </button>

      <button className="quickViewBtn">
        <IoEyeOutline />
      </button>

      <button className="compareBtn">
        <MdCompareArrows />
      </button>

      {/* Product Image */}

      <div className="productImage">

        <img
          src={product.image}
          alt={product.name}
          className="mainImage"
        />

        <img
          src={product.hoverImage}
          alt={product.name}
          className="hoverImage"
        />

      </div>

      {/* Product Info */}
      <div className="productInfo">
        <span className="category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />

          <span>
            ({product.review})
          </span>
        </div>

        {/* Stock */}
        <div className="stockStatus">
          <span className="stockText">
            <BsFillPatchCheckFill className="stockIcon"/>
            <span>In Stock</span>
          </span>
        </div>

        {/* Price */}
        <div className="price">
          <span className="newPrice">
            ₹{product.price}
          </span>
          <span className="oldPrice">
            ₹{product.oldPrice}
          </span>
        </div>

        <span className="savePrice">
          Save ₹{product.oldPrice - product.price}
        </span>

        {/* Add To Cart */}
        <button className="cartBtn">
          <FiShoppingCart />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
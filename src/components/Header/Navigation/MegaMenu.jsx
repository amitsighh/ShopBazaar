import React from "react";
import { Link } from "react-router-dom";
import categories from "./categories";

const menuImages = {
  Fashion: "/images/fashion-banner.jpeg",
  Electronics: "/images/electronics-banner.jpg",
  Bags: "/images/bags-banner.jpg",
  Footwear: "/images/footwear-banner.jpg",
  Groceries: "/images/grocery-banner.jpg",
  Beauty: "/images/beauty-banner.jpg",
  Wellness: "/images/wellness-banner.jpg",
  Jewellery: "/images/jewellery-banner.jpg",
};

const MegaMenu = ({ category }) => {
  const currentCategory = categories.find(
    (cat) => cat.name === category
  );

  if (!currentCategory) return null;

  return (
    <div className="absolute left-0 top-full mt-2 w-[850px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
      <div className="grid grid-cols-[1fr_1fr_1fr_320px] gap-8 p-6">

        {currentCategory.subcategories.map((sub) => (
          <div key={sub.id}>
            <h3 className="font-semibold text-[16px] mb-4">
              {sub.name}
            </h3>

            <ul className="space-y-2">
              {sub.items.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-red-500 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-[260px] flex-shrink-0">
          <img
            src={menuImages[category]}
            alt={category}
            className="h-[260px] w-[320px] object-cover shadow-lg rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
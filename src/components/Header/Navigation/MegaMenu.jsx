import React from "react";
import { Link } from "react-router-dom";
import categories from "./categories";

const MegaMenu = ({ category }) => {
  const currentCategory = categories.find(
    (cat) => cat.name === category
  );

  if (!currentCategory) return null;

  return (
    <div className="absolute left-0 top-full mt-2 w-[850px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
      <div className="grid grid-cols-4 gap-8 p-6">
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

        <div>
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
            alt="Promo"
            className="rounded-lg h-[220px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
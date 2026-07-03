import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { FaChevronRight, FaChevronDown, FaCar, FaRegClock } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLaptopMac, MdOutlineLocalGroceryStore } from "react-icons/md";
import { PiHandbag, PiDog } from "react-icons/pi";
import {
  GiLargeDress,
  GiRunningShoe,
  GiLipstick,
  GiBearHead,
  GiWeightLiftingUp,
  GiDiamondRing,
} from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { IoBookOutline, IoGameControllerOutline } from "react-icons/io5";

const iconMap = {
  GiLargeDress,
  MdLaptopMac,
  PiHandbag,
  GiRunningShoe,
  GiLipstick,
  HiHome,
  MdOutlineLocalGroceryStore,
  FaRegClock,
  GiBearHead,
  GiWeightLiftingUp,
  IoBookOutline,
  PiDog,
  IoGameControllerOutline,
  GiDiamondRing,
  FaCar,
};

const CategoryItem = ({ category }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openInnerMenu, setOpenInnerMenu] = useState(null);

  const Icon = iconMap[category.icon] || MdKeyboardArrowRight; // Default icon if not found

  return (
    <li className="list-none">
      {/* Main Category */}
      <div className="relative flex items-center cursor-pointer"
        onClick={() => setOpenSubmenu(!openSubmenu)}>
        <Link to="/" className="w-full">
          <Button className="w-full !justify-start !text-left !px-3 !py-3 !text-[15px] !font-[500] !text-gray-800">
            <Icon className="mr-3 text-[20px] text-gray-600" />
            {category.name}
          </Button>
        </Link>

        {category.subcategories.length > 0 &&
          (openSubmenu ? (
            <FaChevronDown
              className="absolute right-4 text-[12px] cursor-pointer text-gray-500"
              onClick={() => setOpenSubmenu(false)}
            />
          ) : (
            <FaChevronRight
              className="absolute right-4 text-[12px] cursor-pointer text-gray-500"
              onClick={() => setOpenSubmenu(true)}
            />
          ))}

      </div>

      {/* Sub Categories */}
      {openSubmenu && (
        <ul className="submenu">
            {category.subcategories.map((sub, index) => (
            <li key={sub.id} className="list-none">

              {/* Sub Category */}
              <div className="relative flex items-center cursor-pointer"
              onClick={() => setOpenInnerMenu(openInnerMenu === index ? null : index)}>

                <Link to="/" className="w-full">
                  <Button className="w-full !justify-start !text-left !px-6 !py-2 !text-[14px] !font-[500] !text-gray-700">
                    {sub.name}
                  </Button>
                </Link>

                {openInnerMenu === index ? (
                  <FaChevronDown
                    className="absolute right-4 text-[11px] cursor-pointer text-gray-500"
                    onClick={() => setOpenInnerMenu(null)}
                  />
                ) : (
                  <FaChevronRight
                    className="absolute right-4 text-[11px] cursor-pointer text-gray-500"
                    onClick={() => setOpenInnerMenu(index)}
                  />
                )}

              </div>

              {/* Inner Items */}
              {openInnerMenu === index && (
                <ul className="inner_submenu">

                  {sub.items.map((item, i) => (
                    <li key={i}>

                      <Link
                        to="/"
                        className="flex items-center gap-2 py-2 pl-8 text-[13px] font-medium text-gray-600 hover:text-red-500 transition-all duration-300"
                      >
                        <MdKeyboardArrowRight className="text-[16px]" />
                        <span>{item}</span>
                      </Link>

                    </li>
                  ))}

                </ul>
              )}

            </li>
          ))}

        </ul>
      )}

    </li>
  );
};

export default CategoryItem;
        
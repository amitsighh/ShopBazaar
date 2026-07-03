import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";

import CategoryItem from "./CategoryItem";
import categories from "./categories";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const toggleDrawer = (open) => () => {
    setIsOpenCatPanel(open);
  };

  return (
    <Drawer
      open={isOpenCatPanel}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 300 }}
        role="presentation"
        className="categoryPanel"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-[17px] font-semibold">
            Shop By Categories
          </h3>

          <IoMdClose
            className="text-[22px] cursor-pointer"
            onClick={toggleDrawer(false)}
          />
        </div>

        {/* Categories */}
        <div className="scroll">
          <ul className="w-full py-2">

            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
              />
            ))}

          </ul>
        </div>
      </Box>
    </Drawer>
  );
};

export default CategoryPanel;
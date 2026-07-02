import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";


const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
  };

const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">

      {/* Header */}
    <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">Shop By Categories <IoMdClose onClick={toggleDrawer(false)} className="cursor-pointer text-[20px]"/></h3>
    {/* Categories List */}
    <div className='scroll-m-50 overflow-y-auto h-[400px]'>
      <ul className="w-full">
        <li className="list-none flex items-center relative">
          <Link to="/">
          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fashion</Button>
          </Link>
          <FaRegSquarePlus className="absolute top-[10px] right-[15px]" />
        </li>
      </ul>
    </div>

  </Box>
  );


  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
};

export default CategoryPanel;

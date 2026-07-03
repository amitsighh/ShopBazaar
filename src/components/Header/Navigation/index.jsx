import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { RiMenuFold2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import MegaMenu from './MegaMenu';

import "../Navigation/style.css"

const navItems = [
  {
    name: "Home",
    megaMenu: false,
  },
  {
    name: "Fashion",
    megaMenu: true,
  },
  {
    name: "Electronics",
    megaMenu: true,
  },
  {
    name: "Bags",
    megaMenu: true,
  },
  {
    name: "Footwear",
    megaMenu: true,
  },
  {
    name: "Groceries",
    megaMenu: true,
  },
  {
    name: "Beauty",
    megaMenu: true,
  },
  {
    name: "Wellness",
    megaMenu: true,
  },
  {
    name: "Jewellery",
    megaMenu: true,
  },
];

const Navigation  = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const [activeMenu, setActiveMenu] = useState(null);

    const openCategoryPanel=()=>{
        setIsOpenCatPanel(true);

    }


  return (
    <>
    <nav className='py-2'>  
        <div className='container flex items-center justify-between'>
            <div className='col_1 w-[20%]'>
                <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><RiMenuFold2Line className="text-[18px]"/> Shop By Categories<FaAngleDown className="text-[14px] ml-auto font-bold "/> </Button>
            </div>
            <div className='col_2 w-[60%]'>
                <ul className="flex items-center gap-6">

  {navItems.map((item, index) => (

    <li
      key={index}
      className="list-none relative"
      onMouseEnter={() => setActiveMenu(item.name)}
      onMouseLeave={() => setActiveMenu(null)}
    >

      <Link to="/">
        <Button className="!text-[14px] !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">
          {item.name}
        </Button>
      </Link>

      {item.megaMenu && activeMenu === item.name && (
        <div className="megaMenu">
            <MegaMenu category={item.name} />
          {item.megaMenu && (
  <div className="absolute top-[100%] left-0 w-[700px] bg-white shadow-xl rounded-md p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

    <div className="grid grid-cols-3 gap-6">

      <div>
        <h4 className="font-semibold mb-3">Apparel</h4>
        <ul className="space-y-2 text-[14px] text-gray-600">
          <li><Link to="/">T-Shirts</Link></li>
          <li><Link to="/">Jeans</Link></li>
          <li><Link to="/">Shirts</Link></li>
          <li><Link to="/">Watches</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Footwear</h4>
        <ul className="space-y-2 text-[14px] text-gray-600">
          <li><Link to="/">Sneakers</Link></li>
          <li><Link to="/">Boots</Link></li>
          <li><Link to="/">Sandals</Link></li>
          <li><Link to="/">Sports Shoes</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Accessories</h4>
        <ul className="space-y-2 text-[14px] text-gray-600">
          <li><Link to="/">Bags</Link></li>
          <li><Link to="/">Belts</Link></li>
          <li><Link to="/">Wallets</Link></li>
          <li><Link to="/">Caps</Link></li>
        </ul>
      </div>

    </div>

  </div>
)}
        </div>
      )}

    </li>

  ))}
                    
                </ul>
            </div>  

        <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0"><GoRocket/>Free International Delivery</p>
        </div>
        </div>
    </nav>
    { /* Category Panel Component */}
    <CategoryPanel isOpenCatPanel={isOpenCatPanel}
    setIsOpenCatPanel={setIsOpenCatPanel}/>
 </>
);
};

export default Navigation;

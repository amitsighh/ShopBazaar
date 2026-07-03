import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { RiMenuFold2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';

import "../Navigation/style.css"

const Navigation  = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

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
                <ul className='flex items-center gap-6'>
                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Home</Button> 
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Fashion</Button> 
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Electronics</Button>
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Bags</Button>
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Footwear</Button>
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Groceries</Button>
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Beauty</Button>
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Wellness</Button>
                    </Link>
                    </li>

                    <li className='list-none'>
                    <Link to="/" className='link transition text-[14px] font-[500]'>
                    <Button className="link transition text-[14px] font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]">Jewellery</Button>
                    </Link>
                    </li>
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

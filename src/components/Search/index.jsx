import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className='searchBox relative w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px]'>
            <input type='text' placeholder='Search for products, brands and more' className='w-[100%] h-full bg-transparent px-4 text-gray-700 focus:outline-none'/>
          <Button className=" !absolute top-[8px] right-[5px] z-50 !w-[38px] !min-w-[38px] !h-[38px] !rounded-full">< FiSearch className="text-[#2a2a2a] text-[22px]" /></Button>
    </div>
  )
}

export default Search;

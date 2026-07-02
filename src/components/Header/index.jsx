import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className='w-full bg-white shadow-sm'>
        <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='col1 w-[50%]'>
                    <p className='text-[13px] font-[500]'>
                        Get up to 50% off new season styles, limited time offer
                    </p>
                </div>

                <div className='col2 flex items-center justify-end'>
                    <ul className='flex items-center gap-4'>
                        <li className='list-none'> </li>
                        <Link to='help-center' className='text-[13px] font-[600] text-black-500 hover:text-orange-600 transition-colors duration-300'>Help Center</Link>
                         <li className='list-none'> </li>
                        <Link to='order-tracking' className='text-[13px] font-[600] text-black-500 hover:text-orange-600 transition-colors duration-300'>Order Tracking</Link>
                    </ul>
                </div>

            </div>

        </div>
        </div>


<div className='header py-4 -mt-8 border-b-[1px] border-gray-250'>
    <div className='container flex items-center justify-between'>
        <div className='col1 w-[25%]'>
            <Link to={"/"}><img src="/logo-removebg-preview.png" className='-ml-20'/></Link>
        </div>

        <div className='col2 w-[50%]'>
            <Search/>
        </div>
         

        <div className='col3 w-[25%] flex items-center pl-8'>
            <ul className="flex items-center justify-end gap-3 w-full">
                <li className="list-none">
                    <Link to="/login" className="link transition font-[500]">LogIn</Link> | <Link to="/register" className="link transition font-[500]">Register</Link>
                </li>
                <li>
                    <Tooltip title="Compare" placement="top">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            < MdCompareArrows/>
                        </StyledBadge>
                    </IconButton>
                    </Tooltip>
                </li>

                <li>
                    <Tooltip title="Wishlist" placement="top">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            < GoHeart  />
                        </StyledBadge>
                    </IconButton>
                    </Tooltip>
                </li>

                
                <li>
                <Tooltip title="Cart" placement="top">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            < MdOutlineShoppingCart />
                        </StyledBadge>
                    </IconButton>
                    </Tooltip>
                </li>
            </ul>
        </div>
    </div>
</div>

 <Navigation/>
        
    </header>

  )
}


export default Header;
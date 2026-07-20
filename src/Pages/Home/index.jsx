import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import CategorySlider from '../../components/CategorySlider';
import OfferBanner from '../../components/OfferBanner';
import { FaShippingFast } from "react-icons/fa";
import TrendingProducts from '../../components/TrendingProducts';
import FlashSale from "../../components/FlashSale"
import FeaturedProducts from "../../components/FeaturedProducts"
import TechUpgradeBanner from "../../components/TechUpgradeBanner"

const Home = () => {
  return (
    <>
    <div className="bg-[#f8e8e8]">
    <HomeSlider />
    <CategorySlider />
    </div>
    

    <section className="py-6 bg-white">
      <div className="container">
        <div className="freeShipping w-full py-2 p-4 border-[#ff5252] flex items-center justify-between border-2 rounded-md">
          <div className="col1 flex items-center gap-4">
          <FaShippingFast className="text-[40px]" />
          <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
          </div>


          <div className="col2">
            <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over &#8377;1,000 </p>
          </div>

        <p className="mb-0 font-bold text-[20px] text-[#ff5252]">Shop Now</p>
        
        </div>
      </div>
    </section>

    <OfferBanner />
    <TrendingProducts />
    <FlashSale />
    <FeaturedProducts />
    <TechUpgradeBanner />
    </>
  )
}


export default Home;
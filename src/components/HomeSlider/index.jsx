import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const banners = [
  "/images/Fashion-Sale-Banner.jpeg",
  "/images/Electronic-Collection-Banner.jpeg",
  "/images/Bags-Collection-Banner.jpeg",
  "/images/Footwear-Collection-Banner.jpeg",
  "/images/Grocery-Banner.jpeg",
  "/images/Beauty-Collection-Banner.jpeg",
  "/images/Wellness-Banner.jpeg",
];

const HomeSlider = () => {
    return (
        <div className="homeslider py-4">
          <div className="w-full px-0">
          <Swiper
          slidesPerView={1.1}
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        observer={true}
        observeParents={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} 
            alt={`Banner ${index + 1}`}
            className="w-full h-[520px] object-fill rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
          </div>
        </div>

    );
}

export default HomeSlider;
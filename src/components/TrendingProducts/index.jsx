import "./style.css";
import ProductCard from "./ProductCard";
import products from "./products";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  "All",
  "Fashion",
  "Electronics",
  "Beauty",
  "Furniture",
  "Grocery",
];

const TrendingProducts = () => {
  return (
    <section className="trendingProducts">
      <div className="container">

        <div className="sectionHeader">
          <div>
            <h2>Trending Products</h2>
            <p>
              Discover our most popular products this week.
            </p>
          </div>

          <button className="viewAllBtn">
            View All
          </button>
        </div>

        <div className="categoryTabs">
          {categories.map((item, index) => (
            <button
              key={index}
              className={index === 0 ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="trendingSlider">
          <Swiper
            modules={[
              Navigation,
              Autoplay,
              Keyboard,
            ]}
            navigation
            loop
            keyboard
            speed={700}
            spaceBetween={25}
            slidesPerView={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },

              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
            className="trendingSwiper"
          >
            {products.slice(0, 10).map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;
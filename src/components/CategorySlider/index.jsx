import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay, Keyboard} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import categories from "./data";

const CategorySlider = () => {
return (

<div className="categorySection">

<Swiper 
modules={[Navigation,Autoplay,Keyboard]}
navigation
loop
keyboard
speed={700}
spaceBetween={20}
slidesPerView={6}
autoplay={{
delay:3000,
disableOnInteraction:false
}}
breakpoints={{
320:{slidesPerView:2},
576:{slidesPerView:3},
768:{slidesPerView:4},
1024:{slidesPerView:5},
1280:{slidesPerView:6}
}}
className="categorySwiper"
>

{
categories.map((item)=>(
<SwiperSlide key={item.id}>

<div className="categoryCard">
<div className="categoryImage">

<img
src={item.image}
alt={item.name}
loading="lazy"
/>

</div>
<h4>{item.name}</h4>
</div>

</SwiperSlide>
))
}

</Swiper>

</div>
)}

export default CategorySlider;
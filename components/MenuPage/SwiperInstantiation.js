import React from "react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperInstantiation = ({ array, setDishName }) => {
  SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
  return (
    <Swiper
      loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      freeMode={true}
      mousewheel={true}
      onSlideChange={(swiper) => setDishName(array[swiper.realIndex].name)}
      coverflowEffect={{
        rotate: 0,
        stretch: 200,
        depth: 500,
        modifier: 1,
        slideShadows: false,
      }}
      className=""
    >
      {/* using array */}
      {array.map((data, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              className="w-2/3 mx-auto lg:mx-0 lg:mt-0 lg:w-auto"
              src={data.img}
              alt={data.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperInstantiation;

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import SwiperHeroCourse from "./SwiperHeroCourse";

const SwiperHero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      pagination={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="myMainSwiper w-full h-full relative rounded-bl-[20vw]"
    >
      <SwiperSlide>
        <SwiperHeroCourse course="robotics" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperHeroCourse course="web" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperHeroCourse course="scratch" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperHeroCourse course="python" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHero;

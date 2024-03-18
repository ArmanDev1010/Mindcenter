import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import MediaLink from "./MediaLink";

const Media = (props) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={props.sidebar ? false : true}
      pagination={props.sidebar ? false : true}
      modules={props.sidebar ? [Autoplay] : [Autoplay, Navigation, Pagination]}
      className="myMainSwiperMedia max-w-full w-full h-full bg-white"
    >
      <SwiperSlide>
        <MediaLink yt="zRXS6YFHJtM" channel="logo" sidebar={props.sidebar} />
      </SwiperSlide>
      <SwiperSlide>
        <MediaLink yt="GqqLV2Nigtk" channel="21tv" sidebar={props.sidebar} />
      </SwiperSlide>
      <SwiperSlide>
        <MediaLink
          yt="YEL16kJrO9Y"
          ima="yt4"
          channel="logo"
          sidebar={props.sidebar}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MediaLink yt="tJaAHhPY0bo" channel="h1" sidebar={props.sidebar} />
      </SwiperSlide>
      <SwiperSlide>
        <MediaLink yt="FzFe_9BSZSg" channel="shogh" sidebar={props.sidebar} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Media;

import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Testimonial from "./Testimonial";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = (props) => {
  // animation
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      return;
    }
  }, [control, inView]);
  //

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ ease: "easeOut", opacity: { duration: 0.4 } }}
      className="mb-10"
      id="reviews"
    >
      <Swiper
        slidesPerView={2}
        spaceBetween={22}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="myMainSwiper w-full h-full px-1 py-1"
      >
        <SwiperSlide>
          <Testimonial num="1" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="3" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="2" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="6" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="4" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="5" />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Testimonials;

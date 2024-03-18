import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import CourseCard from "./CourseCard";

const CourseSection = (props) => {
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
      className="mb-20"
      id="reviews"
    >
      <h2 className="text-3xl font-medium text-[#222] mb-8 max-medium:text-4xl max-medium:mb-10 max-phone:text-center max-phone:text-3xl max-phone:mb-7 max-smal:text-2xl">
        Մեր Դասընթացները
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="myMainSwiperCourse w-full h-full px-1 py-1 roudned-xl"
      >
        {props.course == "robotics" ? null : (
          <SwiperSlide>
            <CourseCard course="robotics" />
          </SwiperSlide>
        )}
        {props.course == "web" ? null : (
          <SwiperSlide>
            <CourseCard course="web" />
          </SwiperSlide>
        )}
        {props.course == "python" ? null : (
          <SwiperSlide>
            <CourseCard course="python" />
          </SwiperSlide>
        )}
        {props.course == "scratch" ? null : (
          <SwiperSlide>
            <CourseCard course="scratch" />
          </SwiperSlide>
        )}
      </Swiper>
    </motion.div>
  );
};

export default CourseSection;

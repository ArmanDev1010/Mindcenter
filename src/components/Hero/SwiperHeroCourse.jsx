import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SwiperHeroCourse = (props) => {
  const { t } = useTranslation();

  // animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  //

  return (
    <div
      className="w-full !min-h-full bg-no-repeat bg-cover bg-center px-[5%] pt-[12vh]"
      style={{
        backgroundImage: `url(
            /src/assets/carousel/${props.course}.png
              )`,
      }}
    >
      <div className="relative z-[1]">
        <motion.h1
          ref={ref}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 80 },
          }}
          initial="hidden"
          animate={control}
          transition={{
            ease: "linear",
            y: { duration: 0.3, delay: 0.2 },
            opacity: { duration: 0.6, delay: 0.2 },
          }}
          className="text-6xl uppercase mb-6 font-medium"
        >
          {t(`hero.carousel.courses.${props.course}`)}
        </motion.h1>
        <h3 className="text-4xl text-[#FFC501] font-medium">
          {props.course == "robotics"
            ? t("hero.carousel.courses_")
            : t("hero.carousel.course")}
        </h3>
        <div className="mt-32 flex items-center justify-center gap-[1.5rem]">
          {["signup", "learn"].map((text, key) => (
            <Link
              key={key}
              to={
                text == "signup"
                  ? "https://docs.google.com/forms/d/1zBPMiI_ApDT23VMKgYJ7ookeCBkE6PrPgkv0jZ4J8wI/viewform?edit_requested=true"
                  : `courses/${props.course}`
              }
              target={text == "signup" ? "_blank" : ""}
            >
              <button
                className="capitalize py-[1rem] w-[200px] text-xl font-bold relative transition-all ease-in-out duration-200 hover:-translate-y-2"
                style={
                  text == "signup"
                    ? { background: "#FFFF19", color: "#222" }
                    : { background: "#FE0000", color: "#ffff" }
                }
              >
                {t(`hero.carousel.${text}`)}
                <div className="absolute -top-2 left-0 flex justify-between gap-[1rem] w-full px-[1rem]">
                  {["", "", "", ""].map((textt, key) => (
                    <div
                      key={key}
                      className="w-[25%] h-[15px]"
                      style={
                        text == "signup"
                          ? { background: "#FFFF19" }
                          : { background: "#FE0000" }
                      }
                    ></div>
                  ))}
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(12,98,148,0.73)]"></div>
    </div>
  );
};

export default SwiperHeroCourse;

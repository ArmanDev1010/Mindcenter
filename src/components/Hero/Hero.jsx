import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { logo } from "../../assets";
import { useTranslation } from "react-i18next";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import SwiperHero from "./SwiperHero";

const Hero = () => {
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
      className="bg-white text-[#222] font-medium h-screen !overflow-hidden relative"
      id="hero"
    >
      <div className="w-full h-full relative flex">
        <div className="relative w-[35%] py-14 !pb-[10vh] w-full h-full max-w-[1280px]">
          <div className="relative z-[1] w-full h-full flex flex-col justify-between">
            <div className="px-[8%]">
              <motion.img
                ref={ref}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
                initial="hidden"
                animate={control}
                transition={{
                  ease: "linear",
                  x: { duration: 0.4, delay: 0.6 },
                  opacity: { duration: 0.6, delay: 0.6 },
                }}
                src={logo}
                alt="logo"
                className="w-[300px]"
              />
              <motion.ul
                ref={ref}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
                initial="hidden"
                animate={control}
                transition={{
                  ease: "linear",
                  x: { duration: 0.4, delay: 1 },
                  opacity: { duration: 0.6, delay: 1 },
                }}
                className="flex flex-col gap-[2rem] mt-[12vh] w-fit max-big:gap-[1.5rem]"
              >
                {["about", "courses", "plans", "media", "team", "contact"].map(
                  (text, key) => (
                    <li
                      key={key}
                      className="text-[1.3rem] font-medium max-big:text-[1.1rem] transition-opacity ease-in-out duration-200 hover:opacity-75 !cursor-pointer"
                    >
                      {t(`navbar.links.${text}`)}
                    </li>
                  )
                )}
              </motion.ul>
            </div>
            <motion.ul
              ref={ref}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              initial="hidden"
              animate={control}
              transition={{
                ease: "linear",
                x: { duration: 0.4, delay: 1.4 },
                opacity: { duration: 0.6, delay: 1.4 },
              }}
              className="!pl-[8%] bg-[#F0F0F0] py-[1.2rem] px-[6rem] flex items-center gap-[34px] text-[28px] w-fit rounded-r-full max-big:text-[24px] max-big:py-[1.1rem] max-big:px-[5rem]"
            >
              {["facebook", "instagram", "youtube"].map((text, key) => (
                <li
                  key={key}
                  className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
                >
                  {text == "facebook" ? (
                    <FaFacebook />
                  ) : text == "instagram" ? (
                    <FaInstagram />
                  ) : (
                    <FaYoutube />
                  )}
                </li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            ref={ref}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
            initial="hidden"
            animate={control}
            transition={{
              ease: "linear",
              x: { duration: 0.4, delay: 1.8 },
              opacity: { duration: 0.6, delay: 1.8 },
            }}
            className="absolute top-0 right-0 h-full w-full "
          >
            <img
              src="/src/assets/lego/red.png"
              alt="lego"
              className="absolute top-12 right-4 w-[70px] rotate-[17deg]"
            />
            <img
              src="/src/assets/lego/yellow.png"
              alt="lego"
              className="absolute top-[20%] right-24 w-[70px] rotate-[11deg]"
            />
            <img
              src="/src/assets/lego/blue.png"
              alt="lego"
              className="absolute top-[50%] right-8 w-[70px] rotate-[90deg]"
            />
            <img
              src="/src/assets/lego/orange.png"
              alt="lego"
              className="absolute top-[80%] -right-8 w-[70px] rotate-[-25deg]"
            />
          </motion.div>
        </div>
        <div className="relative !w-[65%] bg-[#0C6294] w-full h-full text-center text-white rounded-bl-[20vw]">
          <SwiperHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;

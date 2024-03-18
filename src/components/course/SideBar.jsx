import React, { useEffect, useRef, useState } from "react";
import Media from "../medialibrary/Media";
import Icons from "./Icons";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SideBar = (props) => {
  const { t } = useTranslation();

  const parentWidth = useRef();

  const [w, setW] = useState(null);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 350);
    });
  });

  useEffect(() => {
    setW(parentWidth.current.clientWidth);
  });

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
      className="mt-14 mb-20 w-full mr-[3%] max-big:mr-[4%] overflow-hidden"
      ref={parentWidth}
    >
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
          x: { duration: 0.2, delay: 0.8 },
          opacity: { duration: 0.2, delay: 0.8 },
        }}
        className=""
      >
        <div
          className={`
        ${
          scroll && !props.scrollSidebar
            ? "neverbackdown"
            : scroll && props.scrollSidebar
            ? "backdown"
            : null
        } w-full bg-white mr-[5%] border`}
          style={{ maxWidth: `${w}px` }}
        >
          <div
            className={`w-full h-[400px] max-big:h-[350px] ${
              scroll ? "hidden" : null
            }`}
          >
            <Media sidebar={true} />
          </div>
          <div className={`p-6 ${scroll ? null : "hidden"}`}>
            <h3 className="text-[33px] font-[700] text-[#222]">25000դր</h3>
            <a
              href="https://docs.google.com/forms/d/1zBPMiI_ApDT23VMKgYJ7ookeCBkE6PrPgkv0jZ4J8wI/viewform?edit_requested=true"
              target="_blank"
              className="relative bg-primary text-white inline-flex items-center w-full mt-4
              justify-center px-10 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-md shadow-md 
              group ring-offset-2 ring-1 ring-secondary ring-offset-yellow-500 hover:ring-offset-secondary ease focus:outline-none"
            >
              <span
                className="absolute inset-0 flex items-center justify-center w-full h-full 
              text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span
                className="absolute text-xl flex items-center justify-center w-full h-full transition-all 
              duration-300 transform group-hover:translate-x-full ease"
              >
                Գրանցվել
              </span>
              <span className="relative invisible">Գրանցվել</span>
            </a>
            <div className="mt-6">
              <h2
                className="font-[700] relative mb-4 text-lg
            before:content-[''] before:absolute before:top-0 before:-left-6 before:w-[3px] before:h-full before:bg-black"
              >
                {t("course.includes")}
              </h2>
              <ul className="flex flex-col gap-2">
                {["time", "length", "age", "certificate"].map((text, key) => (
                  <li
                    key={key}
                    className="text-base py-2 text-[#2d2f31] flex gap-4 items-center"
                  >
                    <Icons text={text} />
                    <p>{t(`course.program.${text}`)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`p-6 ${scroll ? "hidden" : null}`}>
            <h2
              className="font-[700] relative mb-4 text-lg
            before:content-[''] before:absolute before:top-0 before:-left-6 before:w-[3px] before:h-full before:bg-black"
            >
              {t("course.includes")}
            </h2>
            <ul className="flex flex-col gap-2">
              {["time", "length", "age", "certificate"].map((text, key) => (
                <li
                  key={key}
                  className="text-base py-2 text-[#2d2f31] flex gap-4 items-center"
                >
                  <Icons text={text} />
                  <p>{t(`course.program.${text}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;

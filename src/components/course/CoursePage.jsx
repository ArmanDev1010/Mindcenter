import React, { useEffect, useState } from "react";
import { FaRegClock, FaMoneyBill } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoursePage = (props) => {
  const [isClick, setIsClick] = useState(false);

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
    <div className="pt-10 pl-[5%] max-big:pl-[7%]">
      <div className="!max-w-[1180px] max-big:!max-w-[980px]">
        <div className="">
          <motion.h1
            ref={ref}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            initial="hidden"
            animate={control}
            transition={{
              ease: "linear",
              x: { duration: 0.4, delay: 0.1 },
              opacity: { duration: 0.6, delay: 0.1 },
            }}
            className="max-w-[700px] mb-16 text-7xl tracking-[-0.2rem] font-[600] leading-[1.4]"
          >
            Վեբ Ծրագրավորում (HTML/CSS, JavaScript)
          </motion.h1>
          <motion.div
            ref={ref}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            initial="hidden"
            animate={control}
            transition={{
              ease: "linear",
              x: { duration: 0.4, delay: 0.4 },
              opacity: { duration: 0.6, delay: 0.4 },
            }}
            className="flex items-center gap-8 mb-10 max-big:gap-10"
          >
            <a
              href="https://docs.google.com/forms/d/1zBPMiI_ApDT23VMKgYJ7ookeCBkE6PrPgkv0jZ4J8wI/viewform?edit_requested=true"
              target="_blank"
              className="relative bg-primary text-white inline-flex items-center 
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
            <div className="w-[2px] h-6 bg-[#EBEBEB]"></div>
            <div className="flex items-center gap-4 text-lg">
              <FaMoneyBill className="text-[#ADADAD] w-7 h-7" />
              <p>Ամսավճարը՝ 25000դր</p>
            </div>
            <div className="w-[2px] h-6 bg-[#EBEBEB] max-big:hidden"></div>
            <div className="flex items-center gap-4 text-lg max-big:text-base max-big:hidden">
              <FaRegClock className="text-[#ADADAD] w-7 h-7" />
              <p>Տևողությունը՝ 6 ամիս</p>
            </div>
            <div className="w-[2px] h-6 bg-[#EBEBEB]"></div>
            <div className="flex items-center gap-4 text-lg">
              <IoPersonSharp className="text-[#ADADAD] w-7 h-7" />
              <p>10-14 տարեկանների համար</p>
            </div>
          </motion.div>
          <div className="border-t-[2px] border-t-[#F7F7F7] mb-10"></div>
          <div className="mb-10">
            <h3 className="text-2xl font-[600] mb-4">Դասընթացի մասին</h3>
            <p
              className={`${
                !isClick ? "elip" : null
              } text-[#5c5c5c] tracking-[-0.035rem] text-[1rem] leading-[2.2] max-small:text-[1.3rem]`}
            >
              HTML/CSS, JavaScript դասընթացի ընթացքում երեխաները փուլ առ փուլ
              կառուցում են իրենց կայքերը, զարգացնում են ալգորիթմական
              մտածողություն։ Սովորում են վերլուծել խնդիրները և այլընտրանքային
              լուծումներ փնտրել, սկսում են պլանավորել իրենց առաջադրանքները։
              Դասընթացի ընթացքում ուսումնասիրում ենք, թե ինչ հատվածներից են
              կազմված լինում կայքերը, դիտարկում ենք տարբեր տեսակի և կառուցվածքի
              կայքեր։ Ըստ նախասիրությունների երեխաները ազատորեն ընտրում են իրենց
              կայքերի թեմաները և HTML-ի միջոցով կառոցում են կայքերի հիմնական
              կառուցվածքը։ Այնուհետև CSS-ի միջոցով ստանում ենք կայքերի դիզայնը՝
              ձևավորելով HTML-ի տարրերը։ JavaScript-ի միջոցով ուսումնասիրում ենք
              ծրագրավորման հիմունքները։ Ուսումնասիրում ենք ցիկլերն ու
              ֆունկցիաները։Ամենակարևոր հասկացությունները ուսումանսիրելով՝
              ստանում ենք հաշվիչներ, որոնք կատարում են պարզ մաթեմատիկական
              գործողություններ։
            </p>
            <button
              className={`${
                isClick ? "hidden" : null
              } mt-5 text-lg text-[#2A80D5] font-[600]`}
              onClick={() => setIsClick(true)}
            >
              Իմանալ ավելին
            </button>
          </div>
          <div className="border-t-[2px] border-t-[#F7F7F7] mb-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

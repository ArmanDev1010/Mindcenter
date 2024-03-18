import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-between items-center overflow-hidden h-[320px] w-[90%] bg-white rounded-xl ring-offset-1 ring-1 ring-gray-200 ring-offset-gray-200">
      <div className="px-[5%] py-10 flex-[0.5]">
        <h1 className="text-4xl mb-6 font-medium">
          {t(`course.${props.course}.title`)}
        </h1>
        <p className="elip text-[#5c5c5c] max-w-[600px] tracking-[-0.035rem] text-[1.1rem] leading-[2.2] max-small:text-[1.3rem] mb-8">
          {t(`course.${props.course}.paragraph`)}
        </p>
        <div className="flex gap-[1rem]">
          {["signup", "learn"].map((text, key) => (
            <Link
              key={key}
              to={
                text == "signup"
                  ? "https://docs.google.com/forms/d/1zBPMiI_ApDT23VMKgYJ7ookeCBkE6PrPgkv0jZ4J8wI/viewform?edit_requested=true"
                  : `../../courses/${props.course}`
              }
              target={text == "signup" ? "_blank" : ""}
            >
              <button
                className="capitalize py-[1rem] w-[180px] text-base font-semibold relative transition-all ease-in-out duration-200 hover:-translate-y-2"
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
      <div
        className="relative h-full w-full bg-primary flex-[0.5] rounded-tl-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(
            /src/assets/carousel/${props.course}.png
              )`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(12,98,148,0.73)] rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default CourseCard;

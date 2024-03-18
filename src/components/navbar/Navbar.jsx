import React, { useContext } from "react";

import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { setIs_Click } = useContext(MyContext);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_Click(true);
  };

  return (
    <div className="py-8 px-[5%] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] max-big:px-[4%]">
      <div className="max-w-[1680px] w-full mx-auto my-0 flex items-center justify-between">
        <div className="flex gap-12 items-center max-medium:justify-between max-medium:flex-1">
          <div onClick={() => linkClick("hero")} className="cursor-pointer">
            <img src={logo} alt="Logo" className="w-[250px]" />
          </div>
          <ul className="flex gap-7 text-[16px] max-btablet:gap-8 max-btablet:text-base max-phone:hidden">
            {["about", "courses", "media", "plans", "contact"].map(
              (text, key) => (
                <li
                  key={key}
                  onClick={() => linkClick(text)}
                  className={`${text} transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold`}
                >
                  {t(`navbar.links.${text}`)}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-[1.5rem]">
          <a href="https://docs.google.com/forms/d/1zBPMiI_ApDT23VMKgYJ7ookeCBkE6PrPgkv0jZ4J8wI/viewform?edit_requested=true">
            <button
              className="capitalize py-[0.8rem] w-[180px] text-lg font-semibold relative transition-all ease-in-out duration-200 hover:-translate-y-2"
              style={{ background: "#FFFF19", color: "#222" }}
            >
              Գրանցվել
              <div className="absolute -top-2 left-0 flex justify-between gap-[1rem] w-full px-[1rem]">
                {["", "", "", ""].map((textt, key) => (
                  <div
                    key={key}
                    className="w-[25%] h-[15px]"
                    style={{ background: "#FFFF19" }}
                  ></div>
                ))}
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

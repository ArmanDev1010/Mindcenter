import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAM } from "./languages";

import { MyContext } from "./context/MyContext";

import { Route, Routes, useLocation } from "react-router-dom";

import Course from "./pages/Course";
import Home from "./pages/Home";

const resources = {
  am: {
    translation: translationAM,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "am",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [is_MenuActive, setIs_MenuActive] = useState(false);
  const [is_Click, setIs_Click] = useState(false);
  const { state } = useLocation();
  const { targetId } = state || {};

  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  useEffect(() => {
    if (isDesktop < 600) {
      null;
    } else {
      setIs_MenuActive(false);
    }
  }, [isDesktop]);

  return (
    <div className="font-montserrat">
      <MyContext.Provider
        value={{
          is_MenuActive,
          setIs_MenuActive,
          isDesktop,
          is_Click,
          setIs_Click,
          targetId,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses">
            <Route path="web" element={<Course course="web" />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default App;

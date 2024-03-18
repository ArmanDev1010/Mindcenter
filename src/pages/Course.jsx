import React, { useEffect, useRef, useState } from "react";
import CoursePage from "../components/course/CoursePage";
import Testimonials from "../components/testimonials/Testimonials";
import Navbar from "../components/navbar/Navbar";
import CourseSection from "../components/coursesection/CourseSection";
import SideBar from "../components/course/SideBar";

const Course = (props) => {
  const listInnerRef = useRef();

  const [scrollSidebar, setScrollSidebar] = useState(false);

  useEffect(() => {
    let clh = listInnerRef.current.clientHeight;
    window.addEventListener("scroll", () => {
      if (window.scrollY > clh - 500) {
        setScrollSidebar(true);
      } else {
        setScrollSidebar(false);
      }
    });
  });
  
  return (
    <div className="relative">
      <Navbar />
      <div
        className="relative flex gap-12 max-w-[1780px] my-0 mx-auto"
        ref={listInnerRef}
      >
        <div className="">
          <CoursePage course={props.course} />
          <div className="pl-[5%] max-big:pl-[7%]">
            <div className="!max-w-[1180px] max-big:!max-w-[980px]">
              <Testimonials />
              <div className="border-t-[2px] border-t-[#F7F7F7] mb-10"></div>
              <CourseSection course={props.course} />
            </div>
          </div>
        </div>
        <SideBar scrollSidebar={scrollSidebar} />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2217065329455!2d44.50652627639398!3d40.2041309685509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd83c5b9e1bd%3A0xb86d2e8bfd4254f5!2sMind%20Center%20LLC!5e0!3m2!1sen!2sam!4v1710281278049!5m2!1sen!2sam"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Course;

import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlTrophy } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const Icons = (props) => {
  return (
    <div>
      {props.text == "time" ? (
        <FaRegCalendarAlt className="!text-[26px]" />
      ) : props.text == "age" ? (
        <IoPersonSharp className="!text-[25px]" />
      ) : props.text == "length" ? (
        <IoMdTime className="!text-[26px]" />
      ) : props.text == "certificate" ? (
        <SlTrophy className="!text-[26px]" />
      ) : null}
    </div>
  );
};

export default Icons;

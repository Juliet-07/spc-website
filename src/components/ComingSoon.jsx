import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import Coming from "../assets/comingSoon.png";

const ComingSoon = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10">
      <p className="font-primarySemibold text-3xl md:text-5xl text-gray-800">
        This page is coming soon! 👍
      </p>
      <NavLink
        to="/"
        className="flex items-center justify-center w-[128px] h-[44px] rounded-lg bg-[#471A52] text-white font-primarySemibold my-4"
      >
        <span>
          <IoIosArrowRoundBack size={30} color="white" />
        </span>
        <span className="mx-2">Go Back</span>
      </NavLink>
      <div>
        <img src={Coming} />
      </div>
    </div>
  );
};

export default ComingSoon;

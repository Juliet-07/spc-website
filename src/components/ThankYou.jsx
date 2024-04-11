import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="h-[50vh] flex item-center justify-center">
      <div className=" flex flex-col items-center justify-center">
        <div className="w-20 md:w-[120px] h-20 md:h-[120px] border-4 rounded-full flex items-center justify-center border-[#00A91B]">
          <FaCheck size={50} color="#00A91B" />
        </div>
        <p className="font-primarySemibold text-gray-800 text-2xl md:text-4xl my-4">
          Registeration successful 🥳
        </p>
        <p className="font-primaryMedium text-center px-4 md:w-[607px] md:text-2xl text-gray-600">
          Thank you for your application submission. Our team will review it and
          respond within 3-5 business days
        </p>
        <Link
          to="/community"
          className="flex items-center justify-center w-[177px] h-[44px] bg-[#471A52] rounded-lg my-4 text-white font-primaryMedium"
        >
          Okay
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

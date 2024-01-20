import React from "react";
import { FaCheck } from "react-icons/fa6";

const PaymentSuccessful = () => {
  return (
    <div className="h-[60vh] flex item-center justify-center">
      <div className=" flex flex-col items-center justify-center">
        <div className="w-20 md:w-[120px] h-20 md:h-[120px] border-4 rounded-full flex items-center justify-center border-[#00A91B]">
          <FaCheck size={50} color="#00A91B" />
        </div>
        <p className="font-semibold text-gray-800 text-2xl md:text-4xl my-4">
          Ticket payment successful 🥳
        </p>
        <p className="text-center px-4 md:w-[607px] md:text-2xl text-gray-600">
          Your ticket payment is confirmed! An email with all details has been
          sent. Check your inbox, and we look forward to hosting you at{" "}
          <b className="text-black">Africa Digital Innovations Summit.</b>
        </p>
        <button className="w-[177px] h-[44px] bg-[#471A52] rounded-lg my-4 text-white">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;

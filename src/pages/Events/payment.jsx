import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import Flutterwave from "./flutterwave.png";
import CustomFlutterWaveButton from "../../components/Flutterwave";

const Payment = () => {
  const user = JSON.parse(localStorage.getItem("delegate-pass-details"));
  let amount = user.amount;
  let title = user.passType;
  let name = user.fullname;
  let email = user.email;
  let phone_number = user.phone_number;
  const location = useLocation();
  const passDetails = location.state && location.state.passDetails;

  if (!passDetails) {
    return <div>No pass details available</div>;
  }

  return (
    <div className="w-full flex flex-col p-4 2xl:px-20">
      <Link
        to="/events/details"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 my-6">
        <div className="md:w-[648px] h-[554px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Package Benefits
          </div>
          <div className="w-[254px] h-2 bg-[#471A52]"></div>
          <div className="flex-grow my-4">
            {passDetails.reasons.map((reason, index) => (
              <div key={index} className="flex items-center p-2">
                <span className="w-[24px] h-[24px] rounded-full bg-[#FBEDFF] mr-3 flex items-center justify-center">
                  <IoMdCheckmark size={20} color="#471A52" />
                </span>
                <p className="text-gray-500 font-normal text-base">{reason}</p>
              </div>
            ))}
          </div>
        </div>
        {/* form */}
        <div className="w-full md:w-[593px] h-[554px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="font-semibold text-4xl text-gray-900">${amount}</p>
              <p className="font-semibold text-gray-900 uppercase pt-3">
                {title}
              </p>
            </div>
            <div>
              <img src={Flutterwave} />
            </div>
          </div>

          <div>
            <div className="mt-4 flex items-center">
              <span className="block text-sm text-gray-700 font-medium ">
                Full name:
              </span>
              <p>{name}</p>
            </div>
            <div className="mt-6 flex items-center">
              <span className="block text-sm text-gray-700 font-medium ">
                Email address:
              </span>
              <p>{email}</p>
            </div>
            <div className="mt-20">
              <CustomFlutterWaveButton
                className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md hover:bg-[#471A52]/70 focus:outline-none"
                name={name}
                email={email}
                amount={amount}
                phone_number={phone_number}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

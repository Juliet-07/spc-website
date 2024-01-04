import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";

const PartnerPass = () => {
  const location = useLocation();
  const passDetails = location.state && location.state.pass;
  console.log("passDetails:", passDetails);

  if (!passDetails) {
    return <div>No details available</div>;
  }
  return (
    <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20">
      <Link
        to="/events"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 my-6">
        <div className="md:w-[648px] md:h-[800px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Package Benefits
          </div>
          <div className="w-[254px] h-2 bg-[#471A52]"></div>
          {/* <p>Price:{passDetails.price}</p> */}
          {/* <p>Title:{passDetails.title}</p> */}
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
        <div className="w-full md:w-[593px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
          <p className="font-semibold text-4xl text-gray-900">
            {passDetails.price}
          </p>
          <p className="font-semibold text-gray-900 uppercase pt-3">
            {passDetails.title}
          </p>
          <form>
            <div className="mt-4">
              <label
                htmlFor="full-name"
                className="block text-sm text-gray-700 font-medium "
              >
                Company name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter full name"
                // name="userName"
                // value={userName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 font-medium "
              >
                Company email address
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="@example.com"
                // name="userName"
                // value={userName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Contact
              </label>
              <input
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter phone number"
                // name="password"
                // value={password}
                // onChange={handleChange}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Location
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter company location"
                // name="password"
                // value={password}
                // onChange={handleChange}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Brief description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"

                // name="password"
                // value={password}
                // onChange={handleChange}
              ></textarea>
            </div>
            <div className="mt-20">
              <button
                type="submit"
                className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md hover:bg-[#471A52]/70 focus:outline-none"
                // onClick={() => setLoading(!loading)}
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerPass;

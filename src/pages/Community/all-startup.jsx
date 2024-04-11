import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { StartUpData } from "./data";

const AllStartUps = () => {
  return (
    <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20">
      <Link
        to="/community"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2 font-primaryRegular">Back</span>
      </Link>
      <div className="font-primarySemibold text-lg md:text-4xl text-gray-900 mt-3">
        Our Startup network
      </div>
      <div className="w-[174px] md:w-[334px] h-1 bg-[#471A52] mt-3"></div>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between pt-3 mb-4">
        <p className="text-base md:text-xl text-gray-500 font-primaryRegular">
          {/* List of companies with the highest possible momentum and return */}
        </p>
        <div className="mt-2 md:mt-0 relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <AiOutlineSearch className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {StartUpData.map((startup) => (
          <div
            key={startup.id}
            className="md:w-[400px] bg-white rounded-xl shadow-lg p-4"
          >
            <div>{startup.image}</div>
            <h2 className="text-xl font-primarySemibold text-gray-900 py-2">
              {startup.name}
            </h2>
            <p className="font-primaryRegular text-xs text-gray-500">
              {startup.description}
            </p>
            {/* <div className="w-full grid grid-cols-3 py-4">
              <p className="flex flex-col">
                <span>{startup.amountRaised}</span>
                <span className="font-primaryRegular text-xs text-gray-500">
                  Raised
                </span>
              </p>
              <p className="flex flex-col">
                <span>{startup.numOfInvestors}</span>
                <span className="font-primaryRegular text-xs text-gray-500">
                  Investors
                </span>
              </p>
              <p className="flex flex-col">
                <span>{startup.minInvestments}</span>
                <span className="font-primaryRegular text-xs text-gray-500">
                  Min. Investments
                </span>
              </p>
            </div> */}
            <Link
              to="/community/all-startups"
              className="w-full flex items-center justify-center font-primarySemibold text-[#471A52] my-2"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStartUps;

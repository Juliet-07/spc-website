import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { TalentData } from "./data";

const AllTalents = () => {
  return (
    <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20">
      <Link
        to="/community"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="font-semibold text-lg md:text-4xl text-gray-900 mt-3">
        Talent Ecosystem
      </div>
      <div className="w-[174px] md:w-[334px] h-1 bg-[#471A52] mt-3"></div>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between pt-3">
        <p className="text-base md:text-xl text-gray-500 font-normal">
          List of Talents we believe can provide great services to you
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
      <div className="grid md:grid-cols-4 gap-4">
        {TalentData.map((talent) => (
          <div
          key={talent.id}
          className="md:w-[302px] bg-white rounded-xl shadow-lg p-4"
        >
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/person.png" className="w-full" />
          <h2 className="text-xl font-semibold text-gray-900">{talent.name}</h2>
          <p className="font-semibold text-xs text-[#471A52]">
            {talent.jobDescription}
          </p>
          <div className="w-full flex items-center justify-between my-4">
            <p className="flex flex-col">
              <span className="font-normal text-gray-400 text-xs">Skills</span>
              <span className="font-medium text-xs text-gray-800">
                {talent.skills.join(", ")}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-normal text-gray-400 text-xs">
                Experience
              </span>
              <span className="font-medium text-xs text-gray-800">
                {talent.experience}
              </span>
            </p>
          </div>
          <Link
            to="/community/all-talents"
            className="w-full flex items-center justify-center font-semibold text-[#471A52]"
          >
            View profile
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AllTalents;

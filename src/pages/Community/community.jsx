import React from "react";
import Hero from "./community.png";

const Community = () => {
  return (
    <>
      <div
        className="w-full h-[514px] md:h-[671px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-[200px] md:mt-4">
          <p className="text-3xl md:text-6xl font-semibold text-gray-200 md:w-[625px] mb-2 text-center">
            Global Digital Innovation Commnuity
          </p>
          <p className="md:text-xl font-normal text-gray-100 text-center">
            Building the world's largest and most collaborative community for
            digital innovators
          </p>
          <button className="w-full md:w-[177px] h-[48px] text-white font-semibold md:font-medium bg-[#471A52] rounded-lg my-4">
            Become a member
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;

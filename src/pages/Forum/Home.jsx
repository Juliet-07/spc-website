import React from "react";
import { NavLink } from "react-router-dom";
import ADIS from "./adis-forum.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-red-500 rounded-lg">
        <div className="w-full h-[200px] bg-[#471A52] rounded-lg flex flex-col items-center justify-center">
          <p className="text-gray-300 text-sm font-semibold">
            Africa Digital Innovation Summit
          </p>
          <p className="text-gray-200 font-semibold text-2xl">
            Promoting Africa Free Trade Zone using Digital Transformation.
          </p>
          <NavLink
            to="/forum/network"
            className="w-[213px] h-[44px] rounded-lg bg-white text-[#471A52] flex items-center justify-center mt-6 font-semibold"
          >
            Register for Networking
          </NavLink>
        </div>
        <div className="h-[329px]">
          <img src={ADIS} alt="ADIS" className="w-full h-full" />
        </div>
      </div>
      <div>Speakers</div>
      <div>Sponsirs</div>
    </div>
  );
};

export default Home;

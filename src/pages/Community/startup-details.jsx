// StartupDetail.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { StartUpData } from "./data";
import Startup from "./startUp.png";
import ComingSoon from "../../components/ComingSoon";

const StartupDetail = () => {
  const { id } = useParams();
  const [startup, setStartup] = useState(null);

  useEffect(() => {
    // Fetch startup details based on the ID
    // You might want to fetch this data from an API or another data source
    // Update the `setStartup` state with the fetched data
    // For now, let's simulate a startup object
    const simulatedStartup = {
      id,
      name: "Example Startup",
      description: "This is an example startup.",
      // Add other properties as needed
    };

    setStartup(simulatedStartup);
  }, [id]);

  if (!startup) {
    return <div>Loading...</div>;
  }

  return (
    
    // <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20">
    //   <Link
    //     to="/community/all-startups"
    //     className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
    //   >
    //     <TbArrowBackUp color="#475467" />
    //     <span className="text-gray-600 mx-2">Back</span>
    //   </Link>
    //   <div className="bg-gradient-to-r from-[#FCF1FF] via-[#FDF6FF] to-[#F0B5FF] rounded-xl my-6 flex flex-col-reverse md:flex-row items-center justify-between px-6 py-4">
    //     <div className="flex flex-col my-4 md:my-0 md:w-[555px]">
    //       <p className="font-semibold text-sm md:text-2xl text-[#471A52]">
    //         Get a piece of Quantum Innovations
    //       </p>
    //       <p className="font-semibold text-xl md:text-4xl text-gray-900">
    //         Keeping You Ahead of the Storm
    //       </p>
    //       <p className="font-normal md:text-xl my-4 text-gray-700">
    //         {/* {startup.description} */}
    //         Quantum Innovations specializes in developing state-of-the-art
    //         quantum computing solutions, artificial intelligence applications,
    //         and advanced cybersecurity systems.
    //       </p>
    //       <div className="w-[118px] h-[44px] bg-[#471A52] rounded-lg flex items-center justify-center text-white font-semibold">
    //         Visit website
    //       </div>
    //     </div>
    //     <div className="h-[262.62px] md:h-[430px]">
    //       <img src={Startup} className="h-full" />
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div>card 1</div>
    //     <div>card 2</div>
    //   </div>
    // </div>
    <ComingSoon/>
  );
};

export default StartupDetail;

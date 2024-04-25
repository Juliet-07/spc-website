// TalentDetail.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";
import { StartUpData } from "./data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const TalentDetail = () => {
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
    // <div>
    //   <h1>{startup.name}</h1>
    //   <p>{startup.description}</p>
    //   {/* Display other details of the startup */}
    // </div>
    <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20">
      <Link
        to="/community/all-talents"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="bg-[#471A52] rounded-xl my-6 flex flex-col md:flex-row items-center justify-evenly px-6 py-4">
        <div className="w-[304px] h-[354px] bg-white border border-gray-200 shadow-md flex flex-col items-center justify-center p-4 rounded-xl">
          <div>
            <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/person.png" />
          </div>
          <p className="font-medium text-sm md:text-xl text-gray-900 mt-4">
            Janet Goodwill
          </p>
          <p className="font-medium md:text-sm text-[#471A52] my-3">
            Web developer
          </p>
          <div className="w-full h-[48px] bg-[#471A52] rounded-lg flex items-center justify-center text-white font-semibold">
            Hire talent
          </div>
        </div>
        <div className="md:w-[758px] h-[494px] md:h-full bg-white rounded-xl flex flex-col p-4 mt-4 md:mt-0">
          <p className="font-semibold text-gray-800 text-lg mb-4">
            Personal Information
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-normal text-sm text-gray-500">Skills</p>
              <p className="font-medium text-base text-gray-900">
                Html, Java, Node
              </p>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-500">Experience</p>
              <p className="font-medium text-base text-gray-900">6 years</p>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-500">Past jobs</p>
              <p className="font-medium text-base text-gray-900">
                IOT, E-commerce, Blockchain
              </p>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-500">Email address</p>
              <p className="font-medium text-base text-gray-900">
                janet@outlook.com
              </p>
            </div>
            <div className="flex items-center">
              <p className="mr-2 font-semibold text-base text-[#471A52]">
                View portfolio
              </p>
              <IoIosArrowRoundForward size={20} color="#471A52" />
            </div>
            <div className="w-[100px] flex items-center justify-around">
              <FaTwitter size={20}  />
              <FaLinkedin size={20}  />
              <FaFacebook size={20}  />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>card 1</div>
        <div>card 2</div>
      </div>
    </div>
  );
};

export default TalentDetail;

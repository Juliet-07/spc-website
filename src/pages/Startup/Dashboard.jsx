import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Dashboard = () => {
  const talents = [
    {
      name: "King David",
      title: "Product Designer",
      skills: "Design, Prototyping",
      experince: "3 years",
    },
    {
      name: "King David",
      title: "Software Engineer",
      skills: "Javascript, React",
      experince: "4 years",
    },
    {
      name: "King David",
      title: "Blockchain Developer",
      skills: "Solidty, Python",
      experince: "5 years",
    },
  ];

  const mentors = [
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Nigeria",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Nigeria",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Nigeria",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
  ];
  return (
    <>
      <div className="w-full md:h-[505px] p-4 border border-gray-300 shadow-md rounded-lg my-4 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-gray-900 text-2xl font-primarySemibold">Talents</p>
          <NavLink
            to="/startup/talents"
            className="text-[#471A52] font-primarySemibold"
          >
            View all
          </NavLink>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {talents.map((talent) => (
            <div className="w-[330px] border border-gray-200 rounded-lg p-2 my-4 flex flex-col items-center">
              <div className="w-[302px] h-[192px] bg-[#D9D9D9] rounded-xl"></div>
              <div className="w-full my-2 px-3">
                <p className="text-gray-900 text-xl font-primarySemibold">
                  {talent.name}
                </p>
                <p className="text-gray-500 text-sm">{talent.title}</p>
                <div className="border border-dashed border-gray-200 mt-2"></div>
                <div className="w-full flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <p className="text-xs text-gray-400 font-primaryRegular">
                      Skills
                    </p>
                    <p className="text-sm text-gray-800 font-primaryRegular">
                      {talent.skills}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-gray-400 font-primaryRegular">
                      Experience
                    </p>
                    <p className="text-gray-800 font-primaryRegular text-sm">
                      {talent.experince}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-[#471A52] font-primarySemibold my-2">
                View Profile
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:h-[505px] p-4 border border-gray-300 shadow-md rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <p className="text-gray-900 text-2xl font-primarySemibold">
            Investors
          </p>
          <NavLink
            to="/startup/mentors"
            className="text-[#471A52] font-primarySemibold"
          >
            View all
          </NavLink>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <div className="w-[330px] border border-gray-200 rounded-lg p-2 my-4 flex flex-col items-center">
              <div className="w-[302px] h-[192px] bg-[#D9D9D9] rounded-xl"></div>
              <div className="w-full my-2 px-3">
                <p className="text-gray-900 text-xl font-primarySemibold">
                  {mentor.name}
                </p>
                <p className="text-gray-500 text-sm">{mentor.title}</p>
                <div className="border border-dashed border-gray-200 mt-2"></div>
                <div className="w-full flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <MdOutlineLocationOn
                      color="gray"
                      size={20}
                      className="mr-2"
                    />
                    <p className="text-sm text-gray-800 font-primaryRegular">
                      {mentor.country}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FiPhone color="gray" size={20} className="mr-2" />
                    <p className="text-gray-800 font-primaryRegular text-sm">
                      {mentor.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <MdOutlineMailOutline
                    color="gray"
                    size={20}
                    className="mr-2"
                  />
                  <p className="text-gray-800 font-primaryRegular text-sm">
                    {mentor.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

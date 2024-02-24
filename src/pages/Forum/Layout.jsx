// https://preline.co/docs/sidebar.html
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { TfiAgenda } from "react-icons/tfi";
import { MdDashboard, MdLiveTv } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { FaPeopleLine, FaWpexplorer } from "react-icons/fa6";
import Icon from "../../assets/spc-logo.png";
import Header from "./Header";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Home",
      icon: <SlHome />,
      path: "/forum/home",
    },
    {
      title: "Agenda",
      icon: <TfiAgenda />,
      path: "/forum/agenda",
    },
    {
      title: "Live now",
      icon: <MdLiveTv />,
      path: "/forum/live",
    },
    {
      title: "Networking",
      icon: <LuNetwork />,
      path: "/forum/network",
    },
    {
      title: "Speakers",
      icon: <IoIosPeople />,
      path: "/forum/speakers",
    },
    {
      title: "Announcements",
      path: "/forum/announcements",
      icon: <GrAnnounce />,
    },
    {
      title: "Partners",
      icon: <FaPeopleLine />,
      path: "/forum/partners",
    },
    {
      title: "Explore",
      icon: <FaWpexplorer />,
      path: "/forum/explore",
    },
  ];
  const activeLink =
    "mx-4 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-[#471A52] rounded-xl";
  const normalLink =
    "hover:bg-[#471A52]/50 mt-3 mx-4 flex justify-start items-center text-gray-600 text-base space-x-1 font-semibold";

  const SidebarLinks = ({ menu }) => {
    return (
      <NavLink
        to={menu.path}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <li
          className={` flex items-center gap-x-2 cursor-pointer p-2.5 hover:bg-[#471A52]/50 hover:text-white hover:font-semibold rounded-md mt-2`}
        >
          <span className="text-xl block float-left">
            {menu.icon ? menu.icon : <MdDashboard />}
          </span>
          <span
            className={`text-base font-medium duration-200 ${
              !open && "hidden"
            }`}
          >
            {menu.title}
          </span>
        </li>
      </NavLink>
    );
  };

  return (
    <div className="w-full h-full">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`h-screen pt-8 ${
            open ? "w-[272px]" : "w-[100px]"
          } duration-300 relative`}
        >
          {/* <BsArrowLeftShort
            className={`bg-red-600 text-white text-3xl rounded-full absolute -right-3 top-9 border border-red-600 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          /> */}
          <div className="inline-flex  mx-2">
            <img
              src={Icon}
              alt="PremiumIcon"
              className={`w-[192.95px] h-12 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </div>
          <ul className="my-4">
            {Menus.map((menu, index) => (
              <SidebarLinks key={index} menu={menu} />
            ))}
          </ul>
          {/* <Footer /> */}
        </div>
        {/* Content */}
        <div className="w-full">
          <Header />
          <main className="bg-gray-50 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

// https://preline.co/docs/sidebar.html
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import Icon from "../../assets/spc-logo.png";
import Header from "./Header";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard />,
      path: "/startup/dashboard",
    },
    {
      title: "Talents",
      icon: <IoIosPeople />,
      path: "/startup/talents",
    },
    {
      title: "Mentors",
      icon: <IoIosPeople />,
      path: "/startup/mentors",
    },
    {
      title: "Investors",
      icon: <FaMoneyBill1Wave />,
      path: "/startup/investors",
    },
    {
      title: "Global Expansion",
      icon: <LuNetwork />,
      path: "/startup/expansion",
    },
    // {
    //   title: "Profile",
    //   path: "/startup/profile",
    //   icon: <CgProfile />,
    // },
  ];
  const activeLink =
    "mx-4 flex justify-start items-center text-white text-2xl space-x-1 font-primaryBold bg-[#471A52] rounded-xl";
  const normalLink =
    "hover:bg-[#471A52]/50 mt-3 mx-4 flex justify-start items-center text-gray-600 text-base space-x-1 font-primarySemibold";

  const SidebarLinks = ({ menu }) => {
    return (
      <NavLink
        to={menu.path}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <li
          className={` flex items-center gap-x-2 cursor-pointer p-2.5 hover:bg-[#471A52]/50 hover:text-white hover:font-primarySemibold rounded-md mt-2`}
        >
          <span className="text-xl block float-left">
            {menu.icon ? menu.icon : <MdDashboard />}
          </span>
          <span
            className={`text-base font-primaryMedium duration-200 ${
              !open && "hidden"
            }`}
          >
            {menu.title}
          </span>
        </li>
      </NavLink>
    );
  };

  // Close the dashboard on mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          <main className="bg-gray-50 p-6 font-primaryRegular">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

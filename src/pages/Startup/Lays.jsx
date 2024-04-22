import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { LuNetwork } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Header from "./Header";
import Icon from "../../assets/spc-logo.png";
import { BsArrowLeftShort } from "react-icons/bs";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
    {
      title: "Profile",
      path: "/startup/profile",
      icon: <CgProfile />,
    },
  ];

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
          <BsArrowLeftShort
            className={`bg-red-600 text-white text-3xl rounded-full absolute -right-3 top-9 border border-red-600 cursor-pointer ${
              !open && "rotate-180"
            } ${isMobile ? "block" : "hidden"}`}
            onClick={toggleSidebar}
          />
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
              <NavLink
                key={index}
                to={menu.path}
                className="hover:bg-[#471A52]/50 hover:text-white hover:font-primarySemibold rounded-md mt-2"
              >
                <li className=" flex items-center gap-x-2 cursor-pointer p-2.5 hover:bg-[#471A52]/50 hover:text-white hover:font-primarySemibold rounded-md mt-2">
                  <span className="text-xl block float-left">
                    {menu.icon ? menu.icon : <MdSpaceDashboard />}
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
            ))}
          </ul>
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

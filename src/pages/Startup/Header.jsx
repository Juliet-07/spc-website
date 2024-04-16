import React from "react";
import { useLocation } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  const location = useLocation();

  // Extract the pathname from the location object
  const { pathname } = location;

  // Define a function to get the title based on the current pathname
  const getTitle = () => {
    switch (pathname) {
      case "/startup/dashboard":
        return "Dashboard";
      case "/startup/talents":
        return "Talents";
      case "/startup/mentors":
        return "Mentors / Investors";
      case "/startup/expansion":
        return "Global Expansion";
      case "/startup/profile":
        return "Profile";
      default:
        return "Unknown"; // Default title for unknown paths
    }
  };

  const title = getTitle();

  return (
    <>
      <div className="w-full h-20 border flex items-center justify-between px-6">
        <div className="font-primarySemibold text-black text-2xl">{title}</div>
        <div className="w-[200px] flex items-center justify-around">
          <div>
            <IoIosNotifications size={20} color="gray" />
          </div>
          <p className="font-primaryMedium">company name</p>
        </div>
      </div>
    </>
  );
};

export default Header;

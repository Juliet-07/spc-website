import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

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

  // Function to toggle the visibility of the dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="w-full h-20 border flex items-center justify-between px-6">
        <div className="font-primarySemibold text-black text-2xl">{title}</div>
        <div className="relative w-[200px] flex items-center justify-around">
          <div
            className="w-10 h-10 bg-[#FCFAFF] border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <IoIosNotifications size={20} color="gray" />
          </div>
          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 top-12 w-[396px] bg-white border rounded-xl shadow-xl p-4">
              <p className="font-primarySemibold text-gray-900 text-xl">
                Notifications
              </p>
              <div className="w-[348px] h-[120px] border border-gray-200 rounded-xl py-2">
                <p className="block p-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                  Event 1
                </p>
                <p className="block p-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                  Event 2
                </p>
                <p className="block p-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                  Event 3
                </p>
              </div>
            </div>
          )}
          <p className="font-primaryMedium">company name</p>
        </div>
      </div>
    </>
  );
};

export default Header;

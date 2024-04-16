import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Extract the pathname from the location object
  const { pathname } = location;

  // Define a function to get the title based on the current pathname
  const getTitle = () => {
    switch (pathname) {
      case "/startup/dashboard":
        return "Dashboard";
      case "/startup/agenda":
        return "Agenda";
      case "/startup/live":
        return "Live now";
      case "/startup/network":
        return "Networking";
      case "/startup/speakers":
        return "Speakers";
      case "/startup/announcements":
        return "Announcements";
      case "/startup/partners":
        return "Partners";
      case "/startup/explore":
        return "Explore";
      default:
        return "Unknown"; // Default title for unknown paths
    }
  };

  const title = getTitle();

  return (
    <>
      <div className="w-full h-20 bg-gray-500 border flex items-center justify-between px-6">
        <div className="font-semibold text-black text-3xl">{title}</div>
        <div>inputs and notification</div>
      </div>
    </>
  );
};

export default Header;

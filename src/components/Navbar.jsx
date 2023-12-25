import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/spc-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#471A52" : "#475467",
      borderBottom: isActive ? "2px solid #471A52" : "none",
    };
  };
  const activeStyleMobile = ({ isActive }) => {
    return {
      color: isActive ? "#057d99" : "black",
    };
  };
  return (
    <div className="w-full flex justify-between items-center h-20 mx-auto px-4 md:px-20 text-gray-600 fixed z-10 bg-white">
      <div className="w-[148px] h-[38px]">
        <img src={Logo} alt="SPC Logo" />
      </div>
      <nav className="text-gray-600 hidden md:flex">
        <NavLink to="/" style={activeStyle} className="p-2">
          Home
        </NavLink>
        <NavLink to="/about-spc" style={activeStyle} className="p-2">
          About us
        </NavLink>
        <NavLink to="/community" style={activeStyle} className="p-2">
          Community
        </NavLink>
        <NavLink to="/events" style={activeStyle} className="p-2">
          Events
        </NavLink>
        <NavLink to="/trainings" style={activeStyle} className="p-2">
          Trainings
        </NavLink>
        <NavLink to="/team" style={activeStyle} className="p-2">
          Team
        </NavLink>
        <NavLink to="/contact-spc" style={activeStyle} className="p-2">
          Contact us
        </NavLink>
        {/* <NavLink
          to="/signup"
          className="w-[129px] h-[50px] bg-[#057D99] text-white text-center p-3.5 ml-10 mr-4 border rounded-[5px]"
        >
          register
        </NavLink>
        <NavLink
          to="/signin"
          className="w-[129px] h-[50px] text-[#057D99] text-center p-3.5 border rounded-[5px] border-[#057D99]"
        >
          log in
        </NavLink> */}
      </nav>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-20 w-[414px] h-[621px] ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex flex-col p-4">
          <NavLink
            to="/"
            className="w-20 p-4 font-semibold"
            style={activeStyleMobile}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="w-26 p-4 font-semibold"
            style={activeStyleMobile}
          >
            About us
          </NavLink>
          <NavLink
            to="/investmentPlans"
            className="w-[141px] p-4 font-semibold"
            style={activeStyleMobile}
          >
            investments
          </NavLink>
          <NavLink
            to="/faq"
            className="w-[65px] p-4 font-semibold"
            style={activeStyleMobile}
          >
            faq
          </NavLink>
          <NavLink
            to="/courses"
            className="w-22 p-4 font-semibold"
            style={activeStyleMobile}
          >
            courses
          </NavLink>
          <NavLink
            to="/contact-us"
            className="w-20 p-4 font-semibold"
            style={activeStyleMobile}
          >
            contact
          </NavLink>
        </div>
        <div className="w-[352px] h-[60px] p-4 m-6 bg-[#057d99] text-center text-white font-bold text-sm rounded-md">
          {" "}
          <NavLink to="/signup">Register</NavLink>
        </div>
        <div className="w-[352px] h-[60px] p-4 m-6 border border-[#057d99] text-center text-[#057d99] font-bold text-sm">
          {" "}
          <NavLink to="/signin">Log in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../assets/spc-logo.png";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };
//   const activeStyle = ({ isActive }) => {
//     return {
//       fontWeight: isActive ? "bold" : "normal",
//       color: isActive ? "#471A52" : "#475467",
//       borderBottom: isActive ? "2px solid #471A52" : "none",
//     };
//   };
//   const activeStyleMobile = ({ isActive }) => {
//     return {
//       color: isActive ? "#471A52" : "#475467",
//       // borderBottom: isActive ? "2px solid #471A52" : "none",
//     };
//   };
//   return (
//     <div className="w-full flex justify-between items-center h-20 mx-auto px-4 md:px-10 2xl:px-20 text-gray-600 fixed z-10 bg-white">
//       <div className="w-[148px] h-[38px]">
//         <img src={Logo} alt="SPC Logo" />
//       </div>
//       <nav className="text-gray-600 font-primaryRegular hidden md:flex">
//         <NavLink to="/" style={activeStyle} className="p-2">
//           Home
//         </NavLink>
//         <NavLink to="/about-spc" style={activeStyle} className="p-2">
//           About us
//         </NavLink>
//         <NavLink to="/community" style={activeStyle} className="p-2">
//           Community
//         </NavLink>
//         <NavLink to="/events" style={activeStyle} className="p-2">
//           Events
//         </NavLink>
//         <NavLink to="/trainings" style={activeStyle} className="p-2">
//           Trainings
//         </NavLink>
//         {/* <NavLink to="/team" style={activeStyle} className="p-2">
//           Team
//         </NavLink> */}
//         <NavLink to="/contact-spc" style={activeStyle} className="p-2">
//           Contact us
//         </NavLink>
//       </nav>
//       {/* Mobile hamburger */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
//       </div>
//       {/* Mobile Menu */}
//       <div
//         className={
//           nav
//             ? "fixed left-0 top-20 w-[414px] h-[532px] ease-in-out duration-500 bg-white z-10"
//             : "fixed left-[-100%]"
//         }
//       >
//         <div className="grid grid-cols-1 gap-4 px-4 font-primarySemibold">
//           <NavLink
//             to="/"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about-spc"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             About us
//           </NavLink>
//           <NavLink
//             to="/community"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Community
//           </NavLink>
//           <NavLink
//             to="/events"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Events
//           </NavLink>
//           <NavLink
//             to="/trainings"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Trainings
//           </NavLink>
//           {/* <NavLink
//             to="/team"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Team
//           </NavLink> */}
//           <NavLink
//             to="/contact-spc"
//             style={activeStyleMobile}
//             className="p-2"
//             onClick={() => setNav(false)}
//           >
//             Contact us
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/spc-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

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
      color: isActive ? "#471A52" : "#475467",
      // borderBottom: isActive ? "2px solid #471A52" : "none",
    };
  };
  return (
    <div className="w-full flex justify-between items-center h-20 mx-auto px-4 md:px-10 2xl:px-20 text-gray-600 fixed z-10 bg-white">
      <div className="w-[148px] h-[38px]">
        <img src={Logo} alt="SPC Logo" />
      </div>
      <nav className="text-gray-600 font-primaryRegular hidden md:flex">
        <NavLink to="/" style={activeStyle} className="p-2">
          Home
        </NavLink>
        {/* <NavLink to="/about-spc" style={activeStyle} className="p-2">
          About us
        </NavLink> */}
        <NavLink to="/community" style={activeStyle} className="p-2">
          Community
        </NavLink>
        {/* <NavLink to="/events" style={activeStyle} className="p-2">
          Events
        </NavLink> */}
        <NavLink to="/spcAngels" style={activeStyle} className="p-2">
          Silverspoon Angels
        </NavLink>
        <Menu as="div" className="relative inline-block text-left p-2">
          <div>
            <Menu.Button className="inline-flex items-center justify-between">
              Company
              <BiChevronDown className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white grid gap-4 p-2 shadow-lg">
              <Menu.Item>
                <NavLink
                  to="/about-spc"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  to="/events"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Events
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  to="/trainings"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Trainings
                </NavLink>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* <NavLink to="/trainings" style={activeStyle} className="p-2">
          Trainings
        </NavLink> */}
        <NavLink to="/contact-spc" style={activeStyle} className="p-2">
          Contact us
        </NavLink>
      </nav>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-20 w-[414px] h-[532px] ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <div className="grid grid-cols-1 gap-4 px-4 font-primarySemibold">
          <NavLink
            to="/"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-spc"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="/community"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Community
          </NavLink>
          <NavLink
            to="/spcAngels"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Silverspoon Angels
          </NavLink>
          <Menu as="div" className="relative inline-block text-left p-2">
            <div>
              <Menu.Button className="inline-flex items-center justify-between">
                Company
                <BiChevronDown className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white grid gap-4 p-2 shadow-lg">
                <Menu.Item>
                  <NavLink
                    to="/about-spc"
                    style={activeStyleMobile}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Us
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/events"
                    style={activeStyleMobile}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Events
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/trainings"
                    style={activeStyleMobile}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Trainings
                  </NavLink>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* <NavLink
            to="/trainings"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Trainings
          </NavLink> */}
          <NavLink
            to="/contact-spc"
            style={activeStyleMobile}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

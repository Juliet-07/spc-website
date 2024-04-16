import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div>Signin</div>
      <NavLink
        to="/startup/dashboard"
        className="bg-green-600 p-4 rounded m-10"
      >
        Go to dashboard of startup network
      </NavLink>
    </>
  );
};

export default Signin;

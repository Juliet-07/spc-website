import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../../assets/spc-logo.png";
// import LoginImage from "../assets/home.png";
// import Logo from "../assets/logo(1).png";
// import CircleLoader from "react-spinners/CircleLoader";

const Signin = () => {
  // const apiURL = import.meta.env.VITE_REACT_APP_AD_BASEURL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const [loginDetails, setLoginDetails] = useState(initialValues);
  const { email, password, confirm_password } = loginDetails;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const [loading, setLoading] = useState(false);
  // function to validate user through ActiveDirectory
  const handleLoginValidation = () => {
    // try {
    //   fetch(`${apiURL}/AuthenticateUser`, {
    //     method: "POST",
    //     body: JSON.stringify(loginDetails),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((user) => {
    //       console.log(user, "confirm here");
    //       let userDetail = JSON.stringify(user.data);
    //       localStorage.setItem("userInfo", userDetail);
    //       if (user.message === "User Authenticated Successfully") {
    //         navigate("/applications");
    //       }
    //       if (user.status === "99") {
    //         alert(user.message);
    //         navigate("/");
    //       }
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
    navigate("/startup/dashboard");
  };
  return (
    <>
      <img
        // src={Logo}
        src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/community-hero.png"
        className="absolute inset-0 z-0 h-full w-full bg-contain object-cover"
        alt="SPC Universe"
      />
      <div className="absolute inset-0 z-[2] bg-[#1C1C1C]/25 w-full h-full" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
      <div className="hidden relative z-[3] md:flex flex-col items-center justify-center w-full h-full">
        <div className="w-[500px] h-[100px] flex items-center justify-center relative bottom-6">
          {/* <img src={Logo} alt="spc-logo" /> */}
        </div>
        <div>
          <div className="flex bg-gray-200 shadow-2xl rounded-2xl">
            <div className="relative">
              <img
                className="w-[600px] h-[600px] object-cover"
                // src={LoginImage}
                src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/community-hero.png"
                alt="PremiumImage"
              />
              <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
              <div className="absolute text-white font-bold text-center bottom-80 left-44 uppercase text-3xl">
                {/* premium <font color="text-red-600">connect</font> */}
              </div>
            </div>
            <div className="w-[600px] h-[600px] p-12">
              <div className="w-[485px] h-[492px] flex flex-col p-10">
                <div className="text-center font-primaryprimarySemibold text-3xl">
                  Login
                </div>
                <form onSubmit={handleSubmit(handleLoginValidation)}>
                  {/* <form> */}
                  <div className="mt-4">
                    <label
                      htmlFor="userName"
                      className="block text-lg text-gray-800 font-primaryMedium "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-10">
                    <label
                      htmlFor="password"
                      className="block text-lg text-gray-800 font-primaryMedium"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-10">
                    <label
                      htmlFor="password"
                      className="block text-lg text-gray-800 font-primaryMedium"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                      name="confirm_password"
                      value={confirm_password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-20">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-medium tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md"
                      // onClick={() => setLoading(!loading)}
                    >
                      Login
                    </button>
                    {/* <div className="flex items-center justify-center mt-2">
                      <CircleLoader loading={loading} color="red" />
                    </div> */}
                    {/* <Loader /> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}

      <div className="md:hidden relative z-[3] flex flex-col justify-center mx-4 min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-purple-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-primarySemibold text-center text-indigo-700 underline uppercase decoration-wavy">
            Login
          </h1>
          <form className="mt-4">
            <div className="mb-3">
              <label
                for="email"
                className="block text-sm font-primarySemibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-3">
              <label
                for="email"
                className="block text-sm font-primarySemibold text-gray-800"
              >
                Password
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-3">
              <label
                for="email"
                className="block text-sm font-primarySemibold text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white bg-[#471A52] rounded-md font-primaryMedium">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signin;

import React, { useState, useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
      onClick={handleClose}
    >
      <div className="mx-4 bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-end">
          <MdOutlineCancel
            size={30}
            color="black"
            className="cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const StartupNetwork = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const registerFormRef = useRef(null);
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);

  const initialValues = {
    company_name: "",
    company_email: "",
    company_size: "",
    location: "",
    country: "",
    website_url: "",
    linkedin_url: "",
    brief_description: "",
  };

  const [startupMembership, setStartupMembership] = useState(initialValues);

  const {
    company_name,
    company_email,
    company_size,
    location,
    country,
    website_url,
    linkedin_url,
    brief_description,
  } = startupMembership;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStartupMembership({ ...startupMembership, [name]: value });
  };

  const fileUploadHandler = (e) => {
    console.log(e.target.files);
    const docx = e.target.files[0];
    console.log(docx.name);
    setFile(docx);
  };

  const handleRegisterClick = () => {
    setModal(true);
  };

  const handleScrollToRegisterForm = () => {
    registerFormRef.current.scrollIntoView({ behavior: "smooth" }); // Step 4
  };

  const handleConfirmRegistration = () => {
    setLoading(true);
    const url = `${apiURL}/member-startup`;

    const formData = new FormData();

    formData.append("company_name", company_name);
    formData.append("company_email", company_email);
    formData.append("company_size", company_size);
    formData.append("location", location);
    formData.append("country", country);
    formData.append("likeden_url", linkedin_url);
    formData.append("website_url", website_url);
    formData.append("brief_description", brief_description);
    formData.append("company_image", file);
    formData.append("amount", 1000);

    axios
      .post(url, formData)
      .then((response) => {
        console.log(response.data, "response from startup reg.");
        navigate("/thankYou");
      })
      .catch((error) => {
        // Handle error responses here
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // Stop loading indicator after response
        setModal(false); // Close modal after response
      });
  };

  const benefits = [
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/talents.jpg"
          className="w-[319.95px] h-[193.16px] md:w-[376px] md:h-[227px] rounded-lg"
        />
      ),
      title: "Talents",
      message:
        "Access to a pool of qualified talents from across the African Continent.",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investors.jpg"
          className="w-[319.95px] h-[193.16px] md:w-[380px] md:h-[227px] rounded-lg"
        />
      ),
      title: "Mentors",
      message:
        "Access to a pool of well-known mentors who can guide you on different paths (Legal, sales & marketing, investment readiness, product, etc).",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/meet-up.jpg"
          className="w-[319.95px] h-[193.16px] md:w-[380px] md:h-[227px] rounded-lg"
        />
      ),
      title: "Meet-ups",
      message: "Access to our mentor roundtable meetings.",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investing.jpg"
          className="w-[319.95px] h-[193.16px] md:w-[380px] md:h-[227px] rounded-lg"
        />
      ),
      title: "Investors",
      message:
        "Access to Angel Investors, Venture Capital Fund Managers, and Limited Partners (i.e. High Networth Individuals, Institutional LPs & Family Offices).",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/expand.jpg"
          className="w-[319.95px] h-[193.16px] md:w-[380px] md:h-[227px] rounded-lg"
        />
      ),
      title: "Global Expansion",
      message:
        "Access to Global Expansion as a service without additional charges.",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/event.jpg"
          className="w-[319.95px] h-[193.16px] md:w-[380px] md:h-[227px] rounded-lg"
        />
      ),
      title: "Event Discount",
      message:
        "Fair discount prices to events hosted by us directly and indirectly.",
    },
  ];

  return (
    <>
      <div
        className="w-full h-[300px] md:h-[500px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${"https://spcimagestorage001.blob.core.windows.net/spc-community-images/community-hero.png"})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-[50px] md:pt-[100px] md:mt-4">
          <p className="text-3xl md:text-6xl font-primarySemibold text-[#FCFCFD] mb-2 text-center">
            Welcome to our Startup Network
          </p>
          <p className="md:w-[600px] text-white font-primaryRegular text-center md:text-xl">
            Access resources, expert guidance, and global opportunities.
            <br /> Elevate your startup game today!"
          </p>
          <button
            className="block md:hidden w-[196px] h-[48px] bg-[#471A52] font-primaryMedium text-white rounded-lg m-4"
            onClick={handleScrollToRegisterForm}
          >
            Register
          </button>
        </div>
      </div>
      {/* Benefits */}
      <div className="w-full flex flex-col items-center justify-center my-4">
        <div className="font-primarySemibold text-[#12141D] text-2xl md:text-5xl">
          Benefits for your Startup
        </div>
        <div className="w-[280px] md:w-[532px] h-1 bg-[#471A52]"></div>
        <div className="grid md:grid-cols-3 my-4 gap-4 md:gap-10 py-4 px-4 md:px-10">
          {benefits.map((benefit) => (
            <div className="w-[340.37px] h-[340px] md:w-[400px] md:h-[378px] border border-[#E9D7FE] rounded-xl p-4">
              <div>{benefit.icon}</div>
              <p className="font-primarySemibold">{benefit.title}</p>
              <p className="font-primaryRegular py-2 md:py-3">
                {benefit.message}
              </p>
            </div>
          ))}
        </div>
        {/* Register */}
        <div
          ref={registerFormRef}
          className="w-full bg-[#471A52] flex flex-col items-center justify-center p-4 md:p-6"
        >
          <div className="md:w-[664px] flex flex-col items-center justify-center border border-[#667085] rounded-lg p-2 md:p-4">
            <p className="text-2xl md:text-4xl font-primarySemibold text-[#FFFFFF]">
              Register as a Startup
            </p>
            <p className="text-sm md:text-xl font-primaryRegular text-[#EAECF0] p-2">
              Join our network and enjoy our numerous benefits
            </p>
            {/* <div className="w-[125px] md:h-10 border border-white rounded-lg text-center font-primarySemibold text-white text-lg md:text-2xl">
              $1,000
              <span className="text-[#D0D5DD] font-primaryRegular text-xs">
                /year
              </span>
            </div> */}
            <div className="md:w-[576px]">
              <form onSubmit={handleSubmit(handleRegisterClick)}>
                <div className="mt-4">
                  <label
                    htmlFor="full-name"
                    className="block text-sm text-[#D0D5DD] font-primaryMedium"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                    placeholder="Enter company name"
                    name="company_name"
                    value={company_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#D0D5DD] font-primaryMedium"
                  >
                    Company email
                  </label>
                  <input
                    type="email"
                    className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                    placeholder="@example.com"
                    name="company_email"
                    value={company_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#D0D5DD] font-primaryMedium"
                  >
                    Company size
                  </label>
                  <input
                    type="text"
                    className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                    placeholder="no. of employees"
                    name="company_size"
                    value={company_size}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="w-full md:w-1/2 md:pr-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm text-[#D0D5DD] font-primaryMedium"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                      placeholder="Enter company location"
                      name="location"
                      value={location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm text-[#D0D5DD] font-primaryMedium"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                      placeholder="Enter country of incorporation"
                      name="country"
                      value={country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="w-full md:w-1/2 md:pr-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm text-[#D0D5DD] font-primaryMedium"
                    >
                      Website URL
                    </label>
                    <input
                      type="text"
                      className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                      placeholder="www.company.com"
                      name="website_url"
                      value={website_url}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm text-[#D0D5DD] font-primaryMedium"
                    >
                      Linked URL
                    </label>
                    <input
                      type="text"
                      className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                      placeholder="https://linkedin.com/company_name"
                      name="linkedin_url"
                      value={linkedin_url}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm text-[#D0D5DD] font-primaryMedium"
                  >
                    Brief description
                  </label>
                  <textarea
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#E9D7FE] border rounded-md font-primaryRegular"
                    name="brief_description"
                    value={brief_description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="relative my-4 bg-[#E9D7FE] h-20 rounded-md flex flex-col items-center justify-center">
                  <label
                    htmlFor="file-input"
                    className="flex items-center justify-center border border-gray-300 rounded p-4 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                    <span className="text-[#471A52] font-primarySemibold">
                      Select a picture to upload
                    </span>
                  </label>

                  <input
                    type="file"
                    id="file-input"
                    className="hidden"
                    name="file"
                    // value={file}
                    onChange={fileUploadHandler}
                  />
                </div>
                <div className="mt-6 mb-2">
                  <button
                    type="submit"
                    className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide transition-colors duration-200 transform bg-[#FFFFFF] rounded-md font-primarySemibold text-[#471A52]"
                    // onClick={() => setLoading(!loading)}
                    // onClick={handleRegisterClick}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Join the community */}
        <div className="w-full md:h-[206px] my-4 md:mx-10 bg-gray-50 flex flex-col items-center justify-center">
          <p className="font-primarySemibold text-2xl md:text-4xl text-gray-900">
            Join the community
          </p>
          <p className="md:w-[768px] p-3 text-gray-600 font-primaryRegular md:text-xl text-center">
            Through our various infrastructures, we are able to build on new
            transformative and digital solutions. Through our various
            infrastructures, we are able to build on new transformative and
            digital solutions.
          </p>
        </div>
      </div>
      <Modal isVisible={modal} onClose={() => setModal(false)}>
        <div className="md:w-[400px] h-[260px] rounded-lg border">
          <div className="flex items-center justify-center font-primarySemibold mb-4 text-lg md:text-2xl text-white h-[50px] md:h-[60px] bg-[#471A52] rounded">
            Confirm
          </div>
          <div className="text-center p-2 text-lg md:text-xl font-primaryRegular">
            {/* <p> */}
            Your Startup will be added to our pool of Startups for all the
            available benefits. It can all be change if necessary
            {/* </p> */}
          </div>

          <div className="my-4 md:mt-8 flex items-center justify-between px-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-md mr-4"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#471A52] text-white rounded-md"
              onClick={handleConfirmRegistration}
              disabled={loading}
            >
              {loading ? "Registering..." : "Confirm"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StartupNetwork;

import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const StartupNetwork = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    company_Name: "",
    company_email: "",
    // Add other form fields as needed
  });

  const handleRegisterClick = () => {
    setModal(true);
  };

  const handleConfirmRegistration = () => {
    // Add your registration logic here
    console.log("Registration confirmed");
    // Reset form data after registration
    setFormData({
      company_Name: "",
      company_email: "",
      // Reset other form fields as needed
    });
    // Close the modal after registration
    setModal(false);
  };
  const benefits = [
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/research.png" />
      ),
      title: "Talents",
      message:
        "Access to a pool of qualified talents from across the African Continent.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/research.png" />
      ),
      title: "Meet-ups",
      message: "Access to our mentor roundtable meetings.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/business.png" />
      ),
      title: "Mentors",
      message:
        "Access to a pool of well-known mentors who can guide you on different paths (Legal, sales & marketing, investment readiness, product, etc), including access to our mentor roundtable meetings.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/go-to.png" />
      ),
      title: "Investors",
      message:
        "Access to Angel Investors, Venture Capital Fund Managers, and Limited Partners (i.e. High Networth Individuals, Institutional LPs & Family Offices).",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/permit.png" />
      ),
      title: "Global Expansion",
      message:
        "Access to Global Expansion as a service without additional charges.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/legal.png" />
      ),
      title: "Event Discount",
      message:
        "Fair discount prices to events hosted by us directly and indirectly.",
    },
  ];

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

  return (
    <>
      <div
        className="w-full h-[300px] md:h-[500px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${"https://spcimagestorage001.blob.core.windows.net/spc-community-images/community-hero.png"})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-[100px] md:mt-4">
          <p className="text-3xl md:text-6xl font-primarySemibold text-[#FCFCFD] mb-2 text-center">
            Welcome to our Startup Network
          </p>
          {/* <button
            onClick={() => handleBecomeMemberClick()}
            className="w-full md:w-[177px] h-[48px] text-white font-semibold md:font-medium bg-[#471A52] rounded-lg my-4"
          >
            Become a member
          </button> */}
        </div>
      </div>
      {/* Benefits */}
      <div className="w-full flex flex-col items-center justify-center my-4">
        <div className="font-primarySemibold text-[#12141D] text-2xl md:text-5xl">
          Benefits for your Startup
        </div>
        <div className="w-[280px] md:w-[532px] h-1 bg-[#471A52]"></div>
        <div className="grid grid-cols-2 md:grid-cols-6 my-4 gap-4 py-4 px-10">
          {benefits.map((benefit) => (
            <div>
              <div className="w-10 h-10">{benefit.icon}</div>
              <p className="font-primarySemibold py-2">{benefit.title}</p>
              <p className="font-primaryThin">{benefit.message}</p>
            </div>
          ))}
        </div>
        {/* Register */}
        <div className="w-full bg-[#471A52] flex flex-col items-center justify-center p-4 md:p-6">
          <div className="md:w-[664px] flex flex-col items-center justify-center border border-[#667085] rounded-lg p-2 md:p-4">
            <p className="text-2xl md:text-4xl font-primarySemibold text-[#FFFFFF]">
              Register as a Startup
            </p>
            <p className="text-sm md:text-xl font-primaryRegular text-[#EAECF0] p-2">
              Join our network and enjoy our numerous benefits
            </p>
            <div className="w-[125px] md:h-10 border border-white rounded-lg text-center font-primarySemibold text-white text-lg md:text-2xl">
              $2000
              <span className="text-[#D0D5DD] font-primaryRegular text-xs">
                /year
              </span>
            </div>
            <div className="md:w-[576px]">
              <form>
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
                    name="company_Name"
                    // value={company_Name}
                    // onChange={handleChange}
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
                    // value={company_email}
                    // onChange={handleChange}
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
                    name="company_email"
                    // value={company_email}
                    // onChange={handleChange}
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
                      name="company_location"
                      // value={company_location}
                      // onChange={handleChange}
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
                      name="company_location"
                      // value={company_location}
                      // onChange={handleChange}
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
                      name="company_location"
                      // value={company_location}
                      // onChange={handleChange}
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
                      name="company_location"
                      // value={company_location}
                      // onChange={handleChange}
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
                    // value={brief_description}
                    // onChange={handleChange}
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
                    // onChange={handleFileChange}
                  />
                </div>
                <div className="mt-6 mb-2">
                  <button
                    // type="submit"
                    type="button"
                    className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide transition-colors duration-200 transform bg-[#FFFFFF] rounded-md font-primarySemibold text-[#471A52]"
                    // onClick={() => setLoading(!loading)}
                    onClick={handleRegisterClick}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Join the community */}
        <div className="my-4">Join the community</div>
      </div>
      <Modal isVisible={modal} onClose={() => setModal(false)}>
        <div className="md:w-[400px] h-[250px] rounded-lg border">
          <div className="flex items-center justify-center font-primarySemibold mb-4 text-lg md:text-2xl text-white h-[50px] md:h-[60px] bg-[#471A52] rounded">
            Confirm
          </div>
          <div className="text-center p-2 text-lg md:text-xl font-primaryRegular">
            {/* <p> */}
              Your Startup will be added to our pool of Startups for all the
              available benefits. It can all be change if necessary
            {/* </p> */}
          </div>
          
          <div className="mt-6 flex items-center justify-between px-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-md mr-4"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-[#471A52] text-white rounded-md"
              onClick={handleConfirmRegistration}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StartupNetwork;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StartUpDataComponent, TalentDataComponent } from "./dataComponent";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Modal from "../../components/Modal";
import SqueezePage from "../../components/SqueezePage";
import Select from "react-select";
import axios from "axios";

const Community = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [showWorkWithYouModal, setShowWorkWithYouModal] = useState(false);
  const [showBecomeMemberModal, setShowBecomeMemberModal] = useState(false);
  const [showSqueezePage, setShowSqueezePage] = useState(false);
  const [reason, setReason] = useState([]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleWorkWithYouClick = () => {
    setShowWorkWithYouModal(true);
  };

  const handleBecomeMemberClick = () => {
    setShowBecomeMemberModal(true);
  };

  let registerButtonText = "";
  if (activeTab === 1) {
    registerButtonText = "Register as a Startup";
  } else if (activeTab === 2) {
    registerButtonText = "Register as a Talent";
  }
  const [selectedOption, setSelectedOption] = useState("startup");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  let viewToRender;
  viewToRender = (
    <>
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-10 2xl:px-20">
        <div className="flex">
          <button
            onClick={() => handleTabClick(1)}
            className={`${
              activeTab === 1
                ? "border-b-4 md:border-b-8 border-b-[#471A52] text-gray-900"
                : "bg-transparent text-gray-500"
            } p-2 py-2 font-primarySemibold text-lg md:text-4xl flex-1 text-center transition-colors outline-none border-0 focus:outline-none whitespace-nowrap mr-4`}
          >
            Our Startup network
          </button>
          {/* <button
            onClick={() => handleTabClick(2)}
            className={`${
              activeTab === 2
                ? "border-b-4 md:border-b-8 border-b-[#471A52] text-gray-900"
                : "bg-transparent text-gray-500"
            } p-2 py-2 font-primarySemibold text-lg md:text-4xl flex-1 text-center transition-colors outline-none border-0 focus:outline-none whitespace-nowrap`}
          >
            Talent Ecosystem
          </button> */}
        </div>
        <button className="w-[200px] h-[48px] bg-gray-50 border border-gray-300 rounded-xl mt-4 md:mt-0 text-gray-800 font-primarySemibold">
          {activeTab === 1 ? (
            <Link to="/community/startups-network">{registerButtonText}</Link>
          ) : (
            <Link to="/community/talent-network">{registerButtonText}</Link>
          )}
        </button>
      </div>
      <div className="w-full p-4 md:px-10 2xl:px-20">
        {activeTab === 1 && <StartUpDataComponent />}
        {activeTab === 2 && <TalentDataComponent />}
        {/* {activeTab === 3 && <ClosedPage />} */}
      </div>
      {/* <div className="w-full flex items-center justify-center my-10">
        <Link
          to="/community/all-startups"
          className="w-full md:w-[191px] h-[48px] mx-4 md:mx-0 bg-[#471A52] font-primarySemibold text-white rounded-lg flex items-center justify-center"
        >
          View more
        </Link>
      </div> */}
    </>
  );
  const globalExpansion = [
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/research.png" />
      ),
      title: "Research",
      description:
        "In-depth market research tailored to your industry, providing valuable insights to inform strategic decision-making for a successful global expansion.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/go-to.png" />
      ),
      title: "Go-to Market Strategy",
      description:
        "Customized strategies designed to effectively position your business in new markets, ensuring a strong and targeted approach to maximize growth.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/business.png" />
      ),
      title: "Business Incorporation",
      description:
        "Seamless facilitation of the business incorporation process, guiding you through legal requirements and paperwork to establish a solid foundation for operations.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/research.png" />
      ),
      title: "Office Setup",
      description:
        "Full-service support for establishing your physical presence, including office space acquisition, design, and setup tailored to your specific business needs.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/permit.png" />
      ),
      title: "Permit & Immigration",
      description:
        "Expert assistance in navigating the complex landscape of permits and immigration processes, ensuring compliance and a smooth transition for your team.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/legal.png" />
      ),
      title: "Legal Consultancy",
      description:
        "Comprehensive legal guidance to safeguard your business interests, offering expert advice on contracts, regulations, and compliance in the new market.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/account.png" />
      ),
      title: "Accounting Services",
      description:
        "Professional accounting services to manage financial aspects seamlessly, from tax planning and compliance to financial reporting, ensuring fiscal responsibility.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/talent.png" />
      ),
      title: "Talent Hunting & Hiring",
      description:
        "Strategic talent acquisition services to build a skilled and diverse team, including recruitment strategies, talent identification, and hiring processes tailored to your industry.",
    },
  ];

  const benefits = [
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/talents.jpg"
          className="w-full h-[193.16px] md:w-[376px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Talents",
      message:
        "Access to a pool of qualified talents from across the African Continent.",
      path: "/community/startup-network/talents",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investors.jpg"
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Mentors",
      message:
        "Access to a pool of well-known mentors who can guide you on different paths (Legal, sales & marketing, investment readiness, product, etc).",
      path: "/community/startup-network/mentors",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/meet-up.jpg"
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Venture Accelerator",
      message: "Access to our mentor roundtable meetings.",
    },
    {
      icon: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investing.jpg"
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
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
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
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
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Events Discount",
      message:
        "Fair discount prices to events hosted by us directly and indirectly.",
    },
  ];

  const options = [
    {
      value: "research",
      label: "Research",
    },
    {
      value: "market strategy",
      label: "Go-to Market Strategy",
    },
    {
      value: "business incorporation",
      label: "Business Incorporation",
    },
    {
      value: "office setup",
      label: "Office Setup",
    },
    {
      value: "permit",
      label: "Permit & Immigration",
    },
    {
      value: "legal",
      label: "Legal Consultancy",
    },
    {
      value: "accounting services",
      label: "Accounting Services",
    },
    {
      value: "talent hunting",
      label: "Talent Hunting & Hiring",
    },
  ];

  const handleSelectChange = (selectedOptions) => {
    // Extracting only values from selectedOptions array
    const selectedValues = selectedOptions.map((option) => option.value);
    setReason(selectedValues);
    console.log(reason, "selected options");
  };

  const initialValues = {
    company_email: "",
    company_name: "",
    contact_number: "",
    location: "",
    any_other_thing: "",
  };

  const [expansionValues, setExpansionValues] = useState(initialValues);

  const {
    company_name,
    company_email,
    contact_number,
    location,
    any_other_thing,
  } = expansionValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpansionValues({ ...expansionValues, [name]: value });
  };

  useEffect(() => {
    console.log(reason, "inside useeffect");
  }, [reason]);

  const handleWorkWithUs = () => {
    const url = `${apiURL}/community/global-expansion`;
    const payload = {
      work_with_us: reason,
      ...expansionValues,
    };
    axios.post(url, payload).then((response) => {
      console.log(response);
      navigate("/thankYou");
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSqueezePage(true);
    }, 5000); // Display after 5 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showSqueezePage && <SqueezePage />}
      <div
        className="w-full h-[400px] md:h-[500px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${"https://spcimagestorage001.blob.core.windows.net/spc-community-images/community-hero.png"})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-[100px] md:mt-4">
          <p className="text-3xl md:text-6xl font-primarySemibold text-gray-200 md:w-[777px] mb-2 text-center">
            Global Digital Innovation Community
          </p>
          <p className="md:text-xl font-primaryRegular text-gray-100 text-center">
            Building the world's largest and most collaborative community for
            digital innovators
          </p>
          {/* <button
            onClick={() => handleBecomeMemberClick()}
            className="w-full md:w-[177px] h-[48px] text-white font-primarySemibold md:font-primaryMedium bg-[#471A52] rounded-lg my-4"
          >
            Become a member
          </button> */}
        </div>
      </div>
      <div>{viewToRender}</div>
      {/* <div className="w-full bg-[#F4EBFF] flex flex-col mt-6 p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-[#12141D] text-2xl md:text-4xl">
          Benefits for your Startup
        </div>
        <div className="w-[280px] md:w-[410px] h-1 bg-[#471A52]"></div>
        <div className="grid md:grid-cols-3 my-4 gap-4 md:gap-10">
          {benefits.map((benefit) => (
            <div className="w-full md:w-[400px] h-[340px] md:h-[378px] bg-white border border-[#E9D7FE] rounded-xl shadow-xl p-2">
              <div>{benefit.icon}</div>
              <p className="font-primarySemibold py-2 md:text-lg">
                {benefit.title}
              </p>
              <p className="font-primaryRegular text-sm">{benefit.message}</p>
              <Link to={benefit.path}>
                <button className="w-full flex items-center justify-center mt-2">
                  View More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div> */}

      {/* global expansion */}
      <div className="w-full bg-[#471A52] flex flex-col mt-6 p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-2xl md:text-4xl text-white">
          Global Expansion
        </div>
        <div className="w-[200px] md:w-[277px] h-1 bg-white mt-2"></div>
        <p className="font-primaryRegular text-xl text-white mt-3">
          Your smooth transition, our expertise. Tell us your needs, and we'll
          handle the rest.
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {globalExpansion.map((global) => (
            <div className="bg-white md:w-[300px] rounded-xl flex flex-col items-center justify-center border border-gray-50">
              <div className="w-[52px] h-[52px] my-2 md:my-4">
                {global.icon}
              </div>
              <p className="text-center text-sm md:text-2xl font-primarySemibold text-black">
                {global.title}
              </p>
              <p className="text-center py-2 text-black text-xs md:text-sm font-primaryRegular">
                {global.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <div
            onClick={() => handleWorkWithYouClick()}
            className="bg-white w-[189px] h-[48px] border rounded-lg flex items-center justify-center text-[#471A52] font-primarySemibold cursor-pointer"
          >
            Lets work with you
          </div>
        </div>
      </div>
      {/* read to explore */}
      <div className="w-full bg-white flex flex-col items-center justify-center my-0 md:my-20 p-4 md:p-10 2xl:px-20">
        <p className="font-primarySemibold text-2xl md:text-4xl text-gray-900">
          Ready to explore?
        </p>
        <p className="w-full md:w-[768px] text-lg md:text-xl font-primaryRegular text-gray-600 text-center my-4">
          Through our various infrastructures, we are able to build on new
          transformative and digital solutions.
        </p>
        {/* <div className="w-full md:w-[120px] bg-[#471A52] h-10 rounded-xl p-2 mt-4 font-primarySemibold text-white flex items-center justify-center">
          Get Started
        </div> */}
      </div>
      <Modal
        isVisible={showWorkWithYouModal}
        onClose={() => setShowWorkWithYouModal(false)}
      >
        <div className="flex items-center justify-center">
          <div className="flex flex-col px-6 py-4 border border-t-8 border-t-[#471A52] md:w-[664px] rounded-xl">
            <p className="font-primarySemibold text-2xl text-gray-900">
              Global Expansion
            </p>
            <p className="font-primaryRegular text-gray-500">
              Become a member and enjoy our numerous benefits
            </p>
            <div>
              <form
                className="w-full my-4"
                onSubmit={handleSubmit(handleWorkWithUs)}
              >
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                      for="grid-password"
                    >
                      What do you want us to work on?
                    </label>
                    <Select
                      options={options}
                      defaultValue={reason.map((value) => ({
                        value,
                        label: value,
                      }))}
                      onChange={handleSelectChange}
                      isSearchable
                      isMulti
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                      for="grid-password"
                    >
                      Company Name
                    </label>
                    <input
                      className="font-primaryRegular block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="Enter company name"
                      name="company_name"
                      value={company_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                      for="grid-password"
                    >
                      Company Email
                    </label>
                    <input
                      className="font-primaryRegular block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="email"
                      placeholder="you@company.com"
                      name="company_email"
                      value={company_email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                      for="grid-password"
                    >
                      Contact Number
                    </label>
                    <input
                      className="font-primaryRegular block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="number"
                      placeholder="(+250)45654321345"
                      name="contact_number"
                      value={contact_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                      for="grid-password"
                    >
                      Location
                    </label>
                    <input
                      className="font-primaryRegular block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="Enter current location"
                      name="location"
                      value={location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-primaryMedium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="font-primaryRegular block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      // placeholder="Write your thoughts here..."
                      name="any_other_thing"
                      value={any_other_thing}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <button className="w-[129px] bg-gray-300 text-white rounded-lg p-3 text-center font-primarySemibold">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-[129px] bg-[#471A52] text-white rounded-lg p-3 text-center font-primarySemibold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isVisible={showBecomeMemberModal}
        onClose={() => setShowBecomeMemberModal(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-primarySemibold text-2xl text-gray-900">
            Membership
          </p>
          <p className="font-primaryRegular text-gray-500">
            Become a member and enjoy our numerous benefits
          </p>
          <div className="flex items-center justify-center my-4">
            <div className="flex items-center">
              <input
                type="radio"
                value="talent"
                checked={selectedOption === "talent"}
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] bg-[#471A52]"
              />
              <label className="ml-2">Talent</label>
            </div>
            <div className="flex items-center mx-3">
              <input
                type="radio"
                value="startup"
                checked={selectedOption === "startup"}
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] bg-[#471A52]"
              />
              <label className="ml-2">Startup</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="others"
                checked={selectedOption === "others"}
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] bg-[#471A52]"
              />
              <label className="ml-2">Others</label>
            </div>
          </div>
          <div className="w-[110px] h-10 border border-[#471A52] rounded-xl flex items-center justify-center">
            <p className="font-primarySemibold text-2xl text-[#471A52]">$200</p>
            <span className="text-gray-600 font-primaryMedium">/year</span>
          </div>
          <div>
            {selectedOption === "startup" && <StartupForm />}
            {selectedOption === "talent" && <TalentForm />}
            {selectedOption === "others" && <OthersForm />}
          </div>
        </div>
      </Modal>
    </>
  );
};

const StartupForm = () => {
  return (
    <div className="md:w-[576px]">
      <form>
        <div className="relative my-4 bg-[#E9D7FE] w-[64px] h-[64px] rounded-full flex items-center justify-center">
          <label
            htmlFor="file-input"
            className="flex items-center justify-center rounded p-4 cursor-pointer"
          >
            <MdOutlinePhotoCamera size={20} />
            {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6a2 2 0 012-2h2.8a2 2 0 001.4-.6l1.58-1.58a2 2 0 011.4-.58h4.24a2 2 0 011.4.58L17.8 3.4a2 2 0 001.4.6H20a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg> */}
          </label>

          <input
            type="file"
            id="file-input"
            className="hidden"
            name="file"
            // value={file}
            // onChange={fileUploadHandler}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="full-name"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Company name
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="Enter full name"
            name="company_name"
            // value={company_name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Company email
          </label>
          <input
            type="email"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
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
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Company size
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="no. of employees"
            name="company_size"
            // value={company_size}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-gray-700 font-primaryRegular"
            >
              Location
            </label>
            <input
              type="text"
              className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
              placeholder="Enter company location"
              name="location"
              // value={location}
              // onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-gray-700 font-primaryRegular"
            >
              Country
            </label>
            <input
              type="text"
              className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
              placeholder="Enter country of incorporation"
              name="country"
              // value={country}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-gray-700 font-primaryRegular"
            >
              Website URL
            </label>
            <input
              type="text"
              className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
              placeholder="www.company.com"
              name="website_url"
              // value={website_url}
              // onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-gray-700 font-primaryRegular"
            >
              Linked URL
            </label>
            <input
              type="text"
              className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
              placeholder="https://linkedin.com/company_name"
              name="linkedin_url"
              // value={linkedin_url}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="phone-number"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Brief description
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            name="brief_description"
            // value={brief_description}
            // onChange={handleChange}
          ></textarea>
        </div>

        <div className="w-full flex items-center justify-between mt-10">
          <button
            type="button"
            className="w-[129px] h-[48px] px-4 py-2 font-primarySemibold tracking-wide transition-colors duration-200 transform bg-gray-50 rounded-md  text-gray-900 border border-gray-300"
            // onClick={() => setLoading(!loading)}
            // onClick={handleRegisterClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-[191px] h-[48px] px-4 py-2 tracking-wide transition-colors duration-200 transform bg-[#471A52] rounded-md font-primarySemibold text-[#ffffff]"
            // onClick={() => setLoading(!loading)}
            // onClick={handleRegisterClick}
          >
            Proceed to checkout
          </button>
        </div>
      </form>
    </div>
  );
};

const TalentForm = () => {
  return (
    <div className="md:w-[576px]">
      <form>
        <div className="relative my-4 bg-[#E9D7FE] w-[64px] h-[64px] rounded-full flex items-center justify-center">
          <label
            htmlFor="file-input"
            className="flex items-center justify-center rounded p-4 cursor-pointer"
          >
            <MdOutlinePhotoCamera size={20} />
            {/* <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6a2 2 0 012-2h2.8a2 2 0 001.4-.6l1.58-1.58a2 2 0 011.4-.58h4.24a2 2 0 011.4.58L17.8 3.4a2 2 0 001.4.6H20a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg> */}
          </label>

          <input
            type="file"
            id="file-input"
            className="hidden"
            name="file"
            // value={file}
            // onChange={fileUploadHandler}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="full-name"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Full name
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="Enter full name"
            name="company_name"
            // value={company_name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Email
          </label>
          <input
            type="email"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
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
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Profession
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="Profession"
            name="company_size"
            // value={company_size}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Skills
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="skills"
            name="company_size"
            // value={company_size}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Portfolio Links
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="www.portfolio.com"
            name="company_size"
            // value={company_size}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-gray-700 font-primaryRegular"
            >
              Linkedin Profile
            </label>
            <input
              type="text"
              className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
              placeholder="www.company.com"
              name="website_url"
              // value={website_url}
              // onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-gray-700 font-primaryRegular"
            >
              Other Links
            </label>
            <input
              type="text"
              className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
              placeholder="https://linkedin.com/company_name"
              name="linkedin_url"
              // value={linkedin_url}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="phone-number"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Brief description
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            name="brief_description"
            // value={brief_description}
            // onChange={handleChange}
          ></textarea>
        </div>

        <div className="w-full flex items-center justify-between mt-10">
          <button
            type="button"
            className="w-[129px] h-[48px] px-4 py-2 font-primarySemibold tracking-wide transition-colors duration-200 transform bg-gray-50 rounded-md  text-gray-900 border border-gray-300"
            // onClick={() => setLoading(!loading)}
            // onClick={handleRegisterClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-[191px] h-[48px] px-4 py-2 tracking-wide transition-colors duration-200 transform bg-[#471A52] rounded-md font-primarySemibold text-[#ffffff]"
            // onClick={() => setLoading(!loading)}
            // onClick={handleRegisterClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const OthersForm = () => {
  return (
    <div className="md:w-[576px]">
      <form>
        <div className="mt-4">
          <label
            htmlFor="full-name"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Full name
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="Enter full name"
            name="company_name"
            // value={company_name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Email
          </label>
          <input
            type="email"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
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
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="Enter phone number"
            name="company_size"
            // value={company_size}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="phone-number"
            className="block text-sm text-gray-700 font-primaryRegular"
          >
            Country
          </label>
          <input
            type="text"
            className="block w-full h-[48px] px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md font-primaryRegular focus:outline-none"
            placeholder="Select Country"
            name="website_url"
            // value={website_url}
            // onChange={handleChange}
          />
        </div>
        <div className="w-full flex items-center justify-between mt-10">
          <button
            type="button"
            className="w-[129px] h-[48px] px-4 py-2 font-primarySemibold tracking-wide transition-colors duration-200 transform bg-gray-50 rounded-md  text-gray-900 border border-gray-300"
            // onClick={() => setLoading(!loading)}
            // onClick={handleRegisterClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-[191px] h-[48px] px-4 py-2 tracking-wide transition-colors duration-200 transform bg-[#471A52] rounded-md font-primarySemibold text-[#ffffff]"
            // onClick={() => setLoading(!loading)}
            // onClick={handleRegisterClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Community;

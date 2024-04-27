import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StartUpDataComponent, TalentDataComponent } from "./dataComponent";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Modal from "../../components/Modal";
import SqueezePage from "../../components/SqueezePage";
import Select from "react-select";
import axios from "axios";
import Talents from "../../assets/talents.jpg";
import Investors from "../../assets/investors.jpg";
import Accelerator from "../../assets/accelerator.jpg";
import Expansion from "../../assets/expand.jpg";
import CommunityImage from "../../assets/community.png";
import CommunityHero from "../../assets/communityHero.png";
import Mentors from "../../assets/mentors.jpg";

const Community = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [showWorkWithYouModal, setShowWorkWithYouModal] = useState(false);
  const [showBecomeMemberModal, setShowBecomeMemberModal] = useState(false);
  const [registerStartup, setRegisterStartup] = useState(false);
  const [showSqueezePage, setShowSqueezePage] = useState(false);
  const [reason, setReason] = useState([]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleWorkWithYouClick = () => {
    setShowWorkWithYouModal(true);
  };

  const handleRegisterStartupClick = () => {
    setRegisterStartup(true);
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
        {/* <button className="w-[200px] h-[48px] bg-gray-50 border border-gray-300 rounded-xl mt-4 md:mt-0 text-gray-800 font-primarySemibold">
          {activeTab === 1 ? (
            <Link to="/community/startups-network">{registerButtonText}</Link>
          ) : (
            <Link to="/community/talent-network">{registerButtonText}</Link>
          )}
        </button> */}
        <button className="w-[200px] h-[48px] bg-gray-50 border border-gray-300 rounded-xl mt-4 md:mt-0 text-gray-800 font-primarySemibold">
          {activeTab === 1 ? (
            <div onClick={() => handleRegisterStartupClick()}>
              {registerButtonText}
            </div>
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
          // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/talents.jpg"
          src={Talents}
          className="w-full h-[193.16px] md:w-[376px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Talents",
      message:
        "Our startup network provides access to a diverse pool of talented individuals. Whether you're looking for skilled developers, creative designers, or savvy marketers, our platform connects you with the right talent to fuel the growth of your startup. From technical expertise to business acumen, our network ensures that you have access to the resources needed to build a strong team and drive innovation.",
      path: "/community/startup-network/talents",
    },
    {
      icon: (
        <img
          // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investors.jpg"
          src={Mentors}
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Mentors",
      message:
        "Success in the startup world often requires guidance from experienced mentors who have navigated similar challenges. Through our network, you gain access to seasoned professionals and industry veterans who offer invaluable insights, advice, and support. Whether you need help refining your business strategy, overcoming obstacles, or making critical decisions, our mentors are here to provide guidance and mentorship every step of the way.",
      path: "/community/startup-network/mentors",
    },
    {
      icon: (
        <img
          // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/meet-up.jpg"
          src={Accelerator}
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Venture Accelerator",
      message:
        "Accelerators play a pivotal role in providing startups with the resources, mentorship, and network needed to accelerate their growth. Our network partners with leading venture accelerators across Africa, offering startups access to intensive programs designed to fast-track their success. From mentorship and workspace to funding opportunities and industry connections, our venture accelerators provide startups with the support they need to thrive in a competitive market.",
    },
    {
      icon: (
        <img
          // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investing.jpg"
          src={Investors}
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Investors",
      message:
        "Securing funding is crucial for the growth and scalability of your startup. Our network connects you with a diverse range of investors, including angel investors, venture capitalists, and corporate partners, who are eager to invest in promising ventures. From seed funding to Series A rounds, we facilitate connections between startups and investors to help you raise the capital needed to take your business to the next level.",
      path: "/community/startup-network/investors",
    },
    {
      icon: (
        <img
          // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/expand.jpg"
          src={Expansion}
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Global Expansion",
      message:
        "Scaling your startup beyond borders opens up new opportunities for growth, innovation, and market reach. Our network provides startups with the resources and support needed to expand globally, whether you're looking to enter new markets, establish international partnerships, or access cross-border investment opportunities. From market research and expansion strategies to international networking and partnerships, we help startups navigate the complexities of global expansion and unlock new growth opportunities.",
    },
    {
      icon: (
        <img
          // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/event.jpg"
          src={CommunityImage}
          className="w-full h-[193.16px] md:w-[380px] md:h-[200px] rounded-lg"
        />
      ),
      title: "Thought Leadership Events",
      message:
        "Networking and learning opportunities are essential for startup founders looking to expand their knowledge, connect with industry peers, and stay updated on the latest trends. As a member of our startup network, you gain access to exclusive discounts and perks for startup events, conferences, workshops, and seminars. Whether you're looking to attend a networking event, pitch competition, or industry summit, our network ensures that you can access valuable opportunities at discounted rates.",
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
      {/* {showSqueezePage && <SqueezePage />} */}
      <div
        className="w-full h-[400px] md:h-[500px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          // backgroundImage: `url(${"https://spcimagestorage001.blob.core.windows.net/spc-community-images/community-hero.png"})`,
          backgroundImage: `url(${CommunityHero})`,
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
      <div className="w-full bg-[#F4EBFF] flex flex-col mt-6 p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-[#12141D] text-2xl md:text-4xl">
          Benefits for your Startup
        </div>
        <div className="w-[280px] md:w-[410px] h-1 bg-[#471A52]"></div>
        <div className="grid md:grid-cols-3 my-4 gap-4 md:gap-10">
          {benefits.map((benefit) => (
            <div className="w-full md:w-[400px] bg-white border border-[#E9D7FE] rounded-xl shadow-xl p-2">
              <div>{benefit.icon}</div>
              <p className="font-primarySemibold py-2 md:text-lg">
                {benefit.title}
              </p>
              <p className="font-primaryRegular text-sm">{benefit.message}</p>
              <Link to={benefit.path}>
                <button className="w-full flex items-center justify-center mt-2 font-primarySemibold text-[#471A52]">
                  View More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

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
      <Modal
        isVisible={registerStartup}
        onClose={() => setRegisterStartup(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <StartupForm />
        </div>
      </Modal>
    </>
  );
};

const StartupForm = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [file, setFile] = useState({});
  const [filePreview, setFilePreview] = useState("");
  const initialValues = {
    company_name: "",
    company_email: "",
    company_size: "",
    location: "",
    country: "",
    brief_description: "",
    company_phone: "",
    company_person_name: "",
    company_person_title: "",
    company_person_whatsapp_number: "",
    company_stage: "",
    membership_fee: "",
  };

  const [startupMembership, setStartupMembership] = useState(initialValues);

  const {
    company_name,
    company_email,
    company_size,
    location,
    country,
    brief_description,
    company_image,
    company_phone,
    company_person_name,
    company_person_title,
    company_person_whatsapp_number,
    company_stage,
    membership_fee,
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
    setFilePreview(URL.createObjectURL(docx));
  };

  const handleConfirmRegistration = () => {
    const url = `${apiURL}/member-startup`;

    const formData = new FormData();

    formData.append("company_name", company_name);
    formData.append("company_email", company_email);
    formData.append("company_size", company_size);
    formData.append("location", location);
    formData.append("country", country);
    formData.append("brief_description", brief_description);
    formData.append("company_image", file);
    formData.append("company_phone", company_phone);
    formData.append("company_person_name", company_person_name);
    formData.append("company_person_title", company_person_title);
    formData.append(
      "company_person_whatsapp_number",
      company_person_whatsapp_number
    );
    formData.append("company_stage", company_stage);
    formData.append("membership_fee", membership_fee);

    axios
      .post(url, formData)
      .then((response) => {
        console.log(response.data, "response from startup reg.");
        navigate("/thankYou");
      })
      .catch((error) => {
        // Handle error responses here
        console.error("Error:", error);
      });
  };
  return (
    <div className="md:w-[600px] p-4 shadow-xl shadow-[#E9D7FE] border border-t-8 border-t-[#471A52] rounded-lg">
      <form onSubmit={handleSubmit(handleConfirmRegistration)}>
        {/* <form> */}
        <div className="my-2">
          <label
            htmlFor="full-name"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Company name
          </label>
          <input
            type="text"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            placeholder="Enter company name"
            name="company_name"
            value={company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="email"
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
            >
              Company email
            </label>
            <input
              type="email"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="@example.com"
              name="company_email"
              value={company_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="full-name"
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
            >
              Company phone
            </label>
            <input
              type="number"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="Enter company name"
              name="company_phone"
              value={company_phone}
              onChange={handleChange}
              required
            />
          </div>
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
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
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
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
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
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="Enter country of incorporation"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 my-2">
          <div class="block w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
              for="grid-city"
            >
              Contact Person Name
            </label>
            <input
              type="text"
              id="grid-city"
              placeholder="Contact Name"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              name="company_person_name"
              value={company_person_name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
              for="grid-state"
            >
              Contact Person Title
            </label>
            <input
              type="text"
              id="grid-city"
              placeholder="Title"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              name="company_person_title"
              value={company_person_title}
              onChange={handleChange}
              required
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
              for="grid-zip"
            >
              Contact Person Number
            </label>
            <input
              type="number"
              placeholder="Whatsapp Number"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              id="grid-zip"
              name="company_person_whatsapp_number"
              value={company_person_whatsapp_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="stage-of-company"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Stage of company:
          </label>
          <select
            id="stage-of-company"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            name="company_stage"
            value={company_stage}
            onChange={handleChange}
            required
          >
            <option value="">Select one...</option>
            <option value="pre-revenue">Pre-revenue</option>
            <option value="revenue-stage">Revenue stage</option>
          </select>
        </div>
        {/* <div className="mt-2">
          <label
            htmlFor="full-name"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Company Website or Social Media URL
          </label>
          <input
            type="text"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] border rounded-md font-primaryRegular"
            placeholder="Enter company name"
            name="website_url"
            // value={company_name}
            // onChange={handleChange}
            // required
          />
        </div> */}
        <div className="mt-2">
          <label
            htmlFor="phone-number"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Brief description
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            name="brief_description"
            value={brief_description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="relative my-4 border border-[#E9D7FE] h-20 rounded-md flex flex-col items-center justify-center">
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
            onChange={fileUploadHandler}
          />
        </div>
        {filePreview && (
          <div className="mt-4">
            <img
              src={filePreview}
              alt="Selected file"
              className="max-w-full h-auto"
            />
          </div>
        )}
        <div className="mt-2">
          <label
            htmlFor="membership-fees"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            If the team reviews your application and you qualify to join the
            network, can you afford $500-$1,000 in lifetime membership fees?
          </label>
          <select
            id="membership-fees"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            name="membership_fee"
            value={membership_fee}
            onChange={handleChange}
            required
          >
            <option value="">Select one...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mt-6 mb-2">
          <button
            type="submit"
            className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide transition-colors duration-200 transform bg-[#471A52] rounded-md font-primarySemibold text-[#FFFFFF]"
          >
            Register
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
        <div className="relative my-4 border border-[#E9D7FE] w-[64px] h-[64px] rounded-full flex items-center justify-center">
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

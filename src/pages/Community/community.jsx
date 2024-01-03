import React, { useState } from "react";
import Hero from "./community.png";
import Research from "./icons/research.png";
import Goto from "./icons/go-to.png";
import Business from "./icons/business.png";
import Permit from "./icons/permit.png";
import Legal from "./icons/legal.png";
import Account from "./icons/account.png";
import Talent from "./icons/talent.png";
import { StartUpDataComponent, TalentDataComponent } from "./dataComponent";

const Community = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  let registerButtonText = "";
  if (activeTab === 1) {
    registerButtonText = "Register as a Startup";
  } else if (activeTab === 2) {
    registerButtonText = "Register as a Talent";
  }

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
            } p-2 py-2 font-semibold text-lg md:text-4xl flex-1 text-center transition-colors outline-none border-0 focus:outline-none whitespace-nowrap mr-4`}
          >
            Our Startup partners
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`${
              activeTab === 2
                ? "border-b-4 md:border-b-8 border-b-[#471A52] text-gray-900"
                : "bg-transparent text-gray-500"
            } p-2 py-2 font-semibold text-lg md:text-4xl flex-1 text-center transition-colors outline-none border-0 focus:outline-none whitespace-nowrap`}
          >
            Talent Ecosystem
          </button>
        </div>
        <button className="w-[200px] h-[48px] bg-gray-50 border border-gray-300 rounded-xl mt-4 md:mt-0 text-gray-800 font-semibold">
          {registerButtonText}
        </button>
      </div>
      <div className="w-full p-4 md:px-10 2xl:px-20">
        {activeTab === 1 && <StartUpDataComponent />}
        {activeTab === 2 && <TalentDataComponent />}
        {/* {activeTab === 3 && <ClosedPage />} */}
      </div>
    </>
  );
  const globalExpansion = [
    {
      icon: <img src={Research} />,
      title: "Research",
      description:
        "In-depth market research tailored to your industry, providing valuable insights to inform strategic decision-making for a successful global expansion.",
    },
    {
      icon: <img src={Goto} />,
      title: "Go-to Market Strategy",
      description:
        "Customized strategies designed to effectively position your business in new markets, ensuring a strong and targeted approach to maximize growth.",
    },
    {
      icon: <img src={Business} />,
      title: "Business Incorporation",
      description:
        "descrSeamless facilitation of the business incorporation process, guiding you through legal requirements and paperwork to establish a solid foundation for operations.iption",
    },
    {
      icon: <img src={Research} />,
      title: "Office Setup",
      description:
        "Full-service support for establishing your physical presence, including office space acquisition, design, and setup tailored to your specific business needs.",
    },
    {
      icon: <img src={Permit} />,
      title: "Permit & Immigration",
      description:
        "Expert assistance in navigating the complex landscape of permits and immigration processes, ensuring compliance and a smooth transition for your team.",
    },
    {
      icon: <img src={Legal} />,
      title: "Legal Consultancy",
      description:
        "Comprehensive legal guidance to safeguard your business interests, offering expert advice on contracts, regulations, and compliance in the new market.",
    },
    {
      icon: <img src={Account} />,
      title: "Accounting Services",
      description:
        "Professional accounting services to manage financial aspects seamlessly, from tax planning and compliance to financial reporting, ensuring fiscal responsibility.",
    },
    {
      icon: <img src={Talent} />,
      title: "Talent Hunting & Hiring",
      description:
        "Strategic talent acquisition services to build a skilled and diverse team, including recruitment strategies, talent identification, and hiring processes tailored to your industry.",
    },
  ];
  return (
    <>
      <div
        className="w-full h-[514px] md:h-[671px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-[200px] md:mt-4">
          <p className="text-3xl md:text-6xl font-semibold text-gray-200 md:w-[625px] mb-2 text-center">
            Global Digital Innovation Commnuity
          </p>
          <p className="md:text-xl font-normal text-gray-100 text-center">
            Building the world's largest and most collaborative community for
            digital innovators
          </p>
          <button className="w-full md:w-[177px] h-[48px] text-white font-semibold md:font-medium bg-[#471A52] rounded-lg my-4">
            Become a member
          </button>
        </div>
      </div>
      <div>{viewToRender}</div>
      {/* global expansion */}
      <div className="w-full bg-[#471A52] flex flex-col mt-6 p-4 md:p-10 2xl:px-20">
        <div className="font-semibold text-3xl md:text-4xl text-white">
          Global Expansion
        </div>
        <div className="w-[277px] h-1 bg-white mt-2"></div>
        <p className="font-normal text-xl text-white mt-3">
          Soft-landing as a service. Select what you need, let’s make it happen.
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {globalExpansion.map((global) => (
            <div className="bg-white md:w-[300px] rounded-xl flex flex-col items-center justify-center border border-gray-50">
              <div className="w-[52px] h-[52px] my-4">{global.icon}</div>
              <p className="text-sm md:text-2xl font-semibold text-black">
                {global.title}
              </p>
              <p className="text-center p-2 text-black text-xs md:text-sm">
                {global.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="bg-white w-[189px] h-[48px] border rounded-lg flex items-center justify-center text-[#471A52] font-semibold">
            Lets work with you
          </div>
        </div>
      </div>
      {/* read to explore */}
      <div className="w-full bg-gray-50 flex flex-col items-center justify-center mt-6 p-4 md:p-10 2xl:px-20">
        <p className="font-semibold text-2xl md:text-4xl text-gray-900">
          Ready to explore?
        </p>
        <p className="text-lg md:text-xl font-normal text-gray-600 text-center">
          Through our various infrastructures, we are able to build on new
          transformative and digital solutions.
        </p>
        <div
          // to="/community"
          className="w-full md:w-[173px] bg-[#471A52] h-10 rounded-xl p-2 m-6 font-semibold text-white flex items-center justify-center"
        >
          Become a member
        </div>
      </div>
    </>
  );
};

export default Community;

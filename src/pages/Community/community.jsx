import React, { useState } from "react";
import { StartUpDataComponent, TalentDataComponent } from "./dataComponent";
import Modal from "../../components/Modal";

const Community = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showWorkWithYouModal, setShowWorkWithYouModal] = useState(false);
  const [showBecomeMemberModal, setShowBecomeMemberModal] = useState(false);

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
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/research.png" />
      ),
      title: "Research",
      description:
        "In-depth market research tailored to your industry, providing valuable insights to inform strategic decision-making for a successful global expansion.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/go-to.png" />
      ),
      title: "Go-to Market Strategy",
      description:
        "Customized strategies designed to effectively position your business in new markets, ensuring a strong and targeted approach to maximize growth.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/business.png" />
      ),
      title: "Business Incorporation",
      description:
        "Seamless facilitation of the business incorporation process, guiding you through legal requirements and paperwork to establish a solid foundation for operations.iption",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/research.png" />
      ),
      title: "Office Setup",
      description:
        "Full-service support for establishing your physical presence, including office space acquisition, design, and setup tailored to your specific business needs.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/permit.png" />
      ),
      title: "Permit & Immigration",
      description:
        "Expert assistance in navigating the complex landscape of permits and immigration processes, ensuring compliance and a smooth transition for your team.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/legal.png" />
      ),
      title: "Legal Consultancy",
      description:
        "Comprehensive legal guidance to safeguard your business interests, offering expert advice on contracts, regulations, and compliance in the new market.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/account.png" />
      ),
      title: "Accounting Services",
      description:
        "Professional accounting services to manage financial aspects seamlessly, from tax planning and compliance to financial reporting, ensuring fiscal responsibility.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/talent.png" />
      ),
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
          backgroundImage: `url(${"https://spc-space.ams3.cdn.digitaloceanspaces.com/community-images/community.png"})`,
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
          <button
            onClick={() => handleBecomeMemberClick()}
            className="w-full md:w-[177px] h-[48px] text-white font-semibold md:font-medium bg-[#471A52] rounded-lg my-4"
          >
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
              <p className="text-center p-1 text-sm md:text-2xl font-semibold text-black">
                {global.title}
              </p>
              <p className="text-center p-2 text-black text-xs md:text-sm">
                {global.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <div
            onClick={() => handleWorkWithYouClick()}
            className="bg-white w-[189px] h-[48px] border rounded-lg flex items-center justify-center text-[#471A52] font-semibold cursor-pointer"
          >
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
      <Modal
        isVisible={showWorkWithYouModal}
        onClose={() => setShowWorkWithYouModal(false)}
      >
        <div className="flex flex-col px-6 py-4 border border-t-8 border-t-[#471A52] md:w-[664px] rounded-xl">
          <p className="font-semibold text-2xl text-gray-900">
            Global Expansion
          </p>
          <p className="font-normal text-gray-500">
            Become a member and enjoy our numerous benefits
          </p>
          <div>
            <form className="w-full my-4">
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                    for="grid-password"
                  >
                    What do you want us to work on?
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Choose"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                    for="grid-password"
                  >
                    Company Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Enter company name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                    for="grid-password"
                  >
                    Company Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                    for="grid-password"
                  >
                    Contact Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="number"
                    placeholder="(+250)45654321345"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                    for="grid-password"
                  >
                    Location
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Enter current location"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    // placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <button className="w-[129px] bg-gray-300 text-white rounded-lg p-3 text-center font-semibold">
                  Cancel
                </button>
                <button className="w-[129px] bg-[#471A52] text-white rounded-lg p-3 text-center font-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <Modal
        isVisible={showBecomeMemberModal}
        onClose={() => setShowBecomeMemberModal(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-2xl text-gray-900">Membership</p>
          <p className="font-normal text-gray-500">
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
            <p className="font-semibold text-2xl text-[#471A52]">$200</p>
            <span className="text-gray-600 font-medium">/year</span>
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
    <div className="my-10">
      {/* Form fields for startup */}
      <p>Startup Form Here</p>
    </div>
  );
};

const TalentForm = () => {
  return (
    <div className="my-10">
      {/* Form fields for talent */}
      <p>Talent Form Here</p>
    </div>
  );
};

const OthersForm = () => {
  return (
    <div className="my-10">
      {/* Form fields for others */}
      <p>Others Form Here</p>
    </div>
  );
};
export default Community;

import React, { useState } from "react";
import Select from "react-select";

const GlobalExpansion = () => {
  const [reason, setReason] = useState("");
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

  const handleSelectChange = (value) => {
    setReason(value.value);
    console.log(value, "values");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col px-6 py-4 border border-t-8 border-t-[#471A52] md:w-[664px] rounded-xl">
        <div>
          <form className="w-full my-4">
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
                  defaultValue={reason}
                  onChange={handleSelectChange}
                  isSearchable
                  isMulti
                />
              </div>
            </div>
            {/* <div className="flex flex-wrap -mx-3 mb-3">
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
                />
              </div>
            </div> */}
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
                  placeholder="Enter the country you wish to expand to"
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
                ></textarea>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="w-full bg-[#471A52] text-white rounded-lg p-2 text-center font-primarySemibold shadow-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GlobalExpansion;

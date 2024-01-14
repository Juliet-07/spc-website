import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "../../components/Modal";

const ImpactFounder = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [modal, setModal] = useState(false);

  const passDetails = [
    {
      id: 1,
      text: "Slot to speak at region of operation and grand finale",
    },
    {
      id: 2,
      text: "Access to investors forum and private meeting at the grand-finale",
    },
    {
      id: 3,
      text: "Access to a 3-night accomodation plans at the grand-finale",
    },
    {
      id: 4,
      text: "Feature among top 100 African founders in the Africa Digital Innovation Magazine",
    },
    {
      id: 5,
      text: "Access to one year free softlanding as a service consultancy",
    },
  ];

  const initialValues = {
    company_Name: "",
    company_email: "",
    phone_number: "",
    amount: "",
    company_location: "",
    passType: "",
    brief_description: "",
  };
  const [formDetails, setFormDetails] = useState(initialValues);
  const {
    company_Name,
    company_email,
    phone_number,
    company_location,
    amount,
    passType,
    brief_description,
  } = formDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handlePassDetails = async () => {
    const url = `${apiURL}/events/sponsorship`;
    await axios
      .post(url, {
        ...formDetails,
        amount: "5000",
        passType: "IMPACT FOUNDER PARTNERSHIP",
      })
      .then((response) => {
        console.log(response, "response");
        let partners = JSON.stringify(response.data.newForm);
        localStorage.setItem("sponsorship-pass-details", partners);
        setModal(true);
      });
  };

  return (
    <div className="w-full flex flex-col p-4 2xl:px-20">
      <Link
        to="/events"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 my-6">
        <div className="md:w-[648px] h-[660px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Package Benefits
          </div>
          <div className="w-[254px] h-2 bg-[#471A52]"></div>
          <div className="flex-grow my-4">
            {passDetails.map((reason, index) => (
              <div key={index.id} className="flex items-center p-2">
                <span className="w-[24px] h-[24px] rounded-full bg-[#FBEDFF] mr-3 flex items-center justify-center">
                  <IoMdCheckmark size={20} color="#471A52" />
                </span>
                <p className="text-gray-500 font-normal text-base">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* form */}
        <div className="w-full md:w-[593px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
          <p className="font-semibold text-3xl text-gray-900">$5,000</p>
          <del className="font-semibold text-2xl text-gray-400">$10,000</del>
          <p className="font-semibold text-gray-900 uppercase">
            impact founder partnership
          </p>
          <form onSubmit={handleSubmit(handlePassDetails)}>
            <div className="mt-4">
              <label
                htmlFor="full-name"
                className="block text-sm text-gray-700 font-medium "
              >
                Company name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter full name"
                name="company_Name"
                value={company_Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 font-medium "
              >
                Company email address
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="@example.com"
                name="company_email"
                value={company_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Contact
              </label>
              <input
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter phone number"
                name="phone_number"
                value={phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Location
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter company location"
                name="company_location"
                value={company_location}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Brief description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                name="brief_description"
                value={brief_description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md hover:bg-[#471A52]/70 focus:outline-none"
                // onClick={() => setLoading(!loading)}
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isVisible={modal}
        onClose={() => {
          setModal(false);
        }}
      >
        <div className="w-full rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
          <div>
            <div className="flex flex-col">
              <p className="font-semibold text-4xl text-gray-900">$5,000</p>
              <p className="font-semibold text-gray-900 uppercase">
                impact founder partnership
              </p>
            </div>
          </div>
          {/* invoice */}
          <div className="flex items-center my-2">
            <div className="flex items-center">
              <span className="block text-sm text-gray-700 font-medium ">
                Company Name:
              </span>
              <p className="px-2">{company_Name}</p>
            </div>
            <div className="flex items-center mx-2">
              <span className="block text-sm text-gray-700 font-medium ">
                Email address:
              </span>
              <p className="px-2">{company_email}</p>
            </div>
            <div className="flex items-center mx-2">
              <span className="block text-sm text-gray-700 font-medium ">
                Country of Participation:
              </span>
              <p className="px-2">{company_location}</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <p className="text-center md:w-[500px] md:text-xl text-gray-600">
              Your invoice will be generated and sent to your email within the
              next 24 hours. Thank you for your payment and participation in the{" "}
              <b className="text-black">Africa Digital Innovations Summit.</b>
            </p>
            <button
              className="w-[177px] h-[44px] bg-[#471A52] rounded-lg my-4 text-white"
              onClick={() => {
                setModal(false);
                window.location.reload();
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImpactFounder;

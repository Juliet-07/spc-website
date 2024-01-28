import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Modal from "../../components/Modal";

const PartnerPass = () => {
  const location = useLocation();
  const passDetails = location.state && location.state.pass;
  console.log("passDetails:", passDetails);
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [modal, setModal] = useState(false);

  const countries = [
    "Morocco",
    "Ghana",
    "Nigeria",
    "South Africa",
    "Namibia",
    "Kenya",
    "Uganda",
    "Rwanda",
    "Tanzania",
    "Mauritius",
  ];
  const countriesOptions = countries.map((country) => ({
    label: country,
    value: country,
  }));

  const initialValues = {
    company_Name: "",
    company_email: "",
    phone_number: "",
    amount: "",
    company_location: "",
    passType: "",
    countries_of_participation: "",
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

  const handleCountryChange = (selectedOptions) => {
    setSelectedCountries(selectedOptions);
    const selectedCountriesArray = selectedOptions.map(
      (option) => option.value
    );
    setFormDetails({
      ...formDetails,
      countries_of_participation: selectedCountriesArray,
    });
  };

  const handlePassDetails = async () => {
    const url = `${apiURL}/events/sponsorship`;
    await axios
      .post(url, {
        ...formDetails,
        amount: passDetails.discount,
        passType: passDetails.title,
      })
      .then((response) => {
        console.log(response, "response");
        let partners = JSON.stringify(response.data);
        localStorage.setItem("sponsorship-pass-details", partners);
        // navigate("/events/sponsorship-payment-details", {
        //   state: { passDetails: passDetails },
        // });
        setModal(true);
      });
  };

  if (!passDetails) {
    return <div>No details available</div>;
  }
  return (
    <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20">
      <Link
        to="/events"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 my-6">
        <div className="md:w-[648px] md:h-[750px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Package Benefits
          </div>
          <div className="w-[254px] h-2 bg-[#471A52]"></div>
          {/* <p>Price:{passDetails.price}</p> */}
          {/* <p>Title:{passDetails.title}</p> */}
          <div className="flex-grow my-4">
            {passDetails.reasons.map((reason, index) => (
              <div key={index} className="flex items-center p-2">
                <span className="w-[24px] h-[24px] rounded-full bg-[#FBEDFF] mr-3 flex items-center justify-center">
                  <IoMdCheckmark size={20} color="#471A52" />
                </span>
                <p className="text-gray-500 font-normal text-base">{reason}</p>
              </div>
            ))}
          </div>
        </div>
        {/* form */}
        <div className="w-full md:w-[593px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-6">
          <p className="font-semibold text-4xl text-gray-900">
            {passDetails.discount}
          </p>
          <p className="font-semibold text-gray-900 uppercase">
            {passDetails.title}
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
            <div className="mt-4">
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
            <div className="mt-4">
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
            <div className="mt-4">
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
            <div className="mt-4">
              <label
                htmlFor="countries-of-participation"
                className="block text-sm text-gray-700 font-medium"
              >
                Countries of Participation
              </label>
              <Select
                isMulti
                options={countriesOptions}
                value={selectedCountries}
                onChange={handleCountryChange}
                menuPosition="fixed"
              />
            </div>
            <div className="mt-4">
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
        <Modal
          isVisible={modal}
          onClose={() => {
            setModal(false);
          }}
        >
          <div className="w-full rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
            <div>
              <div className="flex flex-col">
                <p className="font-semibold text-4xl text-gray-900">
                  ${passDetails.discount}
                </p>
                <p className="font-semibold text-gray-900 uppercase">
                  {passDetails.title}
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
                next 48 - 72 hours. Thank you for your payment and participation
                in the{" "}
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
    </div>
  );
};

export default PartnerPass;

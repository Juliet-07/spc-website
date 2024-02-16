import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Modal from "../../components/Modal";
import Flutterwave from "./flutterwave.png";
import CustomFlutterWaveButton from "../../components/Flutterwave";

const CountryDelegatePass = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modal, setModal] = useState(false);

  const passDetails = [
    {
      id: 1,
      text: "Access to a physical event in any country of the delegate's choice",
    },
    {
      id: 2,
      text: "Access to the Live streaming for ADIS across all countries",
    },
    {
      id: 3,
      text: "1-year free membership with Africa Digital Innovation Community",
    },
    {
      id: 4,
      text: "Certificate of participation at the end of the summit",
    },
  ];

  const initialValues = {
    fullname: "",
    email: "",
    phone_number: "",
    country: "",
    amount: "",
    passType: "",
  };
  const [formDetails, setFormDetails] = useState(initialValues);
  const { fullname, email, phone_number, country, amount, passType } =
    formDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormDetails({ ...formDetails, country: selectedOption.value });
  };

  const handlePassDetails = async () => {
    const url = `${apiURL}/events/delegates-pass`;
    try {
      const response = await axios.post(url, {
        ...formDetails,
        amount: "200",
        passType: "COUNTRY DELEGATE PASS",
      });

      console.log(response, "response");
      let virtualPass = JSON.stringify(response.data.newForm);
      localStorage.setItem("country-delegate-pass-details", virtualPass);
      setModal(true);
    } catch (error) {
      console.error("Error in API call:", error);
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        const detail = data.map((country) => ({
          label: country.name,
          value: country.name,
          flag: country.flag, // Assuming flags is an array
        }));
        console.log(data, "country info");
        setCountries(detail);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    getCountries();
  }, []);

  const animatedComponents = makeAnimated();

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
        <div className="md:w-[648px] h-[554px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
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
        <div className="w-full md:w-[593px] h-[554px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
          <p className="font-semibold text-4xl text-gray-900">$200</p>
          {/* <del className="font-semibold text-2xl text-gray-400">$200</del> */}
          <p className="font-semibold text-gray-900 uppercase">
            country general delegate pass
          </p>
          <form onSubmit={handleSubmit(handlePassDetails)}>
            <div className="mt-2">
              <label
                htmlFor="full-name"
                className="block text-sm text-gray-700 font-medium "
              >
                Full name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter full name"
                name="fullname"
                value={fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 font-medium "
              >
                Email address
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="@example.com"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Phone number
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
              <label className="mb-2 text-sm font-medium text-[#2d3748]">
                Country
              </label>
              <Select
                components={animatedComponents}
                options={countries}
                value={selectedCountry}
                onChange={handleCountryChange}
                getOptionLabel={(option) => (
                  <div className="flex">
                    <img
                      src={option.flag}
                      alt={`${option.label} flag`}
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    {option.label}
                  </div>
                )}
                menuPosition="fixed"
              />
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md hover:bg-[#471A52]/70 focus:outline-none"
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
        <div className="w-full md:w-[500px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="font-semibold text-4xl text-gray-900">$200</p>
              <p className="font-semibold text-gray-900 uppercase pt-3">
                country general delegate pass
              </p>
            </div>
            <div>
              <img src={Flutterwave} alt="Flutterwave Logo" />
            </div>
          </div>

          <div>
            <div className="mt-4 flex items-center">
              <span className="block text-sm text-gray-700 font-medium ">
                Full name:
              </span>
              <p>{fullname}</p>
            </div>
            <div className="mt-6 flex items-center">
              <span className="block text-sm text-gray-700 font-medium ">
                Email address:
              </span>
              <p>{email}</p>
            </div>
            <div className="mt-20">
              <CustomFlutterWaveButton
                className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md hover:bg-[#471A52]/70 focus:outline-none"
                name={fullname}
                email={email}
                amount="200"
                phone_number={phone_number}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CountryDelegatePass;

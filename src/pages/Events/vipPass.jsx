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
import { FaCheck } from "react-icons/fa6";

const VipPass = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modal, setModal] = useState(false);

  const passDetails = [
    {
      id: 1,
      text: "Access to all physical event in all countries in the four regions",
    },
    {
      id: 2,
      text: "Access to the Live streaming for ADIS across all countries",
    },
    {
      id: 3,
      text: "2-years free membership with Africa Digital Innovation Community",
    },
    {
      id: 4,
      text: "Access to VIP networking dinner in all countries where ADIS physical events are happening",
    },
    {
      id: 5,
      text: "Certificate of participation at the end of the summit",
    },
    {
      id: 6,
      text: "Access to the grand-finale part of the summit + ADIS VIP AWARD NIGHT",
    },
    {
      id: 7,
      text: "Access to the Investors forum and private meeting",
    },
    {
      id: 8,
      text: "3-days paid accomodation in Kigali for the grand finale",
    },
  ];

  const initialValues = {
    fullname: "",
    email: "",
    phone_number: "",
    country: "",
    amount: "",
    passType: "",
    number_of_passes: "",
  };
  const [formDetails, setFormDetails] = useState(initialValues);
  const {
    fullname,
    email,
    phone_number,
    country,
    amount,
    passType,
    number_of_passes,
  } = formDetails;

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
        amount: "4000",
        passType: "VIP ALL ACCESS PASS",
      });

      console.log(response, "response");
      let generalPass = JSON.stringify(response.data.newForm);
      localStorage.setItem("general-pass-details", generalPass);
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
        <div className="md:w-[648px] h-[600px] rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4 md:p-10">
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
          <p className="font-semibold text-3xl text-gray-900">$4,000</p>
          {/* <del className="font-semibold text-2xl text-gray-400">$4,000</del> */}
          <p className="font-semibold text-gray-900 uppercase">
            vip all access pass
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
            <div className="mt-4">
              <label
                htmlFor="phone-number"
                className="block text-sm text-gray-700 font-medium"
              >
                Number Of Passess
              </label>
              <input
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#471A52] focus:ring-[#471A52]/60 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter the number of tickets you would like to purchase"
                name="number_of_passes"
                value={number_of_passes}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
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
        <div className="w-full rounded-xl border border-gray-200 border-t-[16px] border-t-[#471A52] flex flex-col p-4">
          <div>
            <div className="flex flex-col">
              <p className="font-semibold text-4xl text-gray-900">$4,000</p>
              <p className="font-semibold text-gray-900 uppercase">
                vip all access pass
              </p>
            </div>
            {/* <div>
              <img src={Flutterwave} alt="Flutterwave Logo" />
            </div> */}
          </div>
          {/* payment */}
          <div className="flex items-center my-2">
            <div className="flex items-center">
              <span className="block text-sm text-gray-700 font-medium ">
                Full name:
              </span>
              <p className="px-2">{fullname}</p>
            </div>
            <div className="flex items-center mx-2">
              <span className="block text-sm text-gray-700 font-medium ">
                Email address:
              </span>
              <p className="px-2">{email}</p>
            </div>
            <div className="flex items-center mx-2">
              <span className="block text-sm text-gray-700 font-medium ">
                Phone Number:
              </span>
              <p className="px-2">{phone_number}</p>
            </div>
            <div className="flex items-center mx-2">
              <span className="block text-sm text-gray-700 font-medium ">
                Country:
              </span>
              <p className="px-2">{country}</p>
            </div>
            <div className="flex items-center mx-2">
              <span className="block text-sm text-gray-700 font-medium ">
                Number Of Passes:
              </span>
              <p className="px-2">{number_of_passes}</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center">
            {/* <div className="w-20 md:w-[120px] h-20 md:h-[120px] border-4 rounded-full flex items-center justify-center border-[#00A91B]">
              <FaCheck size={50} color="#00A91B" />
            </div> */}
            {/* <p className="font-semibold text-gray-800 text-2xl md:text-4xl my-4">
              Ticket payment successful 🥳
            </p> */}
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

export default VipPass;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Hero from "./contact.png";

const Contact = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  const [contactDetails, setContactDetails] = useState(initialValues);
  const { first_name, last_name, email, phone_number, message } =
    contactDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleContactForm = async () => {
    const url = `${apiURL}/contacts`;
    try {
      await axios.post(url, contactDetails).then((response) => {
        console.log(response, "response");
        // let virtualPass = JSON.stringify(response.data.newForm);
        // localStorage.setItem("virtual-delegate-pass-details", virtualPass);
        // setModal(true);
      });
    } catch (error) {
      console.error("Error in API call:", error);
    }
  };

  return (
    <>
      <div className="w-full">
        <img src={Hero} className="w-full" />
      </div>
      {/* form proper */}
      <div className="flex flex-col items-center justify-center my-10 p-4">
        <p className="font-primarySemibold text-[#471A52] text-4xl">
          Get in touch
        </p>
        <p className="font-primaryRegular text-xl text-gray-500">
          We’d love to hear from you. Please fill out this form.
        </p>
        <form
          className="w-full max-w-lg mt-10"
          onSubmit={handleSubmit(handleContactForm)}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                for="grid-first-name"
              >
                First name
              </label>
              <input
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                id="grid-first-name"
                type="text"
                placeholder="First name"
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                id="grid-last-name"
                type="text"
                placeholder="Last name"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                id="grid-password"
                type="email"
                placeholder="mail@gmail.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                for="grid-password"
              >
                Phone Number
              </label>
              <input
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                id="grid-password"
                type="number"
                placeholder="(250)1234567654321345"
                name="phone_number"
                value={phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
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
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                // placeholder="Write your thoughts here..."
                name="message"
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#471A52] text-white rounded-lg p-4 text-center font-primarySemibold"
          >
            Send message
          </button>
        </form>
      </div>
      {/* contact details */}
      <div className="w-full bg-[#471A52] p-4 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-around">
        <div className="flex flex-col">
          <p className="font-primarySemibold text-3xl">Our Contact Details</p>
          <p className="font-primaryRegular">Let's connect.</p>
        </div>
        <div className="flex flex-col">
          <p className="font-primarySemibold text-xl pt-6 md:pt-0">Telephone</p>
          <p className="font-primaryRegular text-white text-base">
            (+250) 792108551
          </p>
          <p className="font-primarySemibold text-xl mt-4">Whatsapp</p>
          <p className="font-primaryRegular text-white text-base">
            (+250) 792108551
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-primarySemibold text-xl pt-6 md:pt-0">Office</p>
          <p className="font-primaryRegular text-white text-base">
            Norrsken house Kigali, Rwanda
          </p>
          <p className="font-primarySemibold text-xl mt-4">Email</p>
          <p className="font-primaryRegular text-white text-base">
            support@silverspoonuniverse.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

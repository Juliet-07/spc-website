import React from "react";
import Hero from "./contact.png";

const Contact = () => {
  return (
    <>
      <div className="w-full">
        <img src={Hero} className="w-full" />
      </div>
      {/* form proper */}
      <div className="flex flex-col items-center justify-center my-10 p-4">
        <p className="font-semibold text-[#471A52] text-4xl">Get in touch</p>
        <p className="font-normal text-xl text-gray-500">
          We’d love to hear from you. Please fill out this form.
        </p>
        <form className="w-full max-w-lg mt-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-first-name"
              >
                First name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="mail@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
             <div className="w-full px-3">
            <label
              className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
              for="grid-password"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder="(250)1234567654321345"
            />
          </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
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
          <button className="w-full bg-[#471A52] text-white rounded-lg p-4 text-center font-semibold">Send message</button>
        </form>
      </div>
      {/* contact details */}
      <div className="w-full bg-[#471A52] p-4 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-around">
        <div className="flex flex-col">
          <p className="font-semibold text-3xl">Our Contact Details</p>
          <p>Let's connect.</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl pt-6 md:pt-0">Telephone</p>
          <p className="font-normal text-white text-base">(+250) 792108551</p>
          <p className="font-semibold text-xl mt-4">Whatsapp</p>
          <p className="font-normal text-white text-base">(+250) 792108551</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl pt-6 md:pt-0">Office</p>
          <p className="font-normal text-white text-base">Norrsken house Kigali, Rwanda</p>
          <p className="font-semibold text-xl mt-4">Email</p>
          <p className="font-normal text-white text-base">support@silverspoonuniverse.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import VideoComponent from "./VideoComponent";

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="mx-4 relative bg-white rounded-lg p-4">
            <div className="flex justify-end">
              <MdOutlineCancel
                size={30}
                color="black"
                className="cursor-pointer"
                onClick={handleCloseModal} // Close the modal on icon click
              />
            </div>
            <div className="w-full mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

const SqueezePage = () => {
  const [showSqueezePage, setShowSqueezePage] = useState(true); // State to control visibility

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend)
    // After submission, you may want to hide the squeeze page
    setShowSqueezePage(false);
  };

  return (
    <Modal>
      <div style={{ display: showSqueezePage ? "block" : "none" }}>
        <h2 className="font-primarySemibold text-center text-xl md:text-3xl">
          Unlock Exclusive Opportunities!
        </h2>
        <p className="font-primaryMedium text-center text-xs py-2">
          Join our community for access to investors, startup networks, and
          expert mentors.
        </p>
        <VideoComponent />

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label
              htmlFor="userName"
              className="block text-lg text-gray-800 font-primarySemibold "
            >
              Email
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none"
              name="email"
              // value={email}
              // onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 font-primaryMedium tracking-wide text-white transition-colors duration-200 transform bg-[#471A52] rounded-md"
            >
              Join community
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SqueezePage;

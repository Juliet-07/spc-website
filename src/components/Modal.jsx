// import React from "react";
// import { MdOutlineCancel } from "react-icons/md";

// const Modal = ({ isVisible, onClose, children }) => {
//   if (!isVisible) return null;

//   const handleClose = (e) => {
//     if (e.target.id === "wrapper") onClose();
//   };

//   return (
//     <div
//       id="wrapper"
//       className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
//       onClick={handleClose}
//     >
//       <div className="flex flex-col items-center justify-center">
//         <MdOutlineCancel
//           size={30}
//           color="white"
//           className="place-self-end cursor-pointer mb-2"
//           onClick={() => onClose()}
//         />
//         <div className="bg-white p-2 rounded">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
      onClick={handleClose}
    >
      {/* <div className="mx-4 sm:max-w-md lg:max-w-lg xl:max-w-[1000px] w-full  bg-white rounded-lg shadow-md p-4"> */}
      <div className="mx-4 sm:max-w-md lg:max-w-lg xl:max-w-[1000px] w-full relative bg-white rounded-lg p-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-end">
          <MdOutlineCancel
            size={30}
            color="black"
            className="cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
        <div className="w-full mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

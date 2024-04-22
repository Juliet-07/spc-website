import React from "react";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Investors = () => {
  const investors = [
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Nigeria",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Nigeria",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Nigeria",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "Donald Ressler",
      title: "Founder The Travel Agency",
      country: "New York",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "Raymond Reddington",
      title: "Federal Bureau of Investigation",
      country: "Seattle",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
    {
      name: "King David",
      title: "Founder & CEO SPC Universe",
      country: "Carlifornia",
      phone: "09068072378",
      email: "kingdavid@silverspoonuniverse.com",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {investors.map((investor) => (
          <div className="w-[330px] border border-gray-200 rounded-lg p-2 my-4 flex flex-col items-center">
            <div className="w-[302px] h-[192px] bg-[#D9D9D9] rounded-xl"></div>
            <div className="w-full my-2 px-3">
              <p className="text-gray-900 text-xl font-primarySemibold">
                {investor.name}
              </p>
              <p className="text-gray-500 text-sm">{investor.title}</p>
              <div className="border border-dashed border-gray-200 mt-2"></div>
              <div className="w-full flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <MdOutlineLocationOn
                    color="gray"
                    size={20}
                    className="mr-2"
                  />
                  <p className="text-sm text-gray-800 font-primaryRegular">
                    {investor.country}
                  </p>
                </div>
                <div className="flex items-center">
                  <FiPhone color="gray" size={20} className="mr-2" />
                  <p className="text-gray-800 font-primaryRegular text-sm">
                    {investor.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <MdOutlineMailOutline color="gray" size={20} className="mr-2" />
                <p className="text-gray-800 font-primaryRegular text-sm">
                  {investor.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Investors;

import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Rep from "../../assets/represent.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const MentorsNetwork = () => {
  const testimonials = [
    {
      image: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/talents.jpg"
          className="w-[100px] h-[100px] rounded-full"
        />
      ),
      name: "Jane Doe",
      title: "Talents",
      message:
        "Access to a pool of qualified talents from across the African Continent.",
      path: "/community/startup-network/talents",
    },
    {
      image: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investors.jpg"
          className="w-[100px] h-[100px] rounded-full"
        />
      ),
      name: "Jane Doe",
      title: "Mentors",
      message:
        "Access to a pool of well-known mentors who can guide you on different paths (Legal, sales & marketing, investment readiness, product, etc).",
    },
    {
      image: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/meet-up.jpg"
          className="w-[100px] h-[100px] rounded-full"
        />
      ),
      name: "Jane Doe",
      title: "Venture Accelerator",
      message: "Access to our mentor roundtable meetings.",
    },
    {
      image: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/investing.jpg"
          className="w-[100px] h-[100px] rounded-full"
        />
      ),
      name: "Jane Doe",
      title: "Investors",
      message:
        "Access to Angel Investors, Venture Capital Fund Managers, and Limited Partners (i.e. High Networth Individuals, Institutional LPs & Family Offices).",
    },
    {
      image: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/expand.jpg"
          className="w-[100px] h-[100px] rounded-full"
        />
      ),
      name: "Jane Doe",
      title: "Global Expansion",
      message:
        "Access to Global Expansion as a service without additional charges.",
    },
    {
      image: (
        <img
          src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/event.jpg"
          className="w-[100px] h-[100px] rounded-full"
        />
      ),
      name: "Jane Doe",
      title: "Events Discount",
      message:
        "Fair discount prices to events hosted by us directly and indirectly.",
    },
  ];
  return (
    <div className="w-full flex flex-col p-4 md:p-10">
      <Link
        to="/community"
        className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
      >
        <TbArrowBackUp color="#475467" />
        <span className="text-gray-600 mx-2">Back</span>
      </Link>
      <div className="w-full h-[552.62px] md:h-[478px] bg-gradient-to-r from-[#FCF1FF] via-[#FDF6FF] to-[#F0B5FF] border border-gray-200 rounded-xl my-4 flex flex-col md:flex-row items-center justify-evenly 2xl:justify-between p-4">
        <div className="w-[555px] h-[256px]">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <button>register</button>
        </div>
        <div>
          <img src={Rep} className="w-[571px] md:h-[430px] rounded-lg" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10 md:mt-20">
        <div className="font-primarySemibold text-3xl md:text-4xl text-[#471A52] uppercase text-center">
          Mentorship Programs & Systems
        </div>
        {/* <div className="w-[180px] md:w-[220px] h-1 my-1 bg-[#471A52]"></div> */}
        <p className="font-primaryThin text-center">ertyuioiuytretyuio</p>
        <div className="grid md:grid-cols-3 my-4 gap-4 md:gap-10">
          {testimonials.map((testimonial) => (
            <div className="w-full md:w-[400px] h-[340px] md:h-[378px] flex flex-col items-center bg-white border border-[#E9D7FE] shadow-xl shadow-[#F4EBFF] p-2">
              <div>{testimonial.image}</div>
              <p className="font-primarySemibold mt-3 md:text-xl">
                {testimonial.name}
              </p>
              <p className="font-primaryMedium pt-1 text-gray-500">
                {testimonial.title}
              </p>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#471A52] m-4">
                <RiDoubleQuotesL color="white" />
              </div>
              <p className="font-primaryRegular text-center px-4 text-sm">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsNetwork;

import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./events.css";
import VideoComponent from "../../components/VideoComponent";
import { GoArrowDownRight } from "react-icons/go";

const MomentsCarousel = () => {
  const images = [
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis1.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis2.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis3.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis4.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis5.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis6.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis7.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis8.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis9.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis10.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis11.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis12.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis13.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis14.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis15.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis16.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis17.jpg",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis18.jpg",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={`Moment ${index + 1}`} className="w-full" />
        </div>
      ))}
    </Slider>
  );
};

const PostEvents = () => {
  const navigate = useNavigate();
  const attendees = [
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/market.png" />
      ),
      title: "Global expansion accross markets",
      text: "Participants delved into leveraging digital technologies strategically to bolster Africa's Free Trade Zone. They uncovered cutting-edge trends, strategies, and innovations, propelling businesses and initiatives forward while exploring avenues for market expansion guided by industry experts.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/collaboration.png" />
      ),
      title: "Fostering collaboration",
      text: "Leaders in the digital innovation sphere, including entrepreneurs, investors, and industry stalwarts, united to nurture collaboration. They established invaluable connections, opening doors to novel partnerships and opportunities. Through shared insights and expertise, they tackled challenges head-on, driving innovation forward.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/opportunity.png" />
      ),
      title: "Softlanding Opportunities",
      text: " Engaging in insightful discussions and panels led by industry luminaries, attendees gained profound insights into how digital transformation drives and advocates for Africa's Free Trade Zone. They delved into soft landing opportunities and devised sustainable growth strategies in the digital age.",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/networking.png" />
      ),
      title: "Building Social Capital",
      text: "Active participation in interactive workshops equipped participants with practical skills and actionable strategies. Armed with tools and insights, they championed digital transformation within their organizations or sectors. Through networking and collaboration, they cultivated social capital, fostering professional growth and development.",
    },
  ];
  const speakers = [
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/KING DAVID.png",
      name: "King David",
      title: "Founder & CEO at SPC Universe",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/NDUKA UKPABI.png",
      name: "Nduka Ukpabi",
      title: "Founder & CEO at Pluralcode",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/FRANKLIN PETERS.png",
      name: "Franklin Peters",
      title: "Founder & CEO at BoundlessPay",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/KEVIN SIMMONS.png",
      name: "Kevin Simmons",
      title: "General Partner, Loftyinc Capital Management",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/mohammed.png",
      name: "Sadraoui Mohamed",
      title: "Directeur Cabinet Africa IT Innovation",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/VIVENS UWIZEYIMANA.png",
      name: "Vivens Uwizeyimana",
      title: "CEO Umurava",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/CHARMAINE HAYDEN.png",
      name: "Charmaine Hayden",
      title: "Founding Partner at Goodsoil VC",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/OYIN SOLEBO.png",
      name: "Oyin Selebo",
      title: "Managing Director, Techstars Lagos",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/GBOLADE OKEOWO.png",
      name: "Gbolade Okeowo",
      title: "Vice President, Kuramo Capital Management",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/WILLIAM SENYO.png",
      name: "William Senyo",
      title: "Co-founder and CEO of Impact Hub Accra",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/MAYA HORGAN FAMODU.png",
      name: "Maya Horgan Famodu",
      title: "Co-founder, Ingressive Capital",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/yakama.png",
      name: "Yakama Manty Jones",
      title: "Project Leader and Country Head, Delivery Associates",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/MAGED HARBY.png",
      name: "Maged Harby",
      title: "General Manager, EdVentures",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/EBENEZER GHANNEY.png",
      name: "Ebenezer Ghanney",
      title: "Founder & CEO, Wewire Africa",
    },
    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/YOUSSUF NTWALI.png",
      name: "Yussouf Ntwali",
      title: "CEO of Bag, Convener Startups in Rwanda",
    },

    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/GIAN-MARCO MELFI.png",
      name: "Gian-marco Melfi",
      title: "Investment Partner, Onebio Venture Studio",
    },

    {
      image:
        "https://spcimagestorage001.blob.core.windows.net/spc-events-image/ROHAN GOSWAMI.png",
      name: "Rohan Goswami",
      title: "Investment and Operations, Nexterra Capital",
    },
  ];

  const summits = [
    {
      initials: "EDIS",
      title: "Europe Digital Innovation Summit",
      month: "August",
    },
    {
      initials: "AID",
      title: "Africa Innovation Den",
      month: "October",
    },
    {
      initials: "DING",
      title: "Digital Innovators Networking Gateway",
      month: "December",
    },
  ];
  const sponsors = [
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/Oneliquidity.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/obiex.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/Consummate.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/boundlesspay.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/pluralcode.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/sportrex.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/manilla.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/Tekedia.png",
    },
    {
      url: "https://spcimagestorage001.blob.core.windows.net/spc-events-image/AltSchool.png",
    },
  ];

  return (
    <>
      <div
        className="w-full h-[500px] md:h-[850px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${"https://spcimagestorage001.blob.core.windows.net/spc-events-image/events-hero.jpg"})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0F0012]/85 z-[2]"></div>
        <div className="flex flex-col items-center md:items-start justify-center md:justify-normal relative z-[3] p-4 pt-[150px] md:pt-0">
          <div className="text-4xl md:text-7xl text-gray-300 font-primarySemibold py-2 text-center md:text-left">
            Africa Digital
            <br /> Innovation Summit
          </div>
          <p className="text-lg md:text-xl font-primaryRegular text-gray-200 my-2 md:my-4 text-center md:text-left">
            Promoting Africa Free Trade Zone using Digital Transformation.
          </p>

          <button className="flex items-center justify-center md:justify-around w-full md:w-[153px] h-[48px] text-[#471A52] md:text-white font-primarySemibold md:font-primaryMedium bg-white md:bg-[#471A52] rounded-lg">
            <span>Learn more</span>
            <GoArrowDownRight size={20} />
          </button>
        </div>
      </div>
      {/* Our Goals */}
      <div className="w-full p-4 md:p-10 2xl:px-20 my-6">
        <div className="font-primarySemibold text-xl md:text-3xl text-gray-900">
          Outcome & Highlights
        </div>
        <div className="w-[200px] h-1 md:w-[300px] md:h-2 bg-[#471A52]"></div>
        <div>
          <div className="w-full grid md:grid-cols-4 gap-10 mt-6">
            {attendees.map((attend) => (
              <div className="border border-[#471A52] md:w-[348.18px] rounded-xl flex flex-col items-center justify-center shadow-xl">
                <div className="w-[52.23px] h-[52.23px] my-2 md:my-4">
                  {attend.icon}
                </div>
                <p className="text-lg md:text-xl text-gray-900 font-primarySemibold">
                  {attend.title}
                </p>
                <p className="text-center p-2 md:p-4 text-sm text-gray-500 font-primaryRegular">
                  {attend.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*past speakers */}
      <div className="w-full bg-[#F4EBFF] flex flex-col md:items-center md:justify-center p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
          Past Speakers
        </div>
        <div className="w-[200px] md:w-[254px] h-1 md:h-2 bg-[#471A52] mt-2 mb-4"></div>
        <p className="font-primaryRegular md:text-lg text-gray-500 pb-4">
          We present you with a platform where you can learn and also share the
          best
        </p>
        {/* mobile view */}
        <div className="w-full my-4 px-4 md:hidden">
          <Slider
            // dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            fade={true} // Enable fade effect
            cssEase="linear" // Linear easing for smoother fades
            autoplay={true} // Enable autoplay
            autoplaySpeed={2000} // Set autoplay speed in milliseconds (e.g., 3000ms or 3s)
          >
            {speakers.map((speak) => (
              <div className="flex flex-col items-center justify-center h-[400px]">
                <div className="w-full h-full">
                  <img
                    src={speak.image}
                    alt={speak.name}
                    className="object-cover rounded w-full h-full"
                  />
                </div>
                <p className="text-lg md:text-xl text-gray-900 font-semibold">
                  {speak.name}
                </p>
                <p className="text-sm text-gray-500 font-normal">
                  {speak.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        {/* desktop view */}
        <div className="hidden w-full md:flex gap-4 overflow-x-auto">
          {speakers.map((speak) => (
            <div className="flex flex-col">
              <div className="w-[248.4px] h-[248.4px] my-2 rounded-xl bg-blue-300">
                <img
                  src={speak.image}
                  alt={speak.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-lg md:text-xl text-gray-900 font-primarySemibold">
                {speak.name}
              </p>
              <p className="text-sm text-gray-500 font-primaryRegular">
                {speak.title}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="font-semibold text-[#471A52] mt-10 flex items-center">
          See more{" "}
          <span>
            <FaArrowRight size={20} className="mx-2" />
          </span>
        </div> */}
      </div>

      {/* upcoming events */}
      {/* <div className="w-full flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <p className="font-semibold text-lg md:text-xl text-[#471A52] py-4">
          Upcoming events
        </p>
        <p className="font-semibold text-3xl md:text-4xl text-gray-900 mb-10 text-center">
          List of planned summit for 2024
        </p>
        <div className="w-full grid md:grid-cols-3 gap-4">
          {summits.map((summit) => (
            <div className="md:w-[417px] flex flex-col items-center justify-center border border-gray-200 bg-white shadow-md rounded-xl border-t-[20px] border-t-[#471A52] gap-6">
              <p className="font-semibold text-2xl md:text-3xl text-[#471A52] pt-4">
                {summit.initials}
              </p>
              <p className="font-normal md:text-xl text-gray-700">
                {summit.title}
              </p>
              <p className="font-semibold text-sm md:text-base text-[#471A52] pb-4">
                {summit.month}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      {/* sponsors */}
      <div className="hidden w-full md:flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <p className="font-primarySemibold text-2xl text-gray-500">
          Some past sponsors and partners
        </p>
        <div className="grid grid-cols-4 gap-10 my-6">
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/Oneliquidity.png"
            alt="OneLiquidity"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/obiex.png"
            alt="Obiex"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/Consummate.png"
            alt="Traders"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/boundlesspay.png"
            alt="Boundlesspay"
          />
        </div>
        <div className="grid grid-cols-5 gap-10 my-6">
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/pluralcode.png"
            alt="Pluralcode"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/sportrex.png"
            alt="Sportrex"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/manilla.png"
            alt="Manilla"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/Tekedia.png"
            alt="Tekedia"
          />
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/AltSchool.png"
            alt="Altschool"
          />
        </div>
      </div>
      {/* mobile view for sponsors */}
      <div className="w-full p-4 md:hidden">
        <p className="w-full text-center text-lg font-semibold text-gray-500">
          Some past sponsors and partners
        </p>
        <div className="my-6">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1} // Set the number of sponsors to show at a time
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            cssEase="linear"
          >
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center"
              >
                <img src={sponsor.url} alt={`Sponsor ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* moments */}
      <div className="w-full bg-white flex flex-col p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
          Moment captured from past events
        </div>
        <div className="md:w-[600px] h-2 bg-[#471A52] mt-2"></div>
        <div className="hidden md:grid grid-cols-4 my-6">
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis1.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis2.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis3.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis4.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis5.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis6.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis7.jpg" />
          <img src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/adis13.jpg" />
        </div>
        {/* Display carousel on smaller screens */}
        <div className="md:hidden mt-10">
          <MomentsCarousel />
        </div>
      </div>
    </>
  );
};

export default PostEvents;

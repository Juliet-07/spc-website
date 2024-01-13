import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MomentsCarousel = () => {
  const images = [
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment1.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment2.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment3.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment4.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment5.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment6.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment7.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment8.jpg",
    },
  ];

  const settings = {
    dots: true,
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

const Home = () => {
  const todos = [
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/icon-community.png" />
      ),
      title: "Community",
      text: "Cultivating the world's most collaborative hub for digital innovators to unite with like-minded visionaries, fostering synergy and exchanging shared expertise.",
      path: "/community",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/icon-events.png" />
      ),
      title: "Events",
      text: "Curate experiences that transcend borders, uniting innovators globally to inspire and learn.",
      path: "/events",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/icon-training.png" />
      ),
      title: "Trainings",
      text: "Empower individuals with cutting-edge skills and knowledge, breaking barriers for a limitless digital landscape",
      path: "/trainings",
    },
  ];
  return (
    <>
      <div className="w-full relative">
        <div className="text-white bg-[#471A52] px-4 md:px-10 2xl:px-20 2xl:py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col">
            <div className="pt-6 md:pt-0 md:w-[625px] text-center md:text-left">
              <h1 className="font-semibold text-3xl md:text-6xl text-center md:text-left">
                Building a Borderless World for digital innovators
              </h1>
              <p className="font-normal text-lg md:text-xl text-gray-300 py-4">
                Empowering digital visionaries with diverse infrastructures,
                forging a boundless future through transformative solutions for
                a limitless and innovative tomorrow
              </p>
            </div>
            <Link
              to="/about-spc"
              className="w-full md:w-[125px] h-10 text-[#471A52] font-semibold md:font-medium bg-white rounded-xl flex items-center justify-center"
            >
              Learn more
            </Link>
          </div>
          <div className="w-[390px] md:w-[500px]">
            <img
              src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/world.png"
              alt="Global Ecosystem"
              className="animated-image"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center absolute -bottom-4 md:-bottom-20 2xl:-bottom-14 px-3">
          <div className="w-full flex items-center justify-evenly md:mx-10 2xl:mx-20 bg-gray-800 text-white font-bold rounded-xl p-3">
            <div className="flex flex-col items-center justify-center md:p-4">
              <p className="text-xl md:text-5xl">25k +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Community members
              </p>
            </div>
            <div className="px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center md:p-4">
              <p className="text-xl md:text-5xl">45 +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Projects completed
              </p>
            </div>
            <div className="px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center md:p-4">
              <p className="text-xl md:text-5xl">50 +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Partnership secured
              </p>
            </div>
            <div className="px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center md:p-4">
              <p className="text-xl md:text-5xl">6</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Award winning
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* something for everyone */}
      <div className="w-full mt-10 md:mt-20 mb-10 pt-6 md:pt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Something for everyone
          </div>
          <p className="font-normal text-lg md:text-xl text-gray-500 text-center md:text-left px-4">
            Fueling a borderless world for digital innovators through our core
            pillars
          </p>
          <div className="w-full flex items-center justify-center">
            <div className="w-full grid md:grid-cols-3 gap-4 md:gap-10 p-4 md:px-10 2xl:px-20">
              {todos.map((todo) => (
                <div className="bg-[#6E2880] md:w-[400px] rounded-xl flex flex-col items-center justify-center">
                  <div className="w-[52px] h-[52px] bg-[#F4EBFF] rounded-full flex items-center justify-center my-4">
                    {todo.icon}
                  </div>
                  <p className="text-2xl text-gray-50">{todo.title}</p>
                  <p className="text-center p-2 text-gray-50">{todo.text}</p>
                  <NavLink
                    to={todo.path}
                    className="w-[300px] md:w-[348px] h-[44px] bg-[#471A52] rounded-lg my-4 text-white font-semibold flex items-center justify-center"
                  >
                    Explore
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* who we are */}
      <div className="w-full bg-[#F4EBFF] flex flex-col md:flex-row items-center justify-between p-4 md:p-10 2xl:px-20 my-6">
        <div className="md:w-[592px] rounded-lg flex flex-col">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Who we are
          </div>
          <div className="w-[254px] h-2 bg-[#471A52]"></div>
          <div className="text-2xl md:text-4xl font-medium text-gray-900 py-4">
            3+ years of providing innovative digital solutions
          </div>
          <p className="font-normal md:text-lg text-gray-700">
            SPC UNIVERSE is an eco-system building company on a mission to build
            a borderless world for digital innovators through community,
            training, and events.
            <br />
            <br /> Our solution revolves around fostering collaboration around
            digital innovative talents, entrepreneurs, investors and government
            players across borders.
          </p>
          <NavLink to="/about-spc">
            <div className="flex items-center my-4 text-[#471A52]">
              Read more
              <FaArrowRight className="mx-2" color="#471A52" />
            </div>
          </NavLink>
        </div>
        <div className="w-full md:w-[592px] rounded-lg">
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/whoWeAre.png"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      {/* upcoming events */}
      <div className="w-full bg-white flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <div className="font-semibold text-[#471A52] text-lg md:text-2xl py-2">
          Upcoming event
        </div>
        <div className="text-gray-900 text-lg md:text-5xl font-semibold">
          Africa Digital Innovation Summit
        </div>
        <div className="w-full rounded-2xl flex flex-col md:flex-row border my-6">
          <div className="md:w-[432.98px] 2xl:w-[50%]">
            <img
              src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/adis.png"
              alt="ADIS"
              className="rounded-xl md:h-full"
            />
          </div>
          <div className="flex flex-col p-4 md:w-[782.07px] 2xl:w-[50%]">
            <p className="text-lg text-[#471A52] font-semibold text-center">
              4 regions . 10+ countries . March 2024
            </p>
            <p className="font-semibold text-gray-900 md:text-3xl text-center md:text-left">
              Promoting The Africa Free Trade Zone using digital transformation.
            </p>
            <p className="text-gray-500 py-2 2xl:text-3xl">
              Join us at the Africa Digital Innovative Summit—an event dedicated
              to unlocking opportunities in the Africa Free Trade Zone through
              digital transformation. Explore cutting-edge strategies, engage
              with industry leaders, and discover how technology can propel
              economic growth and collaboration across the continent.
              <br />
              <br className="hidden 2xl:block" />
              Don't miss this chance to shape the future of trade in a digitally
              empowered Africa!
            </p>
            <div className="flex items-center text-sm font-semibold">
              <div className="w-full rounded-full bg-[#F9F5FF] text-center text-[#471A52] p-2 m-2">
                Global Networking
              </div>
              <div className="w-full rounded-full bg-indigo-50 text-center text-indigo-700 p-2 m-2">
                Soft landing
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* past events */}
      {/* moments */}
      <div className="w-full bg-white flex flex-col p-4 md:p-10 2xl:px-20">
        <div className="font-semibold text-3xl md:text-4xl text-gray-900">
          Moment captured from past events
        </div>
        <div className="md:w-[400px] h-2 bg-[#471A52] mt-2"></div>
        <div className="hidden md:grid grid-cols-4 my-6">
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment1.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment2.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment3.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment4.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment5.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment6.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment7.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/home-images/moment8.jpg" />
        </div>
        {/* Display carousel on smaller screens */}
        <div className="md:hidden mt-10">
          <MomentsCarousel />
        </div>
      </div>
      {/* read to explore */}
      <div className="w-full bg-white flex flex-col items-center justify-center my-0 md:my-20 p-4 md:p-10 2xl:px-20">
        <p className="font-semibold text-2xl md:text-4xl text-gray-900">
          Ready to explore?
        </p>
        <p className="text-lg md:text-xl font-normal text-gray-600 text-center">
          Through our various infrastructures, we are able to build on new
          transformative and digital solutions.
        </p>
        <Link
          to="/community"
          className="w-full md:w-[120px] bg-[#471A52] h-10 rounded-xl p-2 m-6 font-semibold text-white flex items-center justify-center"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Home;

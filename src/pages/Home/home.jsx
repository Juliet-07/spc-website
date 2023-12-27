import React from "react";
import World from "../../assets/world.png";
import ADIS from "../../assets/adis.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PIX1 from "./moment1.png";
import PIX2 from "./moment2.png";
import PIX3 from "./moment3.png";
import PIX4 from "./moment4.png";
import PIX5 from "./moment5.png";
import PIX6 from "./moment6.png";
import PIX7 from "./moment7.png";
import PIX8 from "./moment8.png";
// import "./home.css";

const Home = () => {
  const todos = [
    {
      icon: "icon",
      title: "Community",
      text: "Cultivating the world's most collaborative hub for digital innovators to unite with like-minded visionaries, fostering synergy and exchanging shared expertise.",
      path: "/community",
    },
    {
      icon: "icon",
      title: "Events",
      text: "Curate experiences that transcend borders, uniting innovators globally to inspire and learn.",
      path: "/events",
    },
    {
      icon: "icon",
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
            <button className="w-full md:w-[125px] h-10 text-[#471A52] font-semibold md:font-medium bg-white rounded-xl">
              Learn more
            </button>
          </div>
          <div className="w-[390px] md:w-[500px]">
            <img
              src={World}
              alt="Global Ecosystem"
              className="animated-image"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center absolute -bottom-4 md:-bottom-16 2xl:-bottom-10">
          <div className="w-full flex items-center justify-evenly md:mx-10 2xl:mx-20 bg-gray-800 text-white font-bold rounded-xl">
            <div className="flex flex-col items-center justify-center md:p-6">
              <p className="text-3xl md:text-6xl">25k +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300">
                Community members
              </p>
            </div>
            <div className="px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center md:p-6">
              <p className="text-3xl md:text-6xl">45 +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300">
                Projects completed
              </p>
            </div>
            <div className="px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center md:p-6">
              <p className="text-3xl md:text-6xl">50 +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300">
                Partnership secured
              </p>
            </div>
            <div className="px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center md:p-6">
              <p className="text-3xl md:text-6xl">6</p>
              <p className="font-normal text-xs md:text-xl text-gray-300">
                Award winning
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* something for everyone */}
      <div className="w-full mt-10 pt-6 md:pt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Something for everyone
          </div>
          <p className="font-normal text-lg md:text-xl text-gray-500 text-center md:text-left px-4">
            Fueling a borderless world for digital innovators through our core
            pillars
          </p>
          <div className="w-full flex items-center justify-center">
            <div className="w-full grid md:grid-cols-3 gap-10 p-4 md:px-10 2xl:px-20">
              {todos.map((todo) => (
                <div className="bg-[#6E2880] md:w-[400px] rounded-xl flex flex-col items-center justify-center">
                  <div className="w-[52px] h-[52px] bg-[#F4EBFF] rounded-full flex items-center justify-center my-4">
                    {todo.icon}
                  </div>
                  <p className="text-2xl text-gray-50">{todo.title}</p>
                  <p className="text-center p-2 text-gray-50">{todo.text}</p>
                  <NavLink
                    to={todo.path}
                    className="w-[348px] h-[44px] bg-[#471A52] rounded-lg my-4 text-white font-semibold flex items-center justify-center"
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
        <div className="md:w-[592px] h-[293px] md:h-[577px] bg-black rounded-lg">
          image
        </div>
      </div>
      {/* upcoming events */}
      <div className="w-full bg-white flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <div className="font-semibold text-[#471A52] text-lg md:text-2xl py-2">
          Upcoming event
        </div>
        <div className="text-gray-900 text-lg md:text-5xl font-semibold">
          Africa Digital Innovative Summit
        </div>
        <div className="w-full rounded-2xl flex flex-col md:flex-row border my-6">
          <div className="md:w-[432.98px] 2xl:w-[50%]">
            <img src={ADIS} alt="ADIS" className="rounded-xl h-full" />
          </div>
          <div className="flex flex-col p-4 md:w-[782.07px] 2xl:w-[50%]">
            <p className="text-lg text-[#471A52] font-semibold">
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
      {/* moments */}
      <div className="w-full bg-white flex flex-col p-4 md:p-10 2xl:px-20">
        <div className="font-semibold text-3xl md:text-4xl text-gray-900">
          Every moment captured
        </div>
        <div className="w-[254px] h-2 bg-[#471A52]"></div>
        <div className="grid grid-cols-4 my-6 h-[741px]">
          <div className="m-0 p-0">
            <img src={PIX1} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX2} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX3} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX4} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX5} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX6} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX7} className="m-0 p-0" />
          </div>
          <div className="m-0 p-0">
            <img src={PIX8} className="m-0 p-0" />
          </div>
        </div>
      </div>
      {/* read to explore */}
      <div className="w-full bg-white flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <p className="font-semibold text-2xl md:text-4xl text-gray-900">
          Ready to explore?
        </p>
        <p className="text-lg md:text-xl font-normal text-gray-600 text-center">
          Through our various infrastructures, we are able to build on new
          transformative and digital solutions.
        </p>
        <button className="w-full md:w-[120px] bg-[#471A52] h-10 rounded-xl p-2 m-6 font-semibold text-white">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Home;

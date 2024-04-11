import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from "../../assets/home.png"

const MomentsCarousel = () => {
  // const images = [
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment1.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment2.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment3.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment4.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment5.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment6.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment7.jpg",
  //   },
  //   {
  //     url: "https://spcimagestorage001.blob.core.windows.net/spc-home-images/moment8.jpg",
  //   },
  // ];

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
    dots: false,
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
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-home-images/community.png" />
      ),
      title: "Community",
      text: "Cultivating the world's most collaborative hub for digital innovators to unite with like-minded visionaries, fostering synergy and exchanging shared expertise.",
      path: "/community",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-home-images/events.png" />
      ),
      title: "Events",
      text: "Curate experiences that transcend borders, uniting innovators globally to inspire and learn.",
      path: "/events",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-home-images/trainings.png" />
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
              <h1 className="font-primaryMedium text-3xl md:text-6xl text-center md:text-left">
                Building a{" "}
                <span className="font-primaryBold">Borderless World</span> for
                digital innovators
              </h1>
              <p className="font-primaryRegular text-lg md:text-xl text-gray-300 py-3">
                Empowering digital visionaries with diverse infrastructures,
                forging a boundless future through transformative solutions for
                a limitless and innovative tomorrow
              </p>
            </div>
            <Link
              to="/about-spc"
              className="w-full md:w-[125px] h-[44px] text-[#471A52] font-primarySemibold md:font-medium bg-white rounded-xl flex items-center justify-center"
            >
              Learn more
            </Link>
          </div>
          <div className="w-[390px] md:w-[500px]">
            <img
              src="https://spcimagestorage001.blob.core.windows.net/spc-home-images/Landing page image.png"
              // src={LandingPage}
              alt="Global Ecosystem"
              className="animated-image"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center absolute -bottom-6 md:-bottom-10 px-3">
          <div className="w-full flex items-center justify-evenly mx-4 md:mx-10 2xl:mx-16 bg-gray-800 text-white font-bold rounded-xl p-2 font-primaryMedium">
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl md:text-4xl">25k +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Community members
              </p>
            </div>
            <div className="px-2 md:px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl md:text-4xl">45 +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Projects completed
              </p>
            </div>
            <div className="px-2 md:px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl md:text-4xl">50 +</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Partnership secured
              </p>
            </div>
            <div className="px-2 md:px-4 border border-gray-500 rotate-90"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl md:text-4xl">6</p>
              <p className="font-normal text-xs md:text-xl text-gray-300 px-2">
                Award winning
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* something for everyone */}
      <div className="w-full my-10 md:py-6">
        <div className="flex flex-col items-center justify-center">
          <div className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
            Something for everyone
          </div>
          <p className="font-primaryRegular text-lg md:text-xl text-gray-500 text-center md:text-left px-4">
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
                  <p className="text-2xl text-gray-50 font-primaryMedium">
                    {todo.title}
                  </p>
                  <p className="text-center p-2 text-gray-50 font-primaryRegular">
                    {todo.text}
                  </p>
                  <NavLink
                    to={todo.path}
                    className="w-[300px] md:w-[348px] h-[44px] bg-[#471A52] rounded-lg my-4 text-white font-primarySemibold flex items-center justify-center"
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
      <div className="w-full bg-[#F4EBFF] flex flex-col md:flex-row items-center justify-between p-4 md:p-10 2xl:px-20 my-4">
        <div className="md:w-[592px] rounded-lg flex flex-col">
          <div className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
            Who we are
          </div>
          <div className="w-[170px] md:w-[200px] h-2 bg-[#471A52]"></div>
          <div className="text-2xl md:text-4xl font-primaryMedium text-gray-900 py-4">
            4+ years of providing innovative digital solutions
          </div>
          <p className="font-primaryRegular md:text-lg text-gray-700">
            SPC UNIVERSE is an eco-system building company on a mission to build
            a borderless world for digital innovators through community,
            training, and events.
            <br />
            <br /> Our solution revolves around fostering collaboration around
            digital innovative talents, entrepreneurs, investors and government
            players across borders.
          </p>
          <NavLink to="/about-spc">
            <div className="flex items-center font-primaryRegular my-4 text-[#471A52]">
              Read more
              <FaArrowRight className="mx-2" color="#471A52" />
            </div>
          </NavLink>
        </div>
        <div className="w-full md:w-[592px] rounded-lg">
          <img
            src="https://spcimagestorage001.blob.core.windows.net/spc-home-images/whoWeAre.jpg"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      {/* upcoming events */}
      {/* <div className="w-full bg-white flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-[#471A52] text-lg md:text-2xl py-2">
          Upcoming event
        </div>
        <div className="text-gray-900 text-lg md:text-5xl font-primarySemibold">
          Africa Digital Innovation Summit
        </div>
        <div className="w-full rounded-2xl flex flex-col md:flex-row border my-6">
          <div className="md:w-[432.98px] 2xl:w-[50%]">
            <img
              src="https://spcimagestorage001.blob.core.windows.net/spc-home-images/adis.png"
              alt="ADIS"
              className="rounded-xl md:h-full"
            />
          </div>
          <div className="flex flex-col p-4 md:w-[782.07px] 2xl:w-[50%]">
            <p className="text-lg text-[#471A52] font-primarySemibold text-center">
              4 regions . 10+ countries . March 2024
            </p>
            <p className="font-primarySemibold text-gray-900 md:text-3xl text-center md:text-left">
              Promoting The Africa Free Trade Zone using digital transformation.
            </p>
            <p className="text-gray-500 py-2 2xl:text-3xl font-primaryRegular">
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
            <div className="flex items-center text-sm font-primarySemibold">
              <div className="w-full rounded-full bg-[#F9F5FF] text-center text-[#471A52] p-2 m-2">
                Global Networking
              </div>
              <div className="w-full rounded-full bg-indigo-50 text-center text-indigo-700 p-2 m-2">
                Soft landing
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* past events */}
      {/* <div className="w-full flex flex-col md:flex-row md:items-center p-4 md:p-10 2xl:px-20 my-4">
        <div>
          <div>
            {" "}
            <p className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
              Past Events
            </p>
            <div className="w-[170px] md:w-[200px] h-2 bg-[#471A52]"></div>
          </div>

          <div>cards</div>
        </div>
        
      </div> */}
      {/* moments */}
      <div className="w-full bg-white flex flex-col p-4 md:p-10 2xl:px-20">
        <div className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
          Moments captured from past events
        </div>
        <div className="w-full md:w-[600px] h-2 bg-[#471A52] mt-2"></div>
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
      {/* read to explore */}
      <div className="w-full bg-white flex flex-col items-center justify-center my-0 md:my-20 p-4 md:p-10 2xl:px-20">
        <p className="font-primarySemibold text-2xl md:text-4xl text-gray-900">
          Ready to explore?
        </p>
        <p className="w-full md:w-[768px] text-lg md:text-xl font-primaryRegular text-gray-600 text-center my-4">
          Through our various infrastructures, we are able to build on new
          transformative and digital solutions.
        </p>
        <Link
          to="/community"
          className="w-full md:w-[120px] bg-[#471A52] h-10 rounded-xl p-2 mt-4 font-primarySemibold text-white flex items-center justify-center"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Home;

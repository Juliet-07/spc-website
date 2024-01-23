import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./events.css";
import VideoComponent from "../../components/VideoComponent";

const MomentsCarousel = () => {
  const images = [
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment1.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment2.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment3.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment4.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment5.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment6.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment7.jpg",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment8.jpg",
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

const Events = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const attendees = [
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/market.png" />
      ),
      title: "Strategic Digital Insights",
      text: "Explore how digital technologies can be strategically leveraged to boost Africa's Free Trade Zone. Uncover the latest trends, strategies, and innovations that can propel your business or initiatives forward.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/collaboration.png" />
      ),
      title: "Fostering collaboration",
      text: "Connect with key players in the digital innovation space, including entrepreneurs, investors, and industry leaders. Forge valuable connections that can open doors to collaboration and new opportunities.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/opportunity.png" />
      ),
      title: "Insightful Discussions",
      text: " Engage in thought-provoking discussions and panels led by industry experts and visionaries. Gain deep insights into how digital transformation can drive and promote Africa's Free Trade Zone.",
    },
    {
      icon: (
        <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/networking.png" />
      ),
      title: "Collaborative Workshop",
      text: "Participate in interactive workshops designed to provide practical skills and actionable strategies. Acquire tools that you can apply to foster digital transformation within your organization or sector.",
    },
  ];
  const speakers = [
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/frank.png",
      name: "Franklin Peters",
      title: "Founder & CEO at BoundlessPay",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/hayden.png",
      name: "Charmaine Hayden",
      title: "Founding Partner at Goodsoil VC",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/david.png",
      name: "King David",
      title: "Founder & CEO at SPC Universe",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/janade_du_plessis.jpg",
      name: "Janade du Plessis",
      title: "Investment Banker/Co-founder at Launch Africa VC",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/yusuf_ade.jpeg",
      name: "Yusuf Adewale",
      title: "CEO at Altschool Africa",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/nduka.jpeg",
      name: "Nduka Ukpabi",
      title: "Founder & CEO at Pluralcode",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/rutherford.jpeg",
      name: "Rutherford Atayobo",
      title: "Founder & CEO Manilla Technologies",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/william.jpeg",
      name: "William Senyo",
      title: "Co-founder and CEO of Impact Hub Accra",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/vivens.jpg",
      name: "Vivens Uwizeyimana",
      title: "CEO Umurava",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/oyin.jpeg",
      name: "Oyin Selebo",
      title: "Managing Director, Techstars Lagos",
    },
  ];
  const delegatePass = [
    {
      discount: "40",
      price: "80",
      title: "Virtual delegate pass",
      reasons: [
        "Access to the live-streaming for ADIS across all countries",
        "6-months free membership with Africa Digital Innovation Community",
        "Certificate of participation at the end of the summit",
        "Chance to win an all expense paid ticket to the grand-finale",
      ],
    },
    {
      discount: "100",
      price: "200",
      title: "Country general delegate pass",
      reasons: [
        "Access to a physical event in any country of the delegates choice",
        "Access to the Live streaming for ADIS across all countries",
        "1-year free membership with Africa Digital Innovation Community",
        "Certificate of participation at the end of the summit",
      ],
    },
    {
      discount: "500",
      price: "1000",
      title: "country vip general delegate pass",
      reasons: [
        "All the benefits in the Country General Delegate Pass",
        "Access to VIP networking dinner in the country of delegates' choice",
        "Certificate of participation at the end of the summit",
      ],
    },
    {
      discount: "1000",
      price: "2000",
      title: "General all access pass",
      reasons: [
        "Access to all physical events in the four regions",
        "Access to the Live streaming for ADIS",
        "2-years free membership with ADIC",
        "Access to VIP networking dinner in all countries",
        "Certificate of participation at the end of the summit",
        "Access to the grand-finale & VIP Award Night",
      ],
    },
    {
      discount: "2000",
      price: "4000",
      title: "vip all access pass",
      reasons: [
        "All benefits in the General All Access Pass ",
        "Access to the investors forum and private meeting.",
        "3-days paid accommodation in Kigali for the grand-finale",
      ],
    },
  ];
  const partnerPackage = [
    {
      discount: "1500",
      price: "3000",
      title: "Exhibition Partner",
      reasons: [
        "Space to build and setup exhibition stand in any country/countries of choice",
        "Access to PCO, to guide you on different exhibition designs to use",
        "Logo on PR materials across the summit",
        "Access to talent hiring for on-ground personnel where exhibition will be showcased(this applies when partner can’t send their staff)",
      ],
    },
    {
      discount: "5000",
      price: "10000",
      title: "logo partner across the summit",
      reasons: [
        "Logo across all PR materials for the summit",
        "Media featuring across various media partners in the four regions of Africa",
        "Slot to feature brand in the Africa Digital Innovation Magazine",
        "Three delegates pass for the team to attend the physical events in the country of operation and grand-finale",
        "Slot to participate in a panel at the grand-finale",
      ],
    },
    {
      discount: "5000",
      price: "10000",
      title: "impact founder partnership",
      reasons: [
        "Slot to speak at region of operation and grand finale",
        "Access to investors forum and private meeting at the grand-finale",
        "Access to a 3-night accommodation plans at the grand-finale",
        "Feature among top 100 African founders in the Africa Digital Innovation Magazine",
        "Access to one year free soft-landing as a service consultancy",
      ],
    },
    {
      discount: "10000",
      price: "20000",
      title: "impact organization partnership",
      reasons: [
        "Access to all physical events in the four regions",
        "Access to the Live streaming for ADIS",
        "2-years free membership with Africa Digital Innovation Community",
        "Access to VIP networking dinner in all countries",
        "Certificate of participation at the end of the summit",
        "Access to the grand-finale + ADIS VIP AWARD NIGHT",
      ],
    },
    {
      discount: "25000",
      price: "50000",
      title: "global expansion partner (africa)",
      reasons: [
        "Exhibition space across countries where ADIS is happening.",
        "Award Presentation at the grand finale",
        "Feature CEO in Africa Digital Innovation Magazine",
        "Access to free softlanding service from SPC Universe post event",
        "3 all access pass for representatives in all events across the summit",
        "3-night paid accommodation for reps in Kigali for the grand-finale",
      ],
    },
    {
      discount: "50000",
      price: "100000",
      title: "global expansion partner (intl)",
      reasons: [
        "Exhibition space across countries where ADIS is happening.",
        "Award Presentation at the grand finale",
        "Feature CEO in Africa Digital Innovation Magazine",
        "Access to free softlanding service from SPC Universe post event",
        "3 all access pass for representatives in all events across the summit",
        "3-night paid accommodation for reps in Kigali for the grand-finale",
      ],
    },
  ];
  const pastSpeakers = [
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/frank.png",
      name: "Franklin Peters",
      title: "Founder & CEO at BoundlessPay",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/chris.jpg",
      name: "Dr. Chris Baryomunsi",
      title: "Minister of ICT & National Guidance, Uganda",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/yusuf_ade.jpeg",
      name: "Yusuf Adewale",
      title: "CEO at Altschool Africa",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/hayden.png",
      name: "Charmaine Hayden",
      title: "Founding Partner at Goodsoil VC",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/david.png",
      name: "King David",
      title: "Founder & CEO at SPC Universe",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/paula.jpg",
      name: "Paula Tavengar",
      title: "Investment Principal SwissBorg Ventures",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/yusuf.png",
      name: "Yussouf Ntwali",
      title: "CEO at BAG",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/kelechi.jpg",
      name: "Dr. Kelechi Okoro",
      title: "The Healthertainer",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/paul.jpg",
      name: "Paul Ezeafulukwe",
      title: "Co-founder, Mitroplus Labs, CBO Coinsher",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/kwame.jpeg",
      name: "Kwame AA Opoku",
      title: "Futurist, Web 3.0 Builder",
    },
    {
      image:
        "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/nduka.jpeg",
      name: "Nduka Ukpabi",
      title: "Founder & CEO at Pluralcode",
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
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/Oneliquidity%20svg.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/obiex.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/Consummate%20Traders%20svg.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/boundlesspay.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/pluralcode.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/sportrex.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/manilla.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/tekedia.png",
    },
    {
      url: "https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/altSchool.png",
    },
  ];
  useEffect(() => {
    const eventDate = new Date("March 1, 2024 00:00:00 GMT+0000").getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = eventDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  // Function to handle "View details" button click
  const handleViewDetails = (pass) => {
    // Navigate to the new page and pass the data through state
    console.log("handleViewDetails called with:", pass);
    navigate("/events/details", { state: { pass } });
  };

  const handleViewPartnerDetails = (pass) => {
    // Navigate to the new page and pass the data through state
    console.log("handleViewDetails called with:", pass);
    navigate("/events/partner-details", { state: { pass } });
  };

  return (
    <>
      <div
        className="hidden w-full h-[850px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${"https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/events-hero.png"})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#000000]/40 to-[#1E1E1E]/50 z-[2]"></div>
        <div className="flex flex-col relative z-[3]">
          <p className="text-xl text-gray-300 font-semibold py-2">
            Africa Digital Innovative Summit . March 2024
          </p>
          <p className="text-4xl font-semibold text-gray-200 w-[574px] mb-2">
            Promoting Africa Free Trade Zone using Digital Transformation.
          </p>
          <div className="w-[344px] grid grid-cols-4 gap-0 mb-4">
            <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
              <p className="text-2xl font-semibold text-white">
                {countdown.days}
              </p>
              <p className="text-xs font-normal text-gray-400">Days</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
              <p className="text-2xl font-semibold text-white">
                {countdown.hours}
              </p>
              <p className="text-xs font-normal text-gray-400">Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
              <p className="text-2xl font-semibold text-white">
                {countdown.minutes}
              </p>
              <p className="text-xs font-normal text-gray-400">Minutes</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
              <p className="text-2xl font-semibold text-white">
                {countdown.seconds}
              </p>
              <p className="text-xs font-normal text-gray-400">Seconds</p>
            </div>
          </div>
          <button className="w-full md:w-[105px] h-10 text-white font-semibold md:font-medium bg-[#471A52] rounded-lg">
            Get pass
          </button>
        </div>
      </div>
      {/* mobile hero */}
      <div className="w-full relative flex md:hidden">
        <div className="text-white bg-[#471A52] px-4 md:px-10 2xl:px-20 2xl:py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center py-4">
              <p className="text-xl text-gray-300 font-semibold py-2">
                Africa Digital Innovation Summit
              </p>
              {/* <p className="text-xl text-gray-300 font-semibold">
                March 2024
              </p> */}
              <p className="text-lg text-center font-semibold text-gray-200 mb-2">
                Promoting Africa Free Trade Zone using Digital Transformation.
              </p>
              <div className="w-[344px] grid grid-cols-4 gap-0 mb-4">
                <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
                  <p className="text-2xl font-semibold text-white">
                    {countdown.days}
                  </p>
                  <p className="text-xs font-normal text-gray-400">Days</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
                  <p className="text-2xl font-semibold text-white">
                    {countdown.hours}
                  </p>
                  <p className="text-xs font-normal text-gray-400">Hours</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
                  <p className="text-2xl font-semibold text-white">
                    {countdown.minutes}
                  </p>
                  <p className="text-xs font-normal text-gray-400">Minutes</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[77px] h-[77px] rounded-xl bg-gray-700">
                  <p className="text-2xl font-semibold text-white">
                    {countdown.seconds}
                  </p>
                  <p className="text-xs font-normal text-gray-400">Seconds</p>
                </div>
              </div>
              <button className="w-full h-[48px] text-[#471A52] font-semibold md:font-medium bg-white rounded-xl">
                Get Pass
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/events-hero.png"
              alt="ADIS"
            />
          </div>
        </div>
      </div>
      {/* why you should attend */}
      <div className="w-full flex flex-col md:flex-row justify-between p-4 md:p-10 2xl:px-20 my-6">
        <div className="flex flex-col md:w-[400px]">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Why you should attend
          </div>
          <div className="w-[254px] h-1 md:h-2 bg-[#471A52]"></div>
          <p className="font-normal md:text-lg text-gray-500 py-4">
            Join us at the Africa Digital Innovation Summit for an unparalleled
            experience that promises to shape the future of digital
            transformation on the continent. Here's why your attendance is
            crucial:
          </p>
          {/* <p className="font-normal md:text-lg text-gray-500 py-4">
            Get ready to make history with us by joining Africa’s largest and
            most collaborative summit for digital innovators. Foster
            collaborations, build social capital and access soft-landing
            opportunities by being a part of this revolutionary event.
          </p> */}
        </div>
        <div>
          <div className="w-full grid md:grid-cols-2 gap-10 md:px-10 2xl:px-20">
            {attendees.map((attend) => (
              <div className="border border-[#471A52] md:w-[348.18px] rounded-xl flex flex-col items-center justify-center shadow-xl">
                <div className="w-[52.23px] h-[52.23px] my-2 md:my-4">
                  {attend.icon}
                </div>
                <p className="text-lg md:text-xl text-gray-900 font-semibold">
                  {attend.title}
                </p>
                <p className="text-center p-2 md:p-4 text-sm text-gray-500 font-normal">
                  {attend.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* speakers */}
      <div className="w-full bg-[#F4EBFF] flex flex-col md:items-center md:justify-center p-4 md:p-10 2xl:px-20">
        <div className="font-semibold text-3xl md:text-4xl text-gray-900 font-[Exo2]">
          Learning from the best
        </div>
        <p className="font-normal md:text-lg text-gray-500">
          We present you with a platform where you can learn and also share the
          best
        </p>
        <div className="w-full my-4 px-4 md:hidden">
          <Slider
            dots={true}
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
        <div className="hidden w-full md:grid grid-cols-5 gap-10">
          {speakers.map((speak) => (
            <div className="flex flex-col">
              <div className="w-[248.4px] h-[248.4px] my-2">
                <img
                  src={speak.image}
                  alt={speak.name}
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <p className="text-lg md:text-xl text-gray-900 font-semibold">
                {speak.name}
              </p>
              <p className="text-sm text-gray-500 font-normal">{speak.title}</p>
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
      {/* seen enough and video divs */}
      <div className="w-full md:p-10 2xl:px-20">
        <div className="bg-[#471A52] flex flex-col items-center justify-center md:rounded-2xl p-4">
          <p className="font-semibold text-3xl md:text-4xl text-gray-50">
            Seen enough yet?
          </p>
          <p className="font-medium md:text-xl text-gray-200 p-2">
            ADIS . March 2024
          </p>
          <button className="w-full md:w-[101px] h-[44px] bg-gray-50 rounded-xl text-[#471A52] font-semibold">
            Get pass
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center p-4">
        <VideoComponent />
      </div>
      {/* Delegate pass and sponsorship */}
      <div className="w-full md:flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20 mt-6">
        <div className="font-semibold text-3xl md:text-4xl text-gray-900">
          Delegates pass and Sponsorship packages
        </div>
        <div className="w-[254px] h-2 bg-[#471A52] my-2"></div>
        <p className="font-normal text-lg text-orange-800">
          <b>NB:</b> All offers are on 50% discount till 15th of February, 2024
        </p>
        <p className="font-semibold text-2xl md:text-4xl text-[#471A52] mt-2 md:my-4">
          Delegates pass
        </p>
        <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-4 overflow-x-auto">
          {delegatePass.map((pass) => (
            <div
              // key={pass.title}
              className="w-full md:w-[400px] md:h-[600px] rounded-2xl bg-white border border-gray-200 shadow-lg flex flex-col items-center p-4 py-6 md:m-4"
            >
              <p className="font-semibold text-5xl text-gray-900">
                ${pass.discount}
              </p>
              <del className="font-semibold text-2xl text-gray-400 my-2">
                ${pass.price}
              </del>
              <p className="font-semibold uppercase text-gray-900 p-2">
                {pass.title}
              </p>
              <div className="flex-grow my-4 md:my-6">
                {pass.reasons.map((reason) => (
                  <div key={reason} className="flex items-center p-2">
                    <span className="w-[24px] h-[24px] rounded-full bg-[#FBEDFF] mx-3 flex items-center justify-center">
                      <IoMdCheckmark size={20} color="#471A52" />
                    </span>
                    <p className="text-gray-500 font-normal text-base">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleViewDetails(pass)}
                className="w-full h-[48px] bg-[#471A52] rounded-lg text-white font-semibold"
              >
                View details
              </button>
            </div>
          ))}
        </div>
        <p className="font-semibold text-2xl md:text-4xl text-[#471A52] mt-4 md:my-6">
          Sponsorship/Partnership packages
        </p>
        <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-4 overflow-x-auto">
          {partnerPackage.map((pass) => (
            <div
              // key={pass.title}
              className="md:w-[400px] h-[600px] rounded-2xl bg-white border border-gray-200 shadow-lg flex flex-col items-center p-4 py-6 m-4"
            >
              <p className="font-semibold text-5xl text-gray-900">
                ${pass.discount}
              </p>
              <del className="font-semibold text-2xl text-gray-400 my-2">
                ${pass.price}
              </del>
              <p className="font-semibold uppercase text-center text-gray-900">
                {pass.title}
              </p>
              <div className="flex-grow my-1">
                {pass.reasons.map((reason) => (
                  <div key={reason} className="flex items-center md:p-2">
                    <span className="w-[24px] h-[24px] rounded-full bg-[#FBEDFF] mx-3 flex items-center justify-center">
                      <IoMdCheckmark size={20} color="#471A52" />
                    </span>
                    <p className="text-gray-500 font-normal text-base">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleViewPartnerDetails(pass)}
                className="w-full h-[48px] bg-[#471A52] rounded-lg text-white font-semibold"
              >
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* mobile view for delegate passes */}
      <div></div>
      {/* upcoming events */}
      <div className="w-full flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
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
      </div>
      {/* past speakers */}
      <div className="w-full flex flex-col md:items-center md:justify-center p-4 md:p-10 2xl:px-20 bg-[#F4EBFF]">
        <div className="font-semibold text-3xl md:text-4xl text-gray-900">
          Some speakers from past events
        </div>
        <div className="w-[254px] h-2 bg-[#471A52] mt-2 mb-4"></div>
        <div className="w-full flex gap-4 overflow-x-auto">
          {pastSpeakers.map((speaker) => (
            <div>
              <div className="w-[296px] h-[296px]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>
              <p className="font-semibold text-lg md:text-xl text-gray-900 mt-2">
                {speaker.name}
              </p>
              <p className="font-normal text-gray-500">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* sponsors */}
      <div className="hidden w-full md:flex flex-col items-center justify-center p-4 md:p-10 2xl:px-20">
        <p className="font-semibold text-2xl text-gray-500">
          Some past sponsors and partners
        </p>
        <div className="grid grid-cols-4 gap-10 my-6">
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/Oneliquidity%20svg.png"
            alt="OneLiquidity"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/obiex.png"
            alt="Obiex"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/Consummate%20Traders%20svg.png"
            alt="Traders"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/boundlesspay.png"
            alt="Boundlesspay"
          />
        </div>
        <div className="grid grid-cols-5 gap-10 my-6">
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/pluralcode.png"
            alt="Pluralcode"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/sportrex.png"
            alt="Sportrex"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/manilla.png"
            alt="Manilla"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/tekedia.png"
            alt="Tekedia"
          />
          <img
            src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/altSchool.png"
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
        <div className="font-semibold text-3xl md:text-4xl text-gray-900">
          Moment captured from past events
        </div>
        <div className="md:w-[400px] h-2 bg-[#471A52] mt-2"></div>
        <div className="hidden md:grid grid-cols-4 my-6">
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment1.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment2.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment3.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment4.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment5.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment6.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment7.jpg" />
          <img src="https://spc-space.ams3.cdn.digitaloceanspaces.com/events-images/moment8.jpg" />
        </div>
        {/* Display carousel on smaller screens */}
        <div className="md:hidden mt-10">
          <MomentsCarousel />
        </div>
      </div>
      <div className="w-full md:p-10 2xl:px-20 mt-10">
        <div className="bg-[#471A52] flex flex-col items-center justify-center md:rounded-2xl p-4">
          <p className="font-semibold text-3xl md:text-4xl text-gray-50">
            Sure I am ready to be a part
          </p>
          <p className="font-medium md:text-xl text-gray-200 p-2">
            ADIS . March 2024
          </p>
          <button className="w-full md:w-[101px] h-[44px] bg-gray-50 rounded-xl text-[#471A52] font-semibold">
            Get pass
          </button>
        </div>
      </div>
    </>
  );
};

export default Events;

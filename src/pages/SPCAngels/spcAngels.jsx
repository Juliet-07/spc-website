import React from "react";
import Angel from "../../assets/angelInvestorBG.png";
import MobileAngel from "../../assets/mobileInvestorBG.png";
import Identification from "../../assets/user-identification.png";
import Investment from "../../assets/investment.png";
import Support from "../../assets/users-line.png";
import Network from "../../assets/networkVector.png";
import Approach from "../../assets/approachImage.png";
import ApproachMobile from "../../assets/approachImage.jpg";
import EarlyStage from "../../assets/earlyStage.jpg";
import Growth from "../../assets/capitalGrowth.png";
import Guidance from "../../assets/expertGuidance.jpg";
import Access from "../../assets/networkAccess.jpg";
import Catalyst from "../../assets/catalyst.jpg";

const SPCAngels = () => {
  const approaches = [
    {
      icon: <img src={Identification} />,
      title: "Identification",
      message:
        "We actively seek promising early stage startups with innovative ideas and passionate founders.",
    },
    {
      icon: <img src={Investment} />,
      title: "Investment",
      message:
        "We provide the first cheque to selected startups, giving them the financial support they need to launch and grow their businesses",
    },
    {
      icon: <img src={Support} />,
      title: "Support",
      message:
        "We offer hands-on support and mentorship to help founders navigate the challenges of building a successful startup",
    },
    {
      icon: <img src={Network} />,
      title: "Network",
      message:
        "We leverage our network of industry connections and partners to open doors for our portfolio companies and help them scale.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div
        className="hidden w-full h-[400px] md:h-[500px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${Angel})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#150C17]/50 z-[2]"></div>
        <div className="w-full h-full flex justify-between z-[3]">
          <div className="w-[518px] grid py-10">
            <div className="text-[#E1E3E8] font-primarySemibold text-4xl">
              Investing and providing the first cheque for Africa’s earliest stage
              founders through our venture studio.
            </div>
            <p className="text-[#F3F5F8] text-xl my-4 font-primaryRegular">
              SPC Universe fuels innovation and entrepreneurship in Africa,
              dedicated to helping early-stage founders overcome challenges and
              succeed.
            </p>
            <div className="w-[207px] h-[44px] bg-[#471A52] rounded flex items-center justify-center text-white font-primaryMedium">
              Register as an Angel
            </div>
          </div>
          <div className="text-white"></div>
        </div>
      </div>
      {/* Mobile Hero Section */}
      <div
        className="md:hidden w-full h-[700px] relative bg-cover flex items-center"
        style={{
          backgroundImage: `url(${MobileAngel})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#150C17]/50 z-[2]"></div>
        <div className="w-full h-full flex flex-col-reverse items-center justify-between z-[3]">
          <div className="w-[288px] grid gap-4 py-4">
            <div className="text-[#E1E3E8] font-primarySemibold text-xl">
              Investing and Providing the First Cheque for Africa’s early Stage
              Founders Through our Venture
            </div>
            <p className="text-[#F3F5F8] my-4 font-primaryRegular">
              SPC Universe fuels innovation and entrepreneurship in Africa,
              dedicated to helping early-stage founders overcome challenges and
              succeed.
            </p>
            <div className="w-[207px] h-[44px] bg-[#471A52] rounded flex items-center justify-center text-white font-primaryMedium">
              Register as an investor
            </div>
          </div>
          <div className="text-white"></div>
        </div>
      </div>
      {/* Our Approach */}
      <div className="w-full flex flex-col items-center justify-center my-10 md:my-6">
        <div className="text-black text-xl md:text-2xl font-primarySemibold">
          Our Approach
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between p-4 md:py-4 md:px-10">
          <div className="md:w-[549px] ">
            <div className="grid gap-4">
              {approaches.map((approach) => (
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#471A52]/[12%]">
                      {approach.icon}
                    </div>
                    <div className="mx-4 font-primarySemibold text-lg md:text-2xl">
                      {approach.title}
                    </div>
                  </div>
                  <div className="my-4 font-primaryRegular md:text-lg">
                    {approach.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block md:w-[574px] md:h-[650px] my-4 md:my-0">
            <img src={Approach} className="h-full rounded-xl" />
          </div>
          <div className="block md:hidden md:w-[574px] md:h-[650px] my-4 md:my-0">
            <img src={ApproachMobile} className="h-full rounded-xl" />
          </div>
        </div>
      </div>
      {/* how it works */}
      <div className="w-full p-4 md:p-10">
        <p className="md:w-[835px] text-xl md:text-2xl leading-10 font-primarySemibold text-gray-900">
          Discover how angel investors help turn startup dreams into reality
          with critical funding
        </p>
        <div className="w-full grid grid-cols-1 gap-10 md:gap-20 my-10">
          {/* 1 */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div>
              <img
                src={EarlyStage}
                className="w-[284px] h-[205px] md:w-[312px] md:h-[244px]"
              />
            </div>
            <div className="md:w-[722px] flex flex-col items-center justify-center md:items-start md:mx-4 md:px-4">
              <div className="font-primarySemibold text-2xl text-gray-900 border-l border-l-[#9D1A88] p-2 m-2 my-4">
                Early-Stage Funding:
              </div>
              <p className="font-primaryRegular md:text-xl leading-8">
                Silverspoon Angels specialize in providing early-stage funding to
                startups when they need it most. Our angel investors understand
                the challenges that founders face in securing capital at the
                outset of their entrepreneurial journey, and they're committed
                to providing the financial resources needed to get startups off
                the ground.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div>
              <img
                src={Growth}
                className="w-[284px] h-[205px] md:w-[312px] md:h-[244px]"
              />
            </div>
            <div className="md:w-[722px] flex flex-col items-center justify-center md:items-start md:mx-4 md:px-4">
              <div className="font-primarySemibold text-2xl text-gray-900 border-l border-l-[#9D1A88] p-2 m-2 my-4">
                Seed Capital for Growth:
              </div>
              <p className="font-primaryRegular md:text-xl leading-8">
                The first cheque from our angel investors serves as the first capital
                for startups to fuel their growth and development. Whether it's
                building a prototype, hiring key team members, or launching a
                marketing campaign, this initial funding is essential for laying
                the foundation for success.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div>
              <img
                src={Guidance}
                className="w-[284px] h-[205px] md:w-[312px] md:h-[244px]"
              />
            </div>
            <div className="md:w-[722px] flex flex-col items-center justify-center md:items-start md:mx-4 md:px-4">
              <div className="font-primarySemibold text-2xl text-gray-900 border-l border-l-[#9D1A88] p-2 m-2 my-4">
                Expert Guidance and Mentorship:
              </div>
              <p className="font-primaryRegular md:text-xl leading-8">
                Many of our investors are seasoned entrepreneurs or industry
                experts with a wealth of knowledge to share. They provide
                guidance on strategic decision-making, offer advice on
                overcoming challenges, and act as mentors and sounding boards
                for founders.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div>
              <img
                src={Access}
                className="w-[284px] h-[205px] md:w-[312px] md:h-[244px]"
              />
            </div>
            <div className="md:w-[722px] flex flex-col items-center justify-center md:items-start md:mx-4 md:px-4">
              <div className="font-primarySemibold text-2xl text-gray-900 border-l border-l-[#9D1A88] p-2 m-2 my-4">
                Access to Networks:
              </div>
              <p className="font-primaryRegular md:text-xl leading-8">
                Our angel investors have extensive networks of contacts in the
                business world, including other investors, potential customers,
                and industry influencers. They leverage these networks to open
                doors for startups, forge strategic partnerships, and unlock new
                opportunities for growth and expansion.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div>
              <img
                src={Catalyst}
                className="w-[284px] h-[205px] md:w-[312px] md:h-[244px]"
              />
            </div>
            <div className="md:w-[722px] flex flex-col items-center justify-center md:items-start md:mx-4 md:px-4">
              <div className="font-primarySemibold text-2xl text-gray-900 border-l border-l-[#9D1A88] p-2 m-2 my-4">
                Catalyst For Success:
              </div>
              <p className="font-primaryRegular md:text-xl leading-8">
                Securing investment from angel investors boosts startup success.
                It signals credibility and attracts more funding talent,
                partnerships to propel growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* join us */}
      <div className="w-full flex items-center justify-center my-6">
        <div className="w-[300px] h-[165px] md:w-[731px] md:h-[270px] rounded-tr-2xl rounded-l-full bg-[#150C17] flex flex-col items-center justify-center">
          <p className="font-primarySemibold text-sm md:text-2xl text-white">
            To Join Our Syndicate Send Us a Mail
          </p>
          <p className="underline text-[#9F3AB8] md:text-xl font-primaryRegular py-4">
            partnership@silverspoonuniverse.com
          </p>
        </div>
      </div>
    </>
  );
};

export default SPCAngels;

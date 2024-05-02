import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Mentors from "../../assets/fueling.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import Mentor1 from "../../assets/mentor1.png";
import Mentor2 from "../../assets/mentor2.png";
import Mentor3 from "../../assets/mentor3.png";
import Woman from "../../assets/woman.png";
import Man from "../../assets/man.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../../components/Modal";
import Mentoring from "../../assets/mentoring.png";
import MobileMentoring from "../../assets/mobileMentoring.png";
import Community from "../../assets/community.png";
import Guidance from "../../assets/tailoredGuidance.jpg";
import Opportunities from "../../assets/networkOpportunities.jpg";
import Seasoned from "../../assets/seasonedWisdom.jpg";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: <img src={Woman} />,
      name: "Leslie Alex",
      title: "CEO, iStock Global",
      message:
        "I was able to acquire the best talents on this platform.I will say I have the best team so far",
    },
    {
      image: <img src={Man} className="w-[100px] h-[100px] rounded-full" />,
      name: "Lee Thompson",
      title: "Venture Capitalist",
      message:
        "I was able to acquire the best talents on this platform.I will say I have the best team so far",
    },
    {
      image: <img src={Woman} />,
      name: "Leslie Alex",
      title: "CEO, iStock Global",
      message:
        "I was able to acquire the best talents on this platform.I will say I have the best team so far",
    },
    {
      image: <img src={Man} className="w-[100px] h-[100px] rounded-full" />,
      name: "Lee Thompson",
      title: "Venture Capitalist",
      message:
        "I was able to acquire the best talents on this platform. I will say I have the best team so far",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two testimonial cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for tablet view
        settings: {
          slidesToShow: 1, // Show one testimonial card at a time on tablet
        },
      },
      {
        breakpoint: 480, // Adjust breakpoint for mobile view
        settings: {
          slidesToShow: 1, // Show one testimonial card at a time on mobile
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mb-4">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="w-full">
          {/* <div className="md:w-[calc(50% - 20px)] flex flex-col items-center bg-red-500 rounded-3xl py-2 mx-2"> */}
          <div className="md:w-[519px] 2xl:w-[calc(50% - 20px)] flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl py-4">
            {" "}
            {/* Adjust width for two cards */}
            <div className="w-full flex items-center justify-between">
              <div className="w-[150px] md:w-[185px] h-[130px] md:h-[166px] flex items-center justify-center bg-[#471A52] rounded-r-full">
                {testimonial.image}
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-primarySemibold mt-3 md:text-xl">
                  {testimonial.name}
                </p>
                <p className="font-primaryMedium pt-1 text-gray-500">
                  {testimonial.title}
                </p>
                <p>stars</p>
              </div>
              <div className="w-10 md:w-[60px] h-10 md:h-[60px] flex items-center justify-center rounded-full bg-[#D9D9D9] m-4">
                <RiDoubleQuotesL color="#471A52" size={20} />
              </div>
            </div>
            <div className="w-[376px] font-primaryRegular text-center text-[#746F6F] p-2">
              {testimonial.message}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const MentorsNetwork = () => {
  const [modal, setModal] = useState(false);

  const mentors = [
    {
      image: <img src={Mentor1} />,
      name: "Lana Stalk",
      title: "Founder of SSO",
    },
    {
      image: <img src={Mentor2} />,
      name: "Lana Stalk",
      title: "Founder of SSO",
    },
    {
      image: <img src={Mentor3} />,
      name: "Lana Stalk",
      title: "Founder of SSO",
    },
  ];

  const handleModal = () => {
    setModal(true);
  };
  return (
    <>
      {/* Fueling Growth */}
      <div className="w-full flex flex-col p-4 md:p-10">
        <Link
          to="/community"
          className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
        >
          <TbArrowBackUp color="#475467" />
          <span className="text-gray-600 mx-2">Back</span>
        </Link>
        <div className="w-full h-[550px] md:h-[500px] bg-gradient-to-r from-[#FCF1FF] via-[#FDF6FF] to-[#F0B5FF] border border-gray-200 rounded-xl my-4 flex flex-col p-4">
          <div className="font-primarySemibold text-gray-900 text-2xl md:text-4xl">
            Mentorship: Fueling Growth
          </div>
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-[555px] h-full">
              <p className="font-primaryRegular md:text-xl text-gray-700 py-3 leading-8 md:leading-[60px]">
                We understand the unique challenges and opportunities that come
                with building and scaling a startup. Our platform is dedicated
                to helping you navigate the exciting yet complex journey of
                startup growth through mentorship, guidance, and support.
              </p>
            </div>
            <div>
              <img src={Mentors} className="w-[571px] rounded-lg" />
            </div>
          </div>
          {/* <button
              onClick={() => handleModal()}
              className="w-[115px] h-[44px] rounded-lg bg-[#471A52] mt-3 md:mt-6 text-white font-primaryMedium"
            >
              Register
            </button> */}
        </div>
      </div>
      {/* mentorship background */}
      <div
        className="hideen w-full md:h-[550px] 2xl:h-[800px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center my-6"
        style={{
          backgroundImage: `url(${Mentoring})`,
        }}
      ></div>
      <div
        className="flex items-center md:hidden w-full h-[745px] relative bg-cover md:px-10 2xl:px-20 my-6"
        style={{
          backgroundImage: `url(${MobileMentoring})`,
        }}
      ></div>
      {/* vibrant hub */}
      <div className="w-full bg-[#F0B5FF]/[12%] p-4 md:p-10">
        <p className="md:w-[835px] text-xl md:text-2xl leading-10 font-primarySemibold text-gray-900">
          SPC platform connects aspiring startup founders with experienced
          mentors who offer invaluable insights, advice, and support to help
          navigate the complexities of building a successful venture.
        </p>
        <div className="w-full grid grid-cols-1 gap-10 md:gap-20 my-10">
          {/* 1 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div>
              <img
                src={Seasoned}
                className="md:w-[635px] md:h-[442.94px] rounded-xl"
              />
            </div>
            <div className="md:w-[516px] h-full flex flex-col items-center  my-4 md:my-0">
              <p className="font-primarySemibold text-2xl text-gray-900">
                Seasoned Wisdom
              </p>
              <p className="font-primaryRegular md:text-xl leading-8 md:leading-[55px]">
                Our mentor network comprises seasoned entrepreneurs, industry
                veterans, and subject matter experts with years of hands-on
                experience in the startup ecosystem. From serial entrepreneurs
                who have launched and scaled multiple ventures to industry
                leaders at the forefront of innovation, our mentors bring a
                wealth of knowledge, wisdom, and perspective to the table.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-[516px] h-full flex flex-col items-center my-4 md:my-0">
              <p className="font-primarySemibold text-2xl text-gray-900">
                Tailored Guidance
              </p>
              <p className="font-primaryRegular md:text-xl leading-8 md:leading-[55px]">
                No two startup journeys are alike, which is why our mentorship
                program is highly personalized and tailored to the unique needs
                and challenges of each founder. Whether you're grappling with
                strategic decisions, facing roadblocks in product development,
                or navigating the intricacies of fundraising, our mentors
                provide tailored guidance and support to help you overcome
                obstacles and achieve your goals.
              </p>
            </div>
            <div>
              <img
                src={Guidance}
                className="md:w-[635px] md:h-[442.94px] rounded-xl"
              />
            </div>
          </div>
          {/* 3 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div>
              <img src={Community} />
            </div>
            <div className="md:w-[516px] h-full flex flex-col items-center my-4 md:my-0">
              <p className="font-primarySemibold text-2xl text-gray-900">
                Inspirational Support
              </p>
              <p className="font-primaryRegular md:text-xl leading-8 md:leading-[55px]">
                Building a startup is not just about overcoming challenges; it's
                also about staying motivated and inspired in the face of
                adversity. Our mentors serve as trusted confidants and sources
                of inspiration, offering encouragement, motivation, and
                reassurance during the inevitable ups and downs of the
                entrepreneurial journey. With their unwavering support and
                belief in your vision, you'll find the courage and resilience to
                persevere through even the toughest of times.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-[516px] h-full flex flex-col items-center my-4 md:my-0">
              <p className="font-primarySemibold text-2xl text-gray-900">
                Network Opportunities
              </p>
              <p className="font-primaryRegular md:text-xl leading-8 md:leading-[55px]">
                Beyond their role as mentors, our network of experienced
                professionals also serves as invaluable connectors, opening
                doors to new opportunities, partnerships, and collaborations.
                Whether it's introductions to potential investors, strategic
                partners, or industry influencers, our mentors leverage their
                extensive networks to help founders expand their reach and
                accelerate their growth.
              </p>
            </div>
            <div>
              <img
                src={Opportunities}
                className="md:w-[635px] md:h-[442.94px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* mentor team */}
      {/* <div className="w-full flex flex-col p-4 md:p-10">
        <div className="md:w-[563px] text-xl md:text-3xl font-primarySemibold">
          Meet our Creative Team of Mentors and World-Class Problem Solvers
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid md:grid-cols-3 gap-10 my-10">
            {mentors.map((mentor) => (
              <div className="flex flex-col items-center justify-center">
                <div>{mentor.image}</div>
                <p className="text-xl font-primarySemibold">{mentor.name}</p>
                <p className="font-primaryRegular text-gray-900 italic">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* join the community */}
      <div className="w-full flex flex-col p-4 md:p-10 my-4">
        <div className="font-primarySemibold text-gray-900 text-2xl md:text-3xl text-center md:text-left">
          <font color="#BE33E0">Join The</font> Mentorship Community
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-[469px] md:h-[436px] md:text-xl py-4">
            <p className="font-primaryRegular leading-8 md:leading-[50px]">
              Join the SPC Universe mentorship community today and gain access
              to a wealth of knowledge, experience, and support. Whether you're
              a first-time founder seeking guidance or a seasoned entrepreneur
              looking to give back, your mentorship journey starts here.
              Together, let's build a brighter future, one mentorship at a time.
            </p>
            <button
              onClick={() => handleModal()}
              className="w-[115px] h-[44px] rounded-lg bg-[#471A52] mt-3 md:mt-6 text-white font-primaryMedium"
            >
              Join now
            </button>
          </div>
          <div>
            <img src={Community} />
          </div>
        </div>
      </div>
      {/* testimonials */}
      {/* <div className="bg-[#D9D9D9] py-2 md:py-4 px-2 md:px-6">
        <div className="w-full flex flex-col items-center justify-center my-10">
          <p className="font-primaryRegular text-xl text-[#000000]">
            Testimonial
          </p>
          <div className="font-primarySemibold text-2xl md:text-4xl py-2">
            What Our <font color="#BE33E0">Clients Say</font>
          </div>
        </div>
        <div className="pb-10">
          <TestimonialCarousel />
        </div>
      </div> */}
      <Modal isVisible={modal} onClose={() => setModal(false)}>
        <div className="flex flex-col items-center justify-center">
          <StartupForm />
        </div>
      </Modal>
    </>
  );
};

const StartupForm = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [file, setFile] = useState({});
  const [filePreview, setFilePreview] = useState("");
  const initialValues = {
    company_name: "",
    company_email: "",
    company_size: "",
    location: "",
    country: "",
    brief_description: "",
    company_phone: "",
    company_person_name: "",
    company_person_title: "",
    company_person_whatsapp_number: "",
    company_stage: "",
    membership_fee: "",
  };

  const [startupMembership, setStartupMembership] = useState(initialValues);

  const {
    company_name,
    company_email,
    company_size,
    location,
    country,
    brief_description,
    company_image,
    company_phone,
    company_person_name,
    company_person_title,
    company_person_whatsapp_number,
    company_stage,
    membership_fee,
  } = startupMembership;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStartupMembership({ ...startupMembership, [name]: value });
  };

  const fileUploadHandler = (e) => {
    console.log(e.target.files);
    const docx = e.target.files[0];
    console.log(docx.name);
    setFile(docx);
    setFilePreview(URL.createObjectURL(docx));
  };

  const handleConfirmRegistration = () => {
    const url = `${apiURL}/member-startup`;

    const formData = new FormData();

    formData.append("company_name", company_name);
    formData.append("company_email", company_email);
    formData.append("company_size", company_size);
    formData.append("location", location);
    formData.append("country", country);
    formData.append("brief_description", brief_description);
    formData.append("company_image", file);
    formData.append("company_phone", company_phone);
    formData.append("company_person_name", company_person_name);
    formData.append("company_person_title", company_person_title);
    formData.append(
      "company_person_whatsapp_number",
      company_person_whatsapp_number
    );
    formData.append("company_stage", company_stage);
    formData.append("membership_fee", membership_fee);

    axios
      .post(url, formData)
      .then((response) => {
        console.log(response.data, "response from startup reg.");
        navigate("/thankYou");
      })
      .catch((error) => {
        // Handle error responses here
        console.error("Error:", error);
      });
  };
  return (
    <div className="md:w-[600px] p-4 shadow-xl shadow-[#E9D7FE] border border-t-8 border-t-[#471A52] rounded-lg">
      <form onSubmit={handleSubmit(handleConfirmRegistration)}>
        {/* <form> */}
        <div className="my-2">
          <label
            htmlFor="full-name"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Company name
          </label>
          <input
            type="text"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            placeholder="Enter company name"
            name="company_name"
            value={company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="email"
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
            >
              Company email
            </label>
            <input
              type="email"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="@example.com"
              name="company_email"
              value={company_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="full-name"
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
            >
              Company phone
            </label>
            <input
              type="number"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="Enter company name"
              name="company_phone"
              value={company_phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Company size
          </label>
          <input
            type="text"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            placeholder="no. of employees"
            name="company_size"
            value={company_size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
            >
              Location
            </label>
            <input
              type="text"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="Enter company location"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="phone-number"
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
            >
              Country
            </label>
            <input
              type="text"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              placeholder="Enter country of incorporation"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 my-2">
          <div class="block w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
              for="grid-city"
            >
              Contact Person Name
            </label>
            <input
              type="text"
              id="grid-city"
              placeholder="Contact Name"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              name="company_person_name"
              value={company_person_name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
              for="grid-state"
            >
              Contact Person Title
            </label>
            <input
              type="text"
              id="grid-city"
              placeholder="Title"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              name="company_person_title"
              value={company_person_title}
              onChange={handleChange}
              required
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-sm text-[#D0D5DD] font-primaryMedium"
              for="grid-zip"
            >
              Contact Person Number
            </label>
            <input
              type="number"
              placeholder="Whatsapp Number"
              className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
              id="grid-zip"
              name="company_person_whatsapp_number"
              value={company_person_whatsapp_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="stage-of-company"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Stage of company:
          </label>
          <select
            id="stage-of-company"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            name="company_stage"
            value={company_stage}
            onChange={handleChange}
            required
          >
            <option value="">Select one...</option>
            <option value="pre-revenue">Pre-revenue</option>
            <option value="revenue-stage">Revenue stage</option>
          </select>
        </div>
        {/* <div className="mt-2">
          <label
            htmlFor="full-name"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Company Website or Social Media URL
          </label>
          <input
            type="text"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] border rounded-md font-primaryRegular"
            placeholder="Enter company name"
            name="website_url"
            // value={company_name}
            // onChange={handleChange}
            // required
          />
        </div> */}
        <div className="mt-2">
          <label
            htmlFor="phone-number"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            Brief description
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            name="brief_description"
            value={brief_description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="relative my-4 border border-[#E9D7FE] h-20 rounded-md flex flex-col items-center justify-center">
          <label
            htmlFor="file-input"
            className="flex items-center justify-center border border-gray-300 rounded p-4 cursor-pointer"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            <span className="text-[#471A52] font-primarySemibold">
              Select a picture to upload
            </span>
          </label>

          <input
            type="file"
            id="file-input"
            className="hidden"
            name="file"
            onChange={fileUploadHandler}
          />
        </div>
        {filePreview && (
          <div className="mt-4">
            <img
              src={filePreview}
              alt="Selected file"
              className="max-w-full h-auto"
            />
          </div>
        )}
        <div className="mt-2">
          <label
            htmlFor="membership-fees"
            className="block text-sm text-[#D0D5DD] font-primaryMedium"
          >
            If the team reviews your application and you qualify to join the
            network, can you afford $500-$1,000 in lifetime membership fees?
          </label>
          <select
            id="membership-fees"
            className="block w-full h-10 px-4 py-2 mt-2 text-gray-700 border border-[#E9D7FE] rounded-md font-primaryRegular"
            name="membership_fee"
            value={membership_fee}
            onChange={handleChange}
            required
          >
            <option value="">Select one...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mt-6 mb-2">
          <button
            type="submit"
            className="w-full h-[48px] px-4 py-2 font-semibold tracking-wide transition-colors duration-200 transform bg-[#471A52] rounded-md font-primarySemibold text-[#FFFFFF]"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default MentorsNetwork;

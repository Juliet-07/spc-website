import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Accelerator from "../../assets/accelerator.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import One from "../../assets/people.png";
import Two from "../../assets/partner.png";
import Three from "../../assets/method.png";
import WhyUs from "../../assets/whyUs.png";
import Pricing from "../../assets/pricing.png";
import Experience from "../../assets/experience.png";
import Award from "../../assets/award.png";
import Team from "../../assets/team.png";
import Woman from "../../assets/woman.png";
import Man from "../../assets/man.png";
import Community from "../../assets/community.png";
import Intensive from "../../assets/intensive.png";
import Support from "../../assets/support.png";
import Access from "../../assets/access.png";
import Connection from "../../assets/connection.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../../components/Modal";

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

const VentureAccelerator = () => {
  const [modal, setModal] = useState(false);
  const processess = [
    {
      image: <img src={One} />,
      title: "People",
      message:
        "Our global team of talent experts is ready  to make a real impact on your hiring needs.",
    },
    {
      image: <img src={Two} />,

      title: "Partnership",
      message:
        "We work closely with creative and tech industries to boost growth for global brands, and corporates.",
    },
    {
      image: <img src={Three} />,

      title: "Methodology",
      message:
        "Tailored solutions for your business needs, from talent acquisition to streamlined processes",
    },
  ];

  const reasons = [
    {
      image: <img src={Pricing} />,
      text: "Affordable Pricing",
    },
    {
      image: <img src={Experience} />,

      text: "Years of Experience",
    },
    {
      image: <img src={Award} />,

      text: " Award Winning",
    },
    {
      image: <img src={Team} />,

      text: "Professional Team",
    },
  ];

  const acceleratorBenefits = [
    {
      image: <img src={Intensive} />,
      title: "Intensive Programs",
      message:
        "Join our venture accelerators for a fast-track to startup success. Get mentorship, workshops, networking and hands-on support from industry ‘s experts, tailored to your startup’s needs at any stage  ",
    },
    {
      image: <img src={Support} />,
      title: "Tailored Support",
      message:
        "One size does not fit all when it comes to startup acceleration. Our venture accelerators provide tailored support and guidance to help startups overcome their specific challenges and capitalize on their unique opportunities for growth. Whether you're looking to refine your business model, scale your operations, or prepare for fundraising, our accelerator programs offer personalized mentorship and strategic advice to help you achieve your goals.",
    },
    {
      image: <img src={Access} />,
      title: " Access to Resources",
      message:
        "In addition to mentorship and guidance, our venture accelerators provide startups with access to a wide range of resources and support services to fuel their growth. From co-working spaces and office amenities to legal and accounting support, our accelerator partners offer startups the infrastructure and resources they need  to focus on building and scaling their businesses without distraction.",
    },
    {
      image: <img src={Connection} />,
      title: "Investors Connection",
      message:
        "Raising capital is a critical milestone for startups, and our venture accelerators help facilitate connections with investors interested in supporting promising ventures. Through pitch events, demo days, and investor introductions, startups in our accelerator programs have the opportunity to showcase their progress and attract investment from angel investors, venture capitalists, and corporate partners.",
    },
  ];

  const handleModal = () => {
    setModal(true);
  };

  return (
    <>
      {/* Accelerating Innovation */}
      <div className="w-full flex flex-col p-4 md:p-10">
        <Link
          to="/community"
          className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
        >
          <TbArrowBackUp color="#475467" />
          <span className="text-gray-600 mx-2">Back</span>
        </Link>
        <div className="w-full h-full md:h-[776px] bg-gradient-to-r from-[#FCF1FF] via-[rgb(253,246,255)] to-[#F0B5FF] border border-gray-200 rounded-xl my-4 flex flex-col p-4">
          <div className="font-primarySemibold text-gray-900 text-2xl md:text-4xl">
            Accelerating Innovation For Tomorrow
          </div>
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-[555px] h-full">
              <p className="font-primaryRegular md:text-xl text-gray-700 py-3 leading-8 md:leading-[60px]">
                At SPC, we're the launchpad for your boldest innovations. Our
                mission is to propel groundbreaking ideas into tomorrow's
                success stories. With a focus on accelerating innovation, we
                provide unparalleled support, resources, and expertise to help
                startups thrive in today's dynamic market. From strategic
                guidance to hands-on mentorship, we're committed to driving your
                venture forward at full speed. Join us at Velocity Ventures and
                let's shape the future together. Accelerate your vision,
                accelerate your growth, accelerate with us.
              </p>
            </div>
            <div>
              <img src={Accelerator} />
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
      {/* gain competition */}
      <div className="w-full bg-[#F0B5FF]/[12%] p-4 md:p-10">
        <p className="md:w-[801px] text-lg md:text-2xl font-primaryMedium md:font-primarySemibold text-gray-900">
          Gain a competitive edge with our platform partnered with top
          accelerators in Africa to support with resources, networking and
          mentorship
        </p>
        <div className="w-full grid md:grid-cols-2 gap-10 my-10">
          {acceleratorBenefits.map((accelerate) => (
            <div className="md:w-[587px] h-full bg-white border border-[#000000]/[20%] rounded-lg shadow-lg">
              <div>{accelerate.image}</div>
              <p className="text-center py-4 font-primarySemibold text-lg md:text-2xl">
                {accelerate.title}
              </p>
              <p className="font-primaryRegular px-4 pb-4 md:text-lg leading-8 md:leading-[50px]">
                {accelerate.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* why choose us */}
      <div className="w-full flex flex-col p-4 md:p-10 my-4">
        <div className="font-primarySemibold text-gray-900 text-2xl md:text-4xl text-center md:text-left">
          <font color="#BE33E0">Why</font> Choose Us
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between my-4">
          <div>
            <img src={WhyUs} />
          </div>
          <div className="md:w-[560px] px-10 2xl:px-0">
            {" "}
            <div className="w-full grid grid-cols-2 gap-10 md:gap-20">
              {reasons.map((reason) => (
                <div className="w-full flex flex-col items-center justify-center">
                  <div>{reason.image}</div>
                  <p className="font-primaryRegular py-2 text-[#000000] md:text-2xl text-center">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* join the community */}
      <div className="w-full flex flex-col p-4 md:p-10 my-4">
        <div className="font-primarySemibold text-gray-900 text-2xl md:text-4xl text-center md:text-left">
          <font color="#BE33E0">Join</font> The Community
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-[469px] md:h-[436px] md:text-xl py-4">
            <p className="font-primaryRegular leading-8 md:leading-[50px]">
              Join the SPC Universe community today and unlock access to a world
              of opportunity. Whether you're a startup founder in search of your
              next team member or a talented individual eager to contribute your
              skills to a groundbreaking venture, your journey begins here.
              Together, let's build the future of innovation, one collaboration
              at a time.
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
      {/* process */}
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center my-10">
          <p className="font-primaryRegular text-xl text-[#000000]">
            Our Process
          </p>
          <div className="font-primarySemibold text-2xl md:text-4xl py-2">
            Here's <font color="#BE33E0">How it Works</font>
          </div>
        </div>{" "}
        <div className="w-full flex items-center justify-center">
          <div className="grid md:grid-cols-3 gap-4 md:gap-10">
            {processess.map((process) => (
              <div className="w-full md:w-[349px] h-[233px] md:h-[300px] flex flex-col items-center p-2">
                <div>{process.image}</div>
                <p className="font-primarySemibold py-2 text-[#000000] text-xl">
                  {process.title}
                </p>
                <p className="font-primaryRegular text-center px-4">
                  {process.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="bg-[#D9D9D9] px-2 md:px-6">
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
      </div>

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

export default VentureAccelerator;
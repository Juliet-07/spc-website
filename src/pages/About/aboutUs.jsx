import React from "react";
import Hero from "./about-hero.png";
import Accordion from "../../components/Accordion";
import Star from "./Stars.png";

const About = () => {
  const accordionItems = [
    {
      title: "Our Mission",
      content:
        "Our mission is expansive, going beyond conventional boundaries. We are on a transformative journey, sowing the seeds for a connected digital landscape that transcends borders. At the core of our mission is an unwavering commitment to building a borderless world for digital innovators. We innovate, connect, and build thriving hubs that foster innovation and reinforce our dedication to interconnected ecosystems.",
    },
    {
      title: "Our Services",
      content:
        "SPC Universe offers a comprehensive suite of services to empower businesses and individuals in the digital realm. From community building and event hosting that fosters collaboration to transformative training programs and seamless global expansion through Soft Landing services, we provide end-to-end support. Our services are not just about what we do; they are a reflection of who we are — a catalyst for innovation and growth.",
    },
    {
      title: "Our Resources",
      content:
        "Our resources extend beyond the tangible. We harness the power of vibrant communities, insightful events, transformative training, and comprehensive soft landing services. These resources create an ecosystem where digital innovators can thrive, connect, and succeed globally. SPC Universe's resources are a testament to our commitment to providing the tools and support needed for success in the ever-evolving digital landscape.",
    },
    // Add more sections as needed
  ];
  return (
    <>
      <div className="w-full relative flex items-center justify-center">
        <img src={Hero} className="w-full" />
        <div className="md:w-[1180px] 2xl:w-[1400px] absolute flex flex-col md:items-center md:justify-center top-10 md:top-[300px] 2xl:top-[500px] bg-[#471A52] rounded-2xl mx-4 md:mx-0 p-4 md:p-0">
          <p className="font-semibold text-2xl text-[#E9D7FE] py-2 md:py-4">
            About us
          </p>
          <p className="font-semibold text-2xl md:text-5xl text-[#FCFAFF]">
            Providing innovative digital solutions
          </p>
          <p className="font-normal text-xl text-[#F4EBFF] md:text-center md:p-4 md:pb-10">
            SPC UNIVERSE stands at the forefront of providing innovative digital
            solutions on a global scale. Our commitment extends beyond borders,
            as we actively craft a vibrant ecosystem for digital innovators
            around the world. With our headquarters strategically located in
            Kigali, Rwanda, we serve as a central hub for our global initiative.
            <br />
            <br />
            Spanning across continents, SPC Universe has established a
            significant presence worldwide. Our reach extends to diverse corners
            of the globe, fostering collaboration and innovation on an
            international level. We unite visionaries and startups from various
            countries, creating inclusive communities that transcend
            geographical boundaries.
          </p>
        </div>
      </div>
      <div className="mt-[200px] md:mt-[100px] pt-[300px] md:pt-0">
        <img src={Star} />
      </div>
      {/* story */}
      <div className="w-full bg-[#F4EBFF] flex flex-col md:flex-row items-center justify-between p-4 md:p-10 2xl:px-20 mt-20">
        <div className="md:w-[600px] rounded-lg flex flex-col">
          <div className="font-semibold text-3xl md:text-4xl text-gray-900">
            Our Story
          </div>
          <div className="w-[254px] h-2 bg-[#471A52]"></div>
          <p className="font-normal md:text-lg text-gray-700 py-4">
            SPC Universe transcends the conventional role of a company; it is an
            ecosystem builder with a grand vision for a connected digital
            landscape. Our mission goes beyond borders as we strive to construct
            the largest and most collaborative community for digital innovators.
            <br />
            <br />
            Since our inception, SPC Universe has been on a transformative
            journey, creating vibrant communities in numerous countries. These
            serve as thriving hubs for collaboration, knowledge sharing, and
            unwavering support among digital innovators.
            <br />
            <br /> At the heart of our mission is an unwavering commitment to
            building a borderless world for digital visionaries. Our communities
            stand as flourishing centers, fostering innovation and reinforcing
            interconnected ecosystems. We facilitate opportunities for startups
            to raise capital from an extensive network of venture capitalists
            and investors. Through our EdTech initiatives, we empower talents
            with skills that transcend borders, connecting them to global job
            opportunities.
            <br />
            <br /> This isn't just what we do; it's who we are. As we continue
            to innovate, connect, and build, the story of SPC Universe unfolds
            as a narrative of forging a borderless future for digital innovators
            — a story that resonates globally.
          </p>
          {/* <p className="font-normal md:text-lg text-gray-700 py-4">
            SPC Universe is not just a company; it's an ecosystem builder with a
            grand vision. Our focus extends beyond conventional boundaries, and
            we are on a mission to construct the largest and most collaborative
            community for digital innovators.
            <br />
            <br /> From the inception, SPC Universe has embarked on a
            transformative journey, sowing the seeds for a connected digital
            landscape that transcends borders. Our trailblazing activities have
            birthed vibrant communities in numerous countries, each serving as a
            nexus for collaboration, knowledge sharing and unwavering support
            among digital innovators.
            <br />
            <br /> At the core of our mission lies the unwavering commitment to
            building a borderless world for digital visionaries. As we weave
            this global tapestry, our communities stand as thriving hubs,
            fostering innovation and reinforcing our dedication to
            interconnected ecosystems. We facilitate opportunities for startups
            to raise capital from our extensive network of venture capitalists,
            investors e.t.c. Additionally, through our EdTech initiatives, we
            are equipping talents with skills that transcend borders, connecting
            them to global job opportunities.
            <br />
            <br /> This is not just what we do, it's who we are. As we continue
            to innovate, connect and build, the story of SPC Universe is one of
            forging a borderless future for digital innovstors — a story that
            resonates globally.
          </p> */}
        </div>
        <div className="w-full md:w-[592px] h-[293px] md:h-[577px] bg-black rounded-lg">
          image
        </div>
      </div>
      {/* how we do it */}
      <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20 mt-10">
        <div className="font-semibold text-3xl md:text-4xl text-gray-900">
          How we do it
        </div>
        <div className="w-[178px] md:w-[887px] h-1 bg-[#471A52]"></div>
        <div className="flex flex-col my-4">
          <p className="py-2 font-semibold text-xl md:text-2xl text-gray-700">
            Community
          </p>
          <p className="font-normal md:text-xl text-gray-500">
            At SPC Universe, community building is at the core of our ethos. We
            foster some of the largest and most collaborative startup
            communities globally. These communities serve as dynamic hubs,
            connecting like-minded visionaries, fostering collaboration, and
            creating an ecosystem where innovation thrives.
          </p>
        </div>
        <div className="flex flex-col my-4">
          <p className="py-2 font-semibold text-xl md:text-2xl text-gray-700">
            Events
          </p>
          <p className="font-normal md:text-xl text-gray-500">
            Our events are curated to inspire and connect digital innovators.
            SPC Universe hosts engaging events that transcend boundaries,
            providing a platform for knowledge exchange, networking, and
            meaningful connections. From insightful panels to interactive
            workshops, our events empower participants to stay at the forefront
            of digital innovation.
          </p>
        </div>
        <div className="flex flex-col my-4">
          <p className="py-2 font-semibold text-xl md:text-2xl text-gray-700">
            Training
          </p>
          <p className="font-normal md:text-xl text-gray-500">
            SPC Universe is dedicated to empowering talents with skills that
            transcend borders. Through cutting-edge EdTech initiatives, we offer
            transformative training programs. Our goal is to equip individuals
            with the expertise needed for global opportunities, fostering a
            community of highly skilled and adaptable digital innovators.
          </p>
        </div>
        <div className="flex flex-col my-4">
          <p className="py-2 font-semibold text-xl md:text-2xl text-gray-700">
            Softlanding
          </p>
          <p className="font-normal md:text-xl text-gray-500">
            Navigating global expansion becomes seamless with SPC Universe's
            Soft Landing service. From comprehensive research and go-to-market
            strategies to business incorporation and talent acquisition, we
            provide end-to-end support. Our Soft Landing service ensures a
            smooth transition for businesses entering new markets, laying the
            foundation for success.
          </p>
        </div>
      </div>
      {/* what we represent */}
      <div className="w-full flex flex-col p-4 md:p-10 2xl:px-20 mt-10 bg-[#471A52] text-white">
        <div className="font-semibold text-3xl md:text-4xl">
          What we represent
        </div>
        <p className="font-normal md:text-xl text-white py-2">
          At SPC Universe, we represent a dynamic force in the digital
          landscape. We transcend the conventional role of a company and embody
          an ecosystem builder with a grand vision. Our essence lies in
          fostering the largest and most collaborative community for digital
          innovators globally. We represent a commitment to forging a borderless
          future for visionaries in the digital realm.
        </p>
        <div className="flex flex-col my-4">
          <Accordion items={accordionItems} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10 p-4">
        <p className="font-semibold text-[#471A52] text-4xl">Get in touch</p>
        <p className="font-normal text-xl text-gray-500">
          We’d love to hear from you. Please fill out this form.
        </p>
        <form className="w-full max-w-lg mt-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-first-name"
              >
                First name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="mail@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                for="grid-password"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                placeholder="(250)1234567654321345"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                // placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
          <button className="w-full bg-[#471A52] text-white rounded-lg p-4 text-center font-semibold">
            Send message
          </button>
        </form>
      </div>
      {/* contact details */}
      <div className="w-full bg-[#471A52] p-4 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-around">
        <div className="flex flex-col">
          <p className="font-semibold text-3xl">Our Contact Details</p>
          <p>Let's connect.</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl pt-6 md:pt-0">Telephone</p>
          <p className="font-normal text-white text-base">(+250) 792108551</p>
          <p className="font-semibold text-xl mt-4">Whatsapp</p>
          <p className="font-normal text-white text-base">(+250) 792108551</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl pt-6 md:pt-0">Office</p>
          <p className="font-normal text-white text-base">Norrsken house Kigali, Rwanda</p>
          <p className="font-semibold text-xl mt-4">Email</p>
          <p className="font-normal text-white text-base">support@silverspoonuniverse.com</p>
        </div>
      </div>
    </>
  );
};

export default About;

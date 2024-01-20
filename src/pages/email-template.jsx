import React from "react";

const Emails = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
      <div className="w-full h-[100px] flex items-center justify-center text-white bg-[#051650]">
        {/* <div>icon</div> */}
        <div className="flex flex-col mx-4">
          <p className="tracking-wide font-medium">SPC Universe</p>
          <p className="uppercase text-3xl font-semibold tracking-[15px]">
            newsletter
          </p>
        </div>
      </div>
      <div className="w-full h-[300px] p-4">
        <img
          src="https://s8544411.sendpul.se/image/files/emailservice/userfiles/1b6adaf688f90381e2bd0d8563225f618544411/sp-default-2.jpg"
          className="object-cover w-full h-full"
          alt="ADIS"
        />
      </div>
      <p className="text-center px-4 font-medium tracking-wider">
        Prepare for the Africa Digital Innovation Summit, the largest and most
        collaborative gathering for digital innovators in Africa.
      </p>
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-4">
        <div className="pl-2 flex flex-col md:w-[50%]">
          <div>
            <p className="text-[#051650] font-semibold text-xl">News</p>
            <p className="text-gray-600 md:text-sm tracking tracking-wider">
              Join Janade du Plessis, Yusuf Adewale, Franklin Peters, Sadraoui
              Mohammed, Charmaine Hayden, King David, and 100 other leading
              African digital innovators as they delve into the exploration of
              greatness, spotlighting the Africa Continental Free Trade Area.
            </p>
          </div>
          <div className="my-2">
            <p className="text-[#051650] font-semibold text-xl">Tickets</p>
            <p className="text-gray-600 md:text-sm tracking-wider">
              Prepare for high-level virtual interconnectivity, as you engage
              with 55,000+ virtual delegates from the four regions of Africa.
              Connect with fellow participants through our extensive built-in
              forum.
            </p>
            <ol className="list-disc px-4">
              <li className="text-gray-600 md:text-sm tracking-wider">
                Secure your <b>Virtual Delegate Pass </b> using the attached{" "}
                <a
                  href="https://silverspoonuniverse.com/events/virtual-delegate-pass"
                  target="_blank"
                  className="text-[#471A52] font-semibold underline text-base"
                >
                  link
                </a>
              </li>
            </ol>
            <br />
            <p className="text-gray-600 md:text-sm tracking-wider">
              For an in-person experience, connect with delegates from different
              countries and explore the beauty of our Africa Free Trade Area
            </p>
            <ol className="list-disc px-4">
              <li className="text-gray-600 md:text-sm tracking-wider">
                {" "}
                Obtain your <b>Country Delegate Pass </b> using the attached{" "}
                <a
                  href="https://silverspoonuniverse.com/events/country-delegate-pass"
                  target="_blank"
                  className="text-[#471A52] font-semibold underline text-base"
                >
                  link
                </a>
              </li>
              <li className="text-gray-600 md:text-sm tracking-wider">
                For an <b>All-Access</b> experience, use the attached{" "}
                <a
                  href="https://silverspoonuniverse.com/events/country-delegate-pass"
                  target="_blank"
                  className="text-[#471A52] font-semibold underline text-base"
                >
                  link
                </a>
              </li>
            </ol>
            <br />
            <p className="text-gray-600 md:text-sm tracking-wider">
              Additionally, join 100+ exhibitors from across the four regions of
              Africa and showcase the beauty of your brand.
            </p>
            <ol className="list-disc px-4">
              <li className="text-gray-600 md:text-sm tracking-wider">
                Sign up as an <b>Exhibitor</b> using the attached{" "}
                <a
                  href="https://silverspoonuniverse.com/events/exhibtion-partner-ticket"
                  target="_blank"
                  className="text-[#471A52] font-semibold underline text-base"
                >
                  link
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="pl-4 flex flex-col md:w-[50%] bg-[#051650] text-white">
          <div>
            <p className="font-semibold text-xl py-2">Programs</p>
            <ol className="list-disc px-2 md:text-sm">
              <li>Founders Series Global</li>
              <li>Expansion Series</li>
              <li>Africa SME ASSEMBLY</li>
              <li>Africa Digital Youth Conference</li>
            </ol>
          </div>
          <div>
            <p className="font-semibold text-xl py-2">Events</p>
            <ol className="list-disc px-2 md:text-sm">
              <li>West Africa Digital Innovation Summit (Nigeria and Ghana)</li>
              <li>North Africa Digital Innovation Summit (Morocco)</li>
              <li>
                South Africa Digital Innovation Summit (South Africa and
                Namibia)
              </li>
              <li>East Africa Digital Innovation Summit (Kenya and Uganda)</li>
            </ol>
          </div>
          <div>
            <p className="font-semibold text-xl">Note</p>
            <p>
              Investors and strategic partnerships have always been integral to
              innovation in Africa. If you wish to connect with investors or
              potential partners, schedule an appointment through the provided
              Calendly link.
            </p>
          </div>
        </div>
      </div>
      <p className="text-center px-4 font-medium tracking-wider">
        We look forward to welcoming you to{" "}
        <b>
          Africa's largest and most collaborative summit for digital innovators.
        </b>{" "}
      </p>
      {/* <div className="md:w-[500px] h-[600px] rounded-xl shadow-lg my-10 overflow-hidden">
        <img
          src="https://s8544411.sendpul.se/image/files/emailservice/userfiles/1b6adaf688f90381e2bd0d8563225f618544411/sp-default-2.jpg"
          className="rounded-t-xl object-cover w-full h-1/2"
          alt="ADIS"
        />
        <div className="p-4 overflow-y-auto h-1/2">
          <p className="font-semibold text-gray-800">Dear Esteemed Partner</p>
          <p className="py-2">
            Wishing you a Happy New Year! As we stride into 2024, we are
            thrilled to share exciting updates about the Africa Digital
            Innovation Summit (ADIS).
          </p>
          <p className="font-semibold text-gray-800">Key Highlights:</p>
          <p className="py-2">
            <b>Expanded Reach:</b> ADIS 2024 will span across 10 African
            countries, featuring both Preliminary and Main Programs.
          </p>
          <div className="py-2">
            <b>Preliminary programs include:</b>
            <ol className="list-disc px-4">
              <li>Founders Series Global</li>
              <li>Expansion Series</li>
              <li>Africa SME ASSEMBLY</li>
              <li>Africa Digital Youth Conference</li>
            </ol>
          </div>
          <div className="py-2">
            <b>Main Programs:</b>
            <ol className="list-disc px-4">
              <li>North Africa Digital Innovation Summit</li>
              <li>West Africa Digital Innovation Summit</li>
              <li>South Africa Digital Innovation Summit</li>
              <li>East Africa Digital Innovation Summit</li>
            </ol>
          </div>
          <div className="py-2">
            <b>Grand Finale Programs:</b>
            <ol className="list-disc px-4">
              <li>Investors and Stakeholders Forum</li>
              <li>Africa Digital Entrepreneurs Summit and ADIS Award Night</li>
              <li>Partners Tourism Week</li>
            </ol>
          </div>
          <p className="py-2">
            <b>Virtual Experience:</b> Enhancing our virtual platform for an
            enriched experience, we've surpassed 10,000+ virtual delegates and
            5000+ physical delegates from 13 African countries.
          </p>
          <p className="py-2">
            <b>Media Recognition:</b> ADIS has garnered attention from prominent
            media houses, including a feature on Techcabal.
            <a
              href="https://techcabal.com/2024/01/05/introduction-to-africa-digital-innovation-summit/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-red-500 font-semibold"
            >
              Read more
            </a>
          </p>
          <p className="py-2">
            <b>Your Presence Matters:</b> We eagerly await your partnership and
            presence at ADIS 2024. Kindly communicate your preferences to our
            lead for seamless collaboration.
          </p>
          <p className="py-4">Warm Regards,</p>
          <p>[Your Event Development Partner's Name]</p>
        </div>
      </div> */}
    </div>
  );
};

export default Emails;

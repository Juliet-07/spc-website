import React from "react";
import ADIS from "../assets/adis.png";

const Emails = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[500px] h-[600px] rounded-xl shadow-lg my-10 overflow-hidden">
        <img
          src={ADIS}
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
      </div>
    </div>
  );
};

export default Emails;

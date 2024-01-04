import { Link, useNavigate } from "react-router-dom";
import { StartUpData, TalentData } from "./data";
import Startup from "./startUp.png";
import Talent from "./talent.png";

// startUpData component
export const StartUpDataComponent = () => {
  const navigate = useNavigate();
  const handleViewDetails = (pass) => {
    // Assuming you are using React Router's `history` for navigation
    // Replace '/startup/:id' with the appropriate URL structure for your application
    navigate(`/community/startup/${pass.id}`);
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {StartUpData.map((startup) => (
        <div
          key={startup.id}
          className="md:w-[400px] bg-white rounded-xl shadow-lg p-4"
        >
          <img src={Startup} />
          <h2 className="text-xl font-semibold text-gray-900 py-2">
            {startup.name}
          </h2>
          <p className="font-normal text-xs text-gray-500">
            {startup.description}
          </p>
          <div className="w-full grid grid-cols-3 py-4">
            <p className="flex flex-col">
              <span>{startup.amountRaised}</span>
              <span className="font-normal text-xs text-gray-500">Raised</span>
            </p>
            <p className="flex flex-col">
              <span>{startup.numOfInvestors}</span>
              <span className="font-normal text-xs text-gray-500">
                Investors
              </span>
            </p>
            <p className="flex flex-col">
              <span>{startup.minInvestments}</span>
              <span className="font-normal text-xs text-gray-500">
                Min. Investments
              </span>
            </p>
          </div>
          <div
            onClick={() => handleViewDetails(startup)}
            className="w-full flex items-center justify-center font-semibold text-[#471A52] cursor-pointer"
          >
            View details
          </div>
        </div>
      ))}
    </div>
  );
};

// talentData component
export const TalentDataComponent = () => {
  const navigate = useNavigate();
  const handleViewDetails = (pass) => {
    // Assuming you are using React Router's `history` for navigation
    // Replace '/startup/:id' with the appropriate URL structure for your application
    navigate(`/community/talent/${pass.id}`);
  };
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {TalentData.map((talent) => (
        <div
          key={talent.id}
          className="md:w-[302px] bg-white rounded-xl shadow-lg p-4"
        >
          <img src={Talent} className="w-full" />
          <h2 className="text-xl font-semibold text-gray-900">{talent.name}</h2>
          <p className="font-semibold text-xs text-[#471A52]">
            {talent.jobDescription}
          </p>
          <div className="w-full flex items-center justify-between my-4">
            <p className="flex flex-col">
              <span className="font-normal text-gray-400 text-xs">Skills</span>
              <span className="font-medium text-xs text-gray-800">
                {talent.skills.join(", ")}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-normal text-gray-400 text-xs">
                Experience
              </span>
              <span className="font-medium text-xs text-gray-800">
                {talent.experience}
              </span>
            </p>
          </div>
          <div
            onClick={() => handleViewDetails(talent)}
            className="w-full flex items-center justify-center font-semibold text-[#471A52] cursor-pointer"
          >
            View profile
          </div>
        </div>
      ))}
    </div>
  );
};

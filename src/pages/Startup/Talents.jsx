import React from "react";

const Talents = () => {
  const talents = [
    {
      name: "King David",
      title: "Product Designer",
      skills: "Design, Prototyping",
      experince: "3 years",
    },
    {
      name: "King David",
      title: "Software Engineer",
      skills: "Javascript, React",
      experince: "4 years",
    },
    {
      name: "King David",
      title: "Blockchain Developer",
      skills: "Solidity, Python",
      experince: "5 years",
    },
    {
      name: "Janet Goodwill",
      title: "Product Designer",
      skills: "Design, Prototyping",
      experince: "3 years",
    },
    {
      name: "Janet Goodwill",
      title: "Software Engineer",
      skills: "Javascript, React",
      experince: "4 years",
    },
    {
      name: "Juliet Reddington",
      title: "Blockchain Developer",
      skills: "Solidity, Python",
      experince: "5 years",
    },
  ];
  return (
    <div className="h-screen overflow-y-auto">
      <div className="grid md:grid-cols-3 gap-4">
        {talents.map((talent) => (
          <div
            key={talent.name}
            className="w-[330px] border border-gray-200 rounded-lg p-2 my-4 flex flex-col items-center"
          >
            <div className="w-[302px] h-[192px] bg-[#D9D9D9] rounded-xl"></div>
            <div className="w-full my-2 px-3">
              <p className="text-gray-900 text-xl font-primarySemibold">
                {talent.name}
              </p>
              <p className="text-gray-500 text-sm">{talent.title}</p>
              <div className="border border-dashed border-gray-200 mt-2"></div>
              <div className="w-full flex items-center justify-between mt-4">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400 font-primaryRegular">
                    Skills
                  </p>
                  <p className="text-sm text-gray-800 font-primaryRegular">
                    {talent.skills}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400 font-primaryRegular">
                    Experience
                  </p>
                  <p className="text-gray-800 font-primaryRegular text-sm">
                    {talent.experience}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[#471A52] font-primarySemibold my-2">
              View Profile
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talents;
